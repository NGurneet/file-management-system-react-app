// // src/components/FilesInsideFolder.tsx
// import React from 'react';
// import {
//   Typography,
//   Container,
//   List,
//   ListItem,
//   ListItemText,
//   CircularProgress,
//   Box,
// } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import { useFetchFilesInFolderQuery } from '../../features/apiSlice';

// const FilesInsideFolder: React.FC = () => {
//   // const { folderId } = useParams<{ folderId: string }>();
//   const folderId= "67921d6c5b5b28545856bd17"
//   const { data: files, error, isLoading } = (folderId);
//   console.log(files)
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

//   if (!files || files.length === 0) {
//     return (
//       <Typography variant="body1" mt={2}>
//         No files found in this folder.
//       </Typography>
//     );
//   }

//   return (
//     <Container>
//       <Typography variant="h4" mt={4} gutterBottom>
//         Files in Folder
//       </Typography>
//       <List>
//         {files.map((file: any) => (
//           <ListItem key={file._id}>
//             <ListItemText primary={file.name} />
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// };

// export default FilesInsideFolder;
