import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import { useCreateFolderMutation } from '../../folderApi';

interface CreateFolderDialogProps {
  open: boolean;
  onClose: () => void;
}

const CreateFolderDialog: React.FC<CreateFolderDialogProps> = ({ open, onClose }) => {
  const [folderName, setFolderName] = useState('');
  const [createFolder] = useCreateFolderMutation(); // RTK Query mutation to create folder

  const handleFolderNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(event.target.value);
  };

  const handleCreateFolder = async () => {
    if (!folderName) {
      return;
    }

    try {
      // Create the folder by calling the API
      await createFolder({
        name: folderName,
        description: '',
        createdBy: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }).unwrap();
      // Close dialog and reset the folder name
      onClose();
      setFolderName('');
    } catch (error) {
      console.error('Failed to create folder:', error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create a New Folder</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          label="Folder Name"
          value={folderName}
          onChange={handleFolderNameChange}
          margin="dense"
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleCreateFolder}
          color="primary"
          variant="contained"
          disabled={!folderName}
        >
          Create Folder
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateFolderDialog;
