// FileItem.tsx
import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import SecondaryButton from '../../components/SecondaryButton';

interface FileItemProps {
  file: any;
  index: number;
}

const FileItem: React.FC<FileItemProps> = ({ file, index }) => {
  return (
    <ListItem key={index} divider>
      <ListItemText
        primary={file.name || `File ${index + 1}`}
        secondary={`Size: ${(file.size / 1024).toFixed(2)} KB`}
      />
      <SecondaryButton title="Open" onClick={() => window.open(file.url)}  />
    </ListItem>
  );
};

export default FileItem;
