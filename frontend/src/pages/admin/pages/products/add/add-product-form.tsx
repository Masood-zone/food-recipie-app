import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ButtonLoader } from "@/components/shared/button/button-loader";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/shared/file-uploader/file-uploader";
import { CloudUpload, Paperclip } from "lucide-react";
import { useCreateProduct } from "@/pages/admin/services/queries/products/queries";
import { useFetchAllCategoriesQuery } from "@/pages/admin/services/queries/category/queries";

const formSchema = z.object({
  title: z.string().nonempty("Product title is required"),
  description: z.string().nonempty("Description is required"),
  quantity: z.coerce.number().positive("Quantity must be a positive number"),
  price: z.coerce.number().positive("Price must be a positive number"),
  categoryId: z.coerce.number().positive("Category is required"),
  image: z.string().optional(),
});

export default function AddProductForm() {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 1,
    maxSize: 1024 * 1024 * 4,
    multiple: false,
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const { data: categories } = useFetchAllCategoriesQuery();
  const { mutateAsync: addProduct, isPending } = useCreateProduct();

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const formData = new FormData();
    // Append all form fields to FormData
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("quantity", data.quantity.toString());
    formData.append("price", data.price.toString());
    formData.append("categoryId", data.categoryId.toString());

    // Append the image file if it exists
    if (files && files.length > 0) {
      formData.append("image", files[0]);
    }

    try {
      await addProduct(formData);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="image"
          render={() => (
            <FormItem>
              <FormLabel>Select Product Photo</FormLabel>
              <FormControl>
                <FileUploader
                  value={files}
                  onValueChange={setFiles}
                  dropzoneOptions={dropZoneConfig}
                  className="relative bg-background rounded-lg p-2"
                >
                  <FileInput
                    id="fileInput"
                    className="outline-dashed outline-1 outline-slate-500"
                  >
                    <div className="flex items-center justify-center flex-col p-8 w-full ">
                      <CloudUpload className="text-gray-500 w-10 h-10" />
                      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                        &nbsp; or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF
                      </p>
                    </div>
                  </FileInput>
                  <FileUploaderContent>
                    {files &&
                      files.length > 0 &&
                      files.map((file, i) => (
                        <FileUploaderItem key={i} index={i}>
                          <Paperclip className="h-4 w-4 stroke-current" />
                          <span>{file.name}</span>
                        </FileUploaderItem>
                      ))}
                  </FileUploaderContent>
                </FileUploader>
              </FormControl>
              <FormDescription>Select a file to upload.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Product Title" type="" {...field} />
              </FormControl>
              <FormDescription>This is the product title</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Product Description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>Description of product</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="The total quantity of products in inventory"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    The total products in inventory
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Product price"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Price of the product </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select
                {...field}
                value={field?.value?.toString()}
                onValueChange={(value) => field.onChange(value)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Category of product" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories?.map((category: Category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                    >
                      {category.type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Product category</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <ButtonLoader type="submit" isLoading={isPending}>
          Add Product
        </ButtonLoader>
      </form>
    </Form>
  );
}
