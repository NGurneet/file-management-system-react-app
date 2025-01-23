import React from 'react';

interface FileInputFieldProps {
  onFileChange: (file: File | null) => void;
}

const FileInputField: React.FC<FileInputFieldProps> = ({ onFileChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onFileChange(event.target.files[0]);
    } else {
      onFileChange(null); 
    }
  };

  return (
    <input
      type="file"
      onChange={handleChange}
      style={{ display: 'block', margin: '16px 0' }}
    />
  );
};

export default FileInputField;
