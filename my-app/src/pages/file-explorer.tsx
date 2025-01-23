// import React, { useState } from 'react';
// import {
//   Typography,
//   Container,
//   List,
//   CircularProgress,
//   Box,
//   Button,
// } from '@mui/material';
// import { useFetchFilesQuery } from '../features/apiSlice';
// import FileItem from '../components/FileItem'; // Import the FileItem component
// import SearchFile from '../components/SearchFile'; // Import the SearchFile component
// import CreateFolderDialog from '../components/CreateFolderDialog'; // Import the CreateFolderDialog component
// import FolderItem from '../components/FolderItem/index'; // Import the FolderItem component

// const FileExplorer: React.FC = () => {
//   // Fetch files using the custom hook from RTK Query
//   const { data: files, error, isLoading } = useFetchFilesQuery();

//   // Access the data array from the response
//   const fileList = files?.data || [];

//   // State for managing search query
//   const [searchQuery, setSearchQuery] = useState('');

//   // Handle search query
//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//   };

//   // Filter files based on search query
//   const filteredFiles = fileList.filter((file: any) =>
//     file.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Group files into folders and non-folder items
//   const folders = filteredFiles.filter((file: any) => file.type === 'folder');
//   const filesInFolders = filteredFiles.filter((file: any) => file.type !== 'folder');

//   // State for managing folder creation dialog
//   const [openDialog, setOpenDialog] = useState(false);

//   const handleOpenDialog = () => {
//     setOpenDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//   };

//   if (isLoading) {
//     return (
//       <Box textAlign="center" mt={4}>
//         <CircularProgress />
//         <Typography variant="body1" mt={2}>
//           Loading files...
//         </Typography>
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Typography variant="body1" color="error" mt={2}>
//         Failed to fetch files. Please try again later.
//       </Typography>
//     );
//   }

//   if (filteredFiles.length === 0) {
//     return (
//       <Typography variant="body1" mt={2}>
//         No files found.
//       </Typography>
//     );
//   }

//   return (
//     <Container>
//       <Typography variant="h4" mt={4} gutterBottom>
//         File Explorer
//       </Typography>

//       {/* Include the SearchFile component */}
//       <SearchFile onSearch={handleSearch} />

//       {/* Button to open the folder creation dialog */}
//       <Box textAlign="center" mt={3}>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleOpenDialog}
//         >
//           Create Folder
//         </Button>
//       </Box>

//       {/* Display folders first */}
//       <Typography variant="h6" mt={4}>
//         Folders
//       </Typography>
//       <List>
//         {folders.map((folder: any, index: number) => (
//           <FolderItem key={index} folder={folder} /> // Use FolderItem for each folder
//         ))}
//       </List>

//       {/* Display files under folders */}
//       <Typography variant="h6" mt={4}>
//         Files
//       </Typography>
//       <List>
//         {filesInFolders.map((file: any, index: number) => (
//           <FileItem key={index} file={file} index={index} /> // Use FileItem for each file
//         ))}
//       </List>

//       {/* Pass props to the CreateFolderDialog */}
//       <CreateFolderDialog open={openDialog} onClose={handleCloseDialog} />
//     </Container>
//   );
// };

// export default FileExplorer;

// // import React, { useState } from 'react';
// // import {
// //   Typography,
// //   Container,
// //   List,
// //   CircularProgress,
// //   Box,
// //   Button,
// // } from '@mui/material';
// // import { useFetchFilesQuery } from '../features/apiSlice';
// // import FileItem from '../components/FileItem'; // Import the FileItem component
// // import SearchFile from '../components/SearchFile'; // Import the SearchFile component
// // import CreateFolderDialog from '../components/CreateFolderDialog'; // Import the new CreateFolderDialog component

// // const FileExplorer: React.FC = () => {
// //   // Fetch files using the custom hook from RTK Query
// //   const { data: files, error, isLoading } = useFetchFilesQuery();

// //   // Access the data array from the response
// //   const fileList = files?.data || [];

// //   // State for managing search query
// //   const [searchQuery, setSearchQuery] = useState('');

// //   // Handle search query
// //   const handleSearch = (query: string) => {
// //     setSearchQuery(query);
// //   };

// //   // Filter files based on search query
// //   const filteredFiles = fileList.filter((file: any) =>
// //     file.name.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   // Group files into folders and non-folder items
// //   const folders = filteredFiles.filter((file:any) => file.type === 'folder');
// //   const filesInFolders = filteredFiles.filter((file:any) => file.type !== 'folder');

// //   // State for managing folder creation dialog
// //   const [openDialog, setOpenDialog] = useState(false);

// //   const handleOpenDialog = () => {
// //     setOpenDialog(true);
// //   };

// //   const handleCloseDialog = () => {
// //     setOpenDialog(false);
// //   };

