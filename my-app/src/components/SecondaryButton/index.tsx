import React from 'react';
import { Button } from '@mui/material';

interface SecondaryButtonProps {
  title: string;
  onClick?: () => void;
  route?: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ title, onClick, route }) => {
  const handleClick = () => {
    if (route) {
      window.location.href = route; // Navigate to the route
    } else if (onClick) {
      onClick(); // Execute the passed function
    }
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={handleClick}
      sx={{ margin: '8px' }}
    >
      {title}
    </Button>
  );
};

export default SecondaryButton;
