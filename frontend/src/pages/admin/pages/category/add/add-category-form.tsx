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
import { useCreateCategory } from "@/pages/admin/services/queries/category/queries";
import { useEffect, useState } from "react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/shared/file-uploader/file-uploader";
import { CloudUpload, Paperclip } from "lucide-react";

const schema = z.object({
  type: z.string().nonempty("Category title is required"),
  image: z.any().optional(),
});

export default function AddCategoryForm() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const dropZoneConfig = {
    maxFiles: 1,
    maxSize: 1024 * 1024 * 4,
    multiple: false,
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync: addCategory, isPending } = useCreateCategory();

  const handleSubmit = async (data: z.infer<typeof schema>) => {
    try {
      const formData = new FormData();
      formData.append("type", data.type);

      if (files && files.length > 0) {
        formData.append("image", files[0]);
      }

      await addCategory(formData);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  useEffect(() => {
    // Clean up the preview URL when component unmounts or when a new file is selected
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {/* Image */}
        <div className="flex flex-row items-center space-x-5">
          {previewUrl && (
            <div className="mt-4">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-full h-auto max-h-48 rounded-lg"
              />
            </div>
          )}
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Photo</FormLabel>
                <FormControl>
                  <FileUploader
                    value={files}
                    onValueChange={(newFiles) => {
                      setFiles(newFiles);
                      if (newFiles && newFiles.length > 0) {
                        field.onChange(newFiles[0]);
                        const objectUrl = URL.createObjectURL(newFiles[0]);
                        setPreviewUrl(objectUrl);
                      } else {
                        field.onChange(undefined);
                        setPreviewUrl(null);
                      }
                    }}
                    dropzoneOptions={dropZoneConfig}
                    className="relative bg-background rounded-lg p-2 w-96"
                  >
                    <FileInput
                      id="fileInput"
                      className="outline-dashed outline-1 outline-slate-500"
                    >
                      <div className="flex items-center justify-center flex-col p-8 w-full">
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
                <FormDescription>Select an image to upload.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Name */}
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
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

        <ButtonLoader type="submit" isLoading={isPending}>
          Create Category
        </ButtonLoader>
      </form>
    </Form>
  );
}