// //   if (isLoading) {
// //     return (
// //       <Box textAlign="center" mt={4}>
// //         <CircularProgress />
// //         <Typography variant="body1" mt={2}>
// //           Loading files...
// //         </Typography>
// //       </Box>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <Typography variant="body1" color="error" mt={2}>
// //         Failed to fetch files. Please try again later.
// //       </Typography>
// //     );
// //   }

// //   if (filteredFiles.length === 0) {
// //     return (
// //       <Typography variant="body1" mt={2}>
// //         No files found.
// //       </Typography>
// //     );
// //   }

// //   return (
// //     <Container>
// //       <Typography variant="h4" mt={4} gutterBottom>
// //         File Explorer
// //       </Typography>

// //       {/* Include the SearchFile component */}
// //       <SearchFile onSearch={handleSearch} />

// //       {/* Button to open the folder creation dialog */}
// //       <Box textAlign="center" mt={3}>
// //         <Button
// //           variant="contained"
// //           color="primary"
// //           onClick={handleOpenDialog}
// //         >
// //           Create Folder
// //         </Button>
// //       </Box>

// //       {/* Display folders first */}
// //       <Typography variant="h6" mt={4}>
// //         Folders
// //       </Typography>
// //       <List>
// //         {folders.map((folder: any, index: number) => (
// //           <FileItem key={index} file={folder} index={index} /> // Use FileItem for each folder
// //         ))}
// //       </List>

// //       {/* Display files under folders */}
// //       <Typography variant="h6" mt={4}>
// //         Files
// //       </Typography>
// //       <List>
// //         {filesInFolders.map((file: any, index: number) => (
// //           <FileItem key={index} file={file} index={index} /> // Use FileItem for each file
// //         ))}
// //       </List>

// //       {/* Pass props to the CreateFolderDialog */}
// //       <CreateFolderDialog open={openDialog} onClose={handleCloseDialog} />
// //     </Container>
// //   );
// // };

// // export default FileExplorer;

// src/components/FileExplorer.tsx
import React, { useState } from 'react';
import {
  Typography,
  Container,
  List,
  CircularProgress,
  Box,
  Button,
  Link,
} from '@mui/material';
import { useFetchFilesQuery } from '../features/apiSlice';
import FileItem from '../components/FileItem'; // Import the FileItem component
import SearchFile from '../components/SearchFile'; // Import the SearchFile component
import CreateFolderDialog from '../components/CreateFolderDialog'; // Import the CreateFolderDialog component
import FolderItem from '../components/FolderItem/index';  // Import the FolderItem component
import { Link as RouterLink } from 'react-router-dom';

const FileExplorer: React.FC = () => {
  // Fetch files using the custom hook from RTK Query
  const { data: files, error, isLoading } = useFetchFilesQuery();

  // Access the data array from the response
  const fileList = files?.data || [];

  // State for managing search query
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search query
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter files based on search query
  const filteredFiles = fileList.filter((file: any) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group files into folders and non-folder items
  const folders = filteredFiles.filter((file: any) => file.type === 'folder');
  const filesInFolders = filteredFiles.filter((file: any) => file.type !== 'folder');

  // State for managing folder creation dialog
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  if (isLoading) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
        <Typography variant="body1" mt={2}>
          Loading files...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="body1" color="error" mt={2}>
        Failed to fetch files. Please try again later.
      </Typography>
    );
  }

  if (filteredFiles.length === 0) {
    return (
      <Typography variant="body1" mt={2}>
        No files found.
      </Typography>
    );
  }

  return (
    <Container>
      <Typography variant="h4" mt={4} gutterBottom>
        File Explorer
      </Typography>

      {/* Include the SearchFile component */}
      <SearchFile onSearch={handleSearch} />

      {/* Button to open the folder creation dialog */}
      <Box textAlign="center" mt={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >
          Create Folder
        </Button>
      </Box>

      {/* Link to navigate to FolderPage */}
      <Box textAlign="center" mt={3}>
        <Link component={RouterLink} to="/folders">
          <Button variant="outlined" color="primary">
            View All Folders
          </Button>
        </Link>
      </Box>

      {/* Display folders first */}
      {folders.length > 0 && (
        <>
          <Typography variant="h6" mt={4}>
            Folders
          </Typography>
          <List>
            {folders.map((folder: any, index: number) => (
              <FolderItem key={index} folder={folder} />
            ))}
          </List>
        </>
      )}

      {/* Display files under folders */}
      {filesInFolders.length > 0 && (
        <>
          <Typography variant="h6" mt={4}>
            Files
          </Typography>
          <List>
            {filesInFolders.map((file: any, index: number) => (
              <FileItem key={index} file={file} index={index} />
            ))}
          </List>
        </>
      )}

      {/* Pass props to the CreateFolderDialog */}
      <CreateFolderDialog open={openDialog} onClose={handleCloseDialog} />
    </Container>
  );
};

export default FileExplorer;
