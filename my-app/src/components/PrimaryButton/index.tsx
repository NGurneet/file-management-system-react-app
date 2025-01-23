import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface PrimaryButtonProps {
  title: string;
  onClick?: () => void;
  route?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ title, onClick, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route); // Navigate to the specified route
    } else if (onClick) {
      onClick(); // Execute the passed function
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
      sx={{ margin: '8px' }}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
