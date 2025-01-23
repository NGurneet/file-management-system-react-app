import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useCreateFolderMutation } from './folderApi';
import { Folder } from './folderApi';

const FolderForm: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [parentFolderId, setParentFolderId] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  const [createFolder, { isLoading, isError, error }] = useCreateFolderMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const folderData: Folder = {
      //_id,
      name,
      description,
      parentFolderId,
      createdBy,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      await createFolder(folderData).unwrap(); // unwrap will throw an error if it fails
      setName('');
      setDescription('');
      setParentFolderId('');
      setCreatedBy('');
    } catch (error) {
      console.error('Failed to create folder:', error);
    }
  };

  return (
    <div>
      <h2>Create Folder</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Folder Name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <textarea
          placeholder="Folder Description"
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Parent Folder ID"
          value={parentFolderId}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setParentFolderId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Created By"
          value={createdBy}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCreatedBy(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create Folder'}
        </button>
      </form>
      {isError && <p>Error: {(error as { message: string }).message}</p>}
    </div>
  );
};

export default FolderForm;
