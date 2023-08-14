import APIClient from "./apiClient";

export interface IProfile {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string;
  role: string[];
  is_online: boolean;
}

export interface IUploadInput {
  title: string;
  files: string[];
}

export const ProfileClient = new APIClient<any, { data: IProfile }>(
  "/user/profile"
);

export const UploadClient = new APIClient<IUploadInput, any>(
  "/document-upload-convert"
);

export const UploadToServerClient = new APIClient<FormData, any>(
  "/document-upload-convert"
);

export const FetchDocumentsClient = new APIClient<any, any>("/documents");
