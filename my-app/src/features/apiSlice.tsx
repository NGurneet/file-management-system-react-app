import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api', // Your backend base URL
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
      if (token) {
        headers.set('Authorization', `Bearer ${token}`); // Add Authorization header
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    
    signup: builder.mutation<{ token: string }, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    uploadFile: builder.mutation<void, FormData>({
      query: (formData) => ({
        url: '/files/upload',
        method: 'POST',
        body: formData,
      }),
    }),
    fetchFiles: builder.query<any[], void>({
      query: () => '/files',
    }),
    fetchFilesInFolder: builder.query<any[], string>({ // Fetch files in a specific folder
      query: (folderId) => `/files/${folderId}`,
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useUploadFileMutation, useFetchFilesQuery, useFetchFilesInFolderQuery } = apiSlice;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const apiSlice = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://localhost:5000/api', // Your backend base URL
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`); // Add Authorization header
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     login: builder.mutation<{ token: string }, { email: string; password: string }>({
//       query: (credentials) => ({
//         url: '/users/login',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     uploadFile: builder.mutation<void, FormData>({
//       query: (formData) => ({
//         url: '/files/upload',
//         method: 'POST',
//         body: formData,
//       }),
//     }),
//     fetchFiles: builder.query<any[], void>({
//       query: () => '/files',
//     }),
//   }),
//     fetchFilesInFolder: builder.query<any[], string>({ // Fetch files in a specific folder
//     query: (folderId) => `/files/${folderId}`,
//   }),
// });




// export const { useLoginMutation, useUploadFileMutation, useFetchFilesQuery useFetchFilesInFolderQuery } = apiSlice;
