// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/apiSlice'; // Import your API slice
import { folderApi } from './folderApi'; // Import your folder API slice

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Add apiSlice reducer
    [folderApi.reducerPath]: folderApi.reducer, // Add folderApi reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware) // Add middleware for apiSlice
      .concat(folderApi.middleware), // Add middleware for folderApi
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
