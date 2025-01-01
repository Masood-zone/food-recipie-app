import { useState, useEffect } from "react";
import { DropzoneOptions } from "react-dropzone";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "./file-uploader";

interface FileUploadDropzoneProps {
  value?: File[]; // Files passed from the parent
  onValueChange?: (files: File[]) => void; // Callback to handle file changes
  dropzoneOptions?: DropzoneOptions; // Additional dropzone configurations
}

const FileUploadDropzone: React.FC<FileUploadDropzoneProps> = ({
  value = [],
  onValueChange,
  dropzoneOptions,
}) => {
  const [files, setFiles] = useState<File[]>(value);

  // Update local state when `value` changes
  useEffect(() => {
    setFiles(value || []);
  }, [value]);

  const defaultDropzoneOptions: DropzoneOptions = {
    accept: { "image/*": [".jpg", ".jpeg", ".png"] },
    multiple: true,
    maxFiles: 4,
    maxSize: 1 * 1024 * 1024,
  };

  const mergedOptions = { ...defaultDropzoneOptions, ...dropzoneOptions };

  const handleFilesChange = (newFiles: File[] | null) => {
    const updatedFiles = newFiles || [];
    setFiles(updatedFiles);
    if (onValueChange) {
      onValueChange(updatedFiles);
    }
  };

  return (
    <FileUploader
      value={files}
      onValueChange={handleFilesChange}
      dropzoneOptions={mergedOptions}
    >
      <FileInput>
        <div className="flex items-center justify-center h-36 w-full border bg-background rounded-md">
          <p className="text-gray-400">Drop files here</p>
        </div>
      </FileInput>
      <FileUploaderContent className="flex items-center flex-row gap-2">
        {files?.map((file, i) => (
          <FileUploaderItem
            key={i}
            index={i}
            className="size-20 p-0 rounded-md overflow-hidden"
            aria-roledescription={`file ${i + 1} containing ${file.name}`}
          >
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              height={80}
              width={80}
              className="size-20 p-0"
            />
          </FileUploaderItem>
        ))}
      </FileUploaderContent>
    </FileUploader>
  );
};

export default FileUploadDropzone;
