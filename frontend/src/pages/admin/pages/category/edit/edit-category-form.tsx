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
import { useUpdateCategory } from "@/pages/admin/services/queries/category/queries";
import { useState } from "react";
import FileUploadDropzone from "@/components/shared/file-uploader/file-dropzone";

const schema = z.object({
  type: z.string().optional(),
  image: z.string().optional(),
});

export default function EditCategoryForm({
  category,
}: {
  category: UpdateCategory;
}) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: category,
  });

  const { mutateAsync: updateCategory, isPending } = useUpdateCategory();
  const [currentImage, setCurrentImage] = useState<string>(category?.image);
  const [files, setFiles] = useState<File[] | undefined>([]);

  const onSubmit = async (data: z.infer<typeof schema>) => {
    try {
      const formData = new FormData();
      formData.append("type", data.type || "");
      if (files && files.length > 0) {
        formData.append("image", files[0]); // Upload new file
      } else {
        formData.append("image", currentImage); // Keep existing image URL
      }
      await updateCategory({ id: category.id, ...data, image: currentImage });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category Title</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter category title"
                  {...field}
                />
              </FormControl>
              <FormDescription>Enter category title</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Image */}
        <div>
          <FormLabel>Category Image</FormLabel>
          <div className="flex items-center gap-4">
            {currentImage && (
              <div className="mt-4">
                <img
                  src={currentImage}
                  alt="Current category"
                  className="w-48 h-auto rounded-lg"
                />
              </div>
            )}
            <FileUploadDropzone
              value={files}
              onValueChange={(newFiles) => {
                setFiles(newFiles);
                if (newFiles && newFiles.length > 0) {
                  const objectUrl = URL.createObjectURL(newFiles[0]);
                  setCurrentImage(objectUrl);
                  form.setValue("image", objectUrl); // Update form value
                } else {
                  setCurrentImage(category.image); // Reset to original
                }
              }}
              dropzoneOptions={{
                accept: { "image/*": [".jpg", ".jpeg", ".png"] },
                maxFiles: 1,
                maxSize: 2 * 1024 * 1024,
              }}
            />
          </div>
          <FormDescription>
            Upload a new image or keep the current one.
          </FormDescription>
          <FormMessage />
        </div>
        <ButtonLoader isLoading={isPending}>Update Category</ButtonLoader>
      </form>
    </Form>
  );
}
