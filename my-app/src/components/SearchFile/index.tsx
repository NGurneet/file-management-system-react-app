
import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';

interface SearchFileProps {
  onSearch: (query: string) => void;
}

const SearchFile: React.FC<SearchFileProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value); // Pass the search query to parent
  };

  return (
    <Box mb={2}>
      <TextField
        label="Search Files"
        variant="outlined"
        fullWidth
        value={query}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SearchFile;
