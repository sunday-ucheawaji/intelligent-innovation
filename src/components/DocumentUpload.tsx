import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { toast } from "react-toastify";
import { UploadToServerClient } from "../services/profileService";

interface Props {
  fileSize: number;
  fileType: string[];
  onSubmit: (data: { title: string; files: string[] }) => void;
}

const DocumentUpload = ({ fileSize, fileType, onSubmit }: Props) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) setFiles([...files, ...Array.from(selectedFiles)]);
  };

  const handleSubmit = async () => {
    const invalidFile = files.find(
      (file) => file.size > fileSize || !fileType.includes(file.type)
    );

    if (invalidFile) {
      toast.error(
        "Invalid file size or type. Please ensure files are within 5MB and of the correct type.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return;
    }

    const filePromises = files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      return UploadToServerClient.post(formData);
    });

    setUploading(true);

    try {
      const responses = await Promise.all(filePromises);
      const filesArray = responses.map((res) => res.data.file);
      onSubmit({ title, files: filesArray });
    } catch (error) {
      toast.error("An error occurred while uploading files.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box width="400px" margin="auto" padding="8">
      <Text fontSize="xl" marginBottom="4">
        Document Upload
      </Text>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Choose documents</FormLabel>
        <Input
          type="file"
          multiple
          onChange={handleFileChange}
          disabled={uploading}
        />
      </FormControl>
      <Button
        colorScheme="teal"
        onClick={handleSubmit}
        isLoading={uploading}
        marginTop="4"
      >
        Upload
      </Button>
    </Box>
  );
};

export default DocumentUpload;
