// src/pages/UploadFilePage.tsx
import React, { useState, useEffect } from 'react';
import { showSuccessToast, showErrorToast } from '../utils/ToastUtils/toast-utils';
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useUploadFileMutation } from '../features/apiSlice';  // Adjust the import based on your file structure
import { useGetFoldersQuery } from '../folderApi';
const UploadFilePage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [folderId, setFolderId] = useState('');
  const { data: folders, isLoading: isFoldersLoading } = useGetFoldersQuery();  // Fetch folders using RTK Query

  // Hook for file upload mutation
  const [uploadFile, { isLoading: isUploading, isError, error }] = useUploadFileMutation();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  const handleFileUpload = async () => {
    if (!file) {
      showErrorToast('Please select a file to upload.');
      return;
    }

    // Prepare form data for file upload
    const formData = new FormData();
    formData.append('file', file);

    // Add folderId to form data only if it's not default
    if (folderId !== 'default') {
      formData.append('folderId', folderId);
    }

    try {
      // Call the uploadFile mutation using RTK Query
      await uploadFile(formData).unwrap();
      showSuccessToast('File uploaded successfully!');
      setFile(null);  // Clear the file input after successful upload
      setFolderId(''); // Reset folder ID if needed
    } catch (err) {
      showErrorToast('File upload failed. Please try again.');
      console.error('Error during file upload:', err);
    }

    handleCloseDialog(); // Close dialog after upload
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Upload File
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" onClick={handleOpenDialog}>
            Choose File
          </Button>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Upload File</DialogTitle>
        <DialogContent>
          <Box mt={2}>
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: 'block', margin: '16px 0' }}
            />
            <TextField
              label="Selected File"
              fullWidth
              disabled
              value={file ? file.name : ''}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Folder</InputLabel>
              <Select
                value={folderId}
                onChange={(e) => setFolderId(e.target.value)}
                disabled={isFoldersLoading}
              >
                <MenuItem value="default">Default</MenuItem>
                {folders && folders.data.map((folder: any) => (
                  <MenuItem key={folder._id} value={folder._id}>
                    {folder.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleFileUpload}
            color="primary"
            variant="contained"
            disabled={isUploading || !file}
          >
            {isUploading ? 'Uploading...' : 'Upload'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Optional Error display */}
      {isError && <p style={{ color: 'red' }}>{(error as { message: string }).message || 'Something went wrong!'}</p>}
    </Container>
  );
};

export default UploadFilePage;

// import React, { useState } from 'react';
// import { showSuccessToast, showErrorToast } from '../utils/ToastUtils/toast-utils';
// import {
//   Container,
//   Box,
//   Typography,
//   Button,
//   TextField,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from '@mui/material';
// import { useUploadFileMutation } from '../features/apiSlice';  // Adjust the import based on your file structure

// const UploadFilePage: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [file, setFile] = useState<File | null>(null);
//   const [folderId, setFolderId] = useState(''); // For folder selection (optional)

//   // Hook for file upload mutation
//   const [uploadFile, { isLoading, isError, error }] = useUploadFileMutation();

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleOpenDialog = () => setOpen(true);
//   const handleCloseDialog = () => setOpen(false);

//   const handleFileUpload = async () => {
//     if (!file || !folderId) {
//       showErrorToast('Please select a file and folder to upload.');
//       return;
//     }

//     // Prepare form data for file upload
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('folderId', folderId);

//     try {
//       // Call the uploadFile mutation using RTK Query
//       await uploadFile(formData).unwrap();
//       showSuccessToast('File uploaded successfully!');
//       setFile(null);  // Clear the file input after successful upload
//       setFolderId(''); // Reset folder ID if needed
//     } catch (err) {
//       showErrorToast('File upload failed. Please try again.');
//       console.error('Error during file upload:', err);
//     }

//     handleCloseDialog(); // Close dialog after upload
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box mt={8} textAlign="center">
//         <Typography variant="h4" gutterBottom>
//           Upload File
//         </Typography>
//         <Box mt={4}>
//           <Button variant="contained" color="primary" onClick={handleOpenDialog}>
//             Choose File
//           </Button>
//         </Box>
//       </Box>

//       <Dialog open={open} onClose={handleCloseDialog}>
//         <DialogTitle>Upload File</DialogTitle>
//         <DialogContent>
//           <Box mt={2}>
//             <input
//               type="file"
//               onChange={handleFileChange}
//               style={{ display: 'block', margin: '16px 0' }}
//             />
//             <TextField
//               label="Selected File"
//               fullWidth
//               disabled
//               value={file ? file.name : ''}
//             />
//             <TextField
//               label="Folder ID"
//               fullWidth
//               value={folderId}
//               onChange={(e) => setFolderId(e.target.value)}
//               margin="normal"
//             />
//           </Box>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="secondary">
//             Cancel
//           </Button>
//           <Button
//             onClick={handleFileUpload}
//             color="primary"
//             variant="contained"
//             disabled={isLoading || !file}
//           >
//             {isLoading ? 'Uploading...' : 'Upload'}
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Optional Error display */}
//       {isError && <p style={{ color: 'red' }}>{(error as { message: string }).message || 'Something went wrong!'}</p>}
//     </Container>
//   );
// };

