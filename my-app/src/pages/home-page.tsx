import React from 'react';
import { Box, Typography, Button, Stack, Container } from '@mui/material';
import PrimaryButton from '../components/PrimaryButton/index';
import SecondaryButton from '../components/SecondaryButton/index';


const Home = () => {
  return (
    <Container>
      <Box mt={8} textAlign="center">
        {/* Title */}
        <Typography variant="h3" gutterBottom>
          Welcome to File Sharing & Storage
        </Typography>

        {/* Subtitle */}
        <Typography variant="h5" color="textSecondary" mb={4}>
          Your secure and cloud-based file management solution
        </Typography>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <PrimaryButton title="Explore Files" route='/explorer' />
          <SecondaryButton title="Upload Files" route='/upload' />
         
        </Stack>
      </Box>
    </Container>
  );
};

export default Home;

