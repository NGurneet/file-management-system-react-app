import React, { useState } from 'react';
import { Container, Box, Typography, Button, Alert } from '@mui/material';
 import { useSignupMutation } from '../features/apiSlice';
import { showSuccessToast, showErrorToast } from '../../utils/ToastUtils/toast-utils';
import { toast } from 'react-toastify';
import FormTextField from '../../components/FormTextField';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
   const [signup, { isLoading }] = useSignupMutation(); // RTK Query mutation for signup

  const handleSignup = async () => {
    setErrorMessage(''); // Clear previous error message
    if (!email || !password) {
      setErrorMessage('Email and password are required.');
      return;
    }

    try {
      const response = await signup({ email, password }).unwrap();
      console.log('Signup successful:', response);
      toast.success(response.data?.token);
      // Save the token to localStorage
      localStorage.setItem('authToken', response.data?.token);
      
      showSuccessToast('Signup successful'); 
      // Redirect or update the app state after signup
      window.location.href = '/'; // Replace with your dashboard route
    } catch (error: any) {
      console.error('Signup failed:', error);
      showErrorToast('Signup failed. Please check your credentials.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" gutterBottom>
          User Signup
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
              onClick={handleSignup}
              disabled={isLoading}
            >
             {isLoading ? 'Signing up...' : 'Sign Up'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
