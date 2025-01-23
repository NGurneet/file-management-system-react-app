// src/pages/FolderPage.tsx
import React, { useState } from 'react';
import {
  Typography,
  Container,
  List,
  CircularProgress,
  Box,
} from '@mui/material';
import { useFetchFilesQuery } from '../../features/apiSlice';
import FolderItem from '../FolderItem'; // Import the FolderItem component
import { useGetFoldersQuery } from '../../folderApi';

const FolderPage: React.FC = () => {
  // Fetch files using the custom hook from RTK Query
  const { data: files, error, isLoading } = useGetFoldersQuery();
  console.log(files);

  // Access the data array from the response
  const fileList = files?.data || [];

  // Group files into folders
  const folders = fileList.filter((file: any) => file.type === 'folder');

  if (isLoading) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
        <Typography variant="body1" mt={2}>
          Loading folders...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="body1" color="error" mt={2}>
        Failed to fetch folders. Please try again later.
      </Typography>
    );
  }

  if (fileList
    .length === 0) {
    return (
      <Typography variant="body1" mt={2}>
        No folders found.
      </Typography>
    );
  }

  return (
    <Container>
      <Typography variant="h4" mt={4} gutterBottom>
        Folders
      </Typography>

      {/* Display folders */}
      <List>
            {fileList.map((folder: any, index: number) => (
              <FolderItem key={index} folder={folder}/>
            ))}
        </List>
      {/* <List>
        {folders.map((folder: any, index: number) => (
          <FolderItem key={index} folder={folder} />
        ))}
      </List> */}
    </Container>
  );
};

export default FolderPage;
