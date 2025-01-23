import React, { useState } from 'react';
import { Container, Box, Typography, Button, Alert } from '@mui/material';
import { useLoginMutation } from '../features/apiSlice';
import { showSuccessToast, showErrorToast } from '../utils/ToastUtils/toast-utils';
import { toast } from 'react-toastify';
import FormTextField from '../components/FormTextField/index';

const UserLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [login, { isLoading }] = useLoginMutation(); // RTK Query mutation for login

  const handleLogin = async () => {
    setErrorMessage(''); // Clear previous error message
    if (!email || !password) {
      setErrorMessage('Email and password are required.');
      return;
    }
  
    try {
      const response = await login({ email, password }).unwrap();
      console.log('Login successful:', response);
      toast.success(response.data?.token);
      // Save the token to localStorage
      localStorage.setItem('authToken', response.data?.token);
      
      showSuccessToast('Login successful'); 
      // Redirect or update the app state after login
      window.location.href = '/'; // Replace with your dashboard route
    } catch (error: any) {
      console.error('Login failed:', error);
      showErrorToast('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
          User Login
        </Typography>
        <Box mt={4}>
          {errorMessage && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Alert>
          )}
          {/* Email Text Field */}
          <FormTextField label='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} errorMessage={!email && errorMessage !== '' ? 'Email is required' : ''}/>
          {/* Password Text Field */}
          <FormTextField label='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} errorMessage={!password && errorMessage !== '' ? 'Password is required' : ''}/>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
          </Box>
          <Box mt={2}>
            <Button
              variant="outlined"
              color="secondary"
              fullWidth
              href="/signup"  // Redirect to signup page
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default UserLogin;