// export default UploadFilePage;


// // import React, { useState } from 'react';
// // import { showSuccessToast, showErrorToast } from '../utils/ToastUtils/toast-utils';
// // import {
// //   Container,
// //   Box,
// //   Typography,
// //   Button,
// //   TextField,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// // } from '@mui/material';

// // const UploadFilePage: React.FC = () => {
// //   const [open, setOpen] = useState(false);
// //   const [file, setFile] = useState<File | null>(null);

// //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     if (event.target.files) {
// //       setFile(event.target.files[0]);
// //     }
// //   };

// //   const handleOpenDialog = () => setOpen(true);
// //   const handleCloseDialog = () => setOpen(false);

// //   const handleFileUpload = async () => {
// //     if (!file) {
// //       showErrorToast('Please select a file to upload.');
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append('file', file);

// //     // If authentication token is needed
// //     const token = localStorage.getItem('authToken');
// //     if (token) {
// //       formData.append('token', token);
// //     }

// //     try {
// //       const response = await fetch('http://localhost:5000/api/files/upload', {
// //         method: 'POST',
// //         body: formData,
// //         headers: {
// //            Authorization: `Bearer ${token}`
// //         },
// //       });

// //       if (response.ok) {
// //         const data = await response.json();
// //         showSuccessToast('File uploaded successfully!');
// //         console.log('File upload successful:', data);
// //       } else {
// //         throw new Error('File upload failed');
// //       }
// //     } catch (error) {
// //       showErrorToast('File upload failed. Please try again.');
// //       console.error('Error during file upload:', error);
// //     }

// //     handleCloseDialog();
// //   };

// //   return (
// //     <Container maxWidth="sm">
// //       <Box mt={8} textAlign="center">
// //         <Typography variant="h4" gutterBottom>
// //           Upload File
// //         </Typography>
// //         <Box mt={4}>
// //           <Button variant="contained" color="primary" onClick={handleOpenDialog}>
// //             Choose File
// //           </Button>
// //         </Box>
// //       </Box>

// //       <Dialog open={open} onClose={handleCloseDialog}>
// //         <DialogTitle>Upload File</DialogTitle>
// //         <DialogContent>
// //           <Box mt={2}>
// //             <input
// //               type="file"
// //               onChange={handleFileChange}
// //               style={{ display: 'block', margin: '16px 0' }}
// //             />
// //             <TextField
// //               label="Selected File"
// //               fullWidth
// //               disabled
// //               value={file ? file.name : ''}
// //             />
// //           </Box>
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleCloseDialog} color="secondary">
// //             Cancel
// //           </Button>
// //           <Button
// //             onClick={handleFileUpload}
// //             color="primary"
// //             variant="contained"
// //             disabled={!file}
// //           >
// //             Upload
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </Container>
// //   );
// // };

// // export default UploadFilePage;
