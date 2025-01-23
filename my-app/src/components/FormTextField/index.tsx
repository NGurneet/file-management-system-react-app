// FormTextField.tsx
import React from 'react';
import { TextField } from '@mui/material';

interface FormTextFieldProps {
  label: string;
  type: string;  // Can be 'email', 'text', 'password', etc.
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  label,
  type,
  value,
  onChange,
  errorMessage,
}) => {
  return (
    <TextField
      label={label}
      type={type}
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
      error={!value && errorMessage !== ''}
      helperText={!value && errorMessage !== '' ? `${label} is required` : ''}
    />
  );
};

export default FormTextField;

