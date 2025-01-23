// src/components/FolderItem.tsx
import React from 'react';
import { ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

interface FolderItemProps {
  folder: any;
}

const FolderItem: React.FC<FolderItemProps> = ({ folder }) => {
  return (
    <ListItem component={Link} to={`/folder/id`}>
      <ListItemText primary={folder.name} />
    </ListItem>
  );
};

export default FolderItem;
