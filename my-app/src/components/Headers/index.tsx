import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const history = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token from localStorage
    localStorage.removeItem('authToken');
    // Redirect to the login page
    history('/login');
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* App Title/Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          File Sharing & Storage
        </Typography>
        {/* Navigation Links */}
        <Box>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/explorer">
            File Explorer
          </Button>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
