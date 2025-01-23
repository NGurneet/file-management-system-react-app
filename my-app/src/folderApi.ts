import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define types for Folder
export interface Folder {
//   _id: string;
  name: string;
  description: string;
  parentFolderId?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

// Define types for the response
interface FileUploadResponse {
  message: string;
}

export const folderApi = createApi({
  reducerPath: 'folderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/folders' }),
  endpoints: (builder) => ({
    createFolder: builder.mutation<Folder, Folder>({
      query: (newFolder) => ({
        url: '',
        method: 'POST',
        body: newFolder,
      }),
    }),

    uploadFile: builder.mutation<FileUploadResponse, FormData>({
      query: (fileData) => ({
        url: '/upload',
        method: 'POST',
        body: fileData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
    }),

    getFolders: builder.query<Folder[], void>({
      query: () => '',
    }),
  }),
});

export const { useCreateFolderMutation, useUploadFileMutation, useGetFoldersQuery } = folderApi;
