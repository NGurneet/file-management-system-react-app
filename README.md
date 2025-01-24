
# File Management System - React App

This is a file-sharing and management system built with React for the frontend and integrated with a custom backend. It allows users to upload, download, and manage files seamlessly.

## Features

- User authentication (login/logout)
- File upload and download functionality
- File listing with metadata (name, size, etc.)
- Responsive and user-friendly interface
- Integration with a backend API
- Error handling for better user experience

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A running instance of the backend API for the file management system

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NGurneet/file-management-system-react-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd file-management-system-react-app
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create an `.env` file in the root directory and configure the backend API URL:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:5000/api
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open the app in your browser:
   ```
   http://localhost:3000
   ```

### Test Credentials

Use the following credentials to log in and test the application:

- **Email:** `fionna@example.com`
- **Password:** `fionna123`

## Usage

1. **Login:** Enter the test credentials or create a new account using the backend system.
2. **File Upload:** Upload files by navigating to the upload section and selecting files from your system.
3. **File List:** View all uploaded files with their metadata.
4. **Download Files:** Click on the "Download" button next to a file to download it to your system.

## Project Structure

The project is organized as follows:

```
src/
├── components/       # Reusable components (e.g., FileList, UploadForm)
├── features/         # RTK Query slices for API interactions
├── pages/            # Main pages (e.g., FileExplorer, Login)
├── theme/            # Custom MUI theme
├── App.tsx           # Root app component
└── index.tsx         # Entry point
```

## API Endpoints

The app communicates with the backend using the following API endpoints:

- **POST /api/users/login:** User login
- **POST /api/files/upload:** Upload a file
- **GET /api/files:** Fetch all uploaded files
- **GET /api/files/download/:id:** Download a file

## Technologies Used

- **Frontend:** React, TypeScript, Redux Toolkit, Material-UI
- **Backend:** Node.js, Express (see backend repository)
- **State Management:** Redux Toolkit Query (RTK Query)
- **Styling:** Material-UI (MUI)
- **File Storage:** Cloudinary (or any other storage solution integrated into the backend)

## Screenshots

### Login Page
![Login Page](https://via.placeholder.com/800x400?text=Login+Page)

### File Explorer
![File Explorer](https://via.placeholder.com/800x400?text=File+Explorer)

## Known Issues

- Ensure the backend is running and accessible at the specified API base URL.
- File upload size limitations depend on the backend and storage configuration.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Developer:** [Gurneet Singh](https://github.com/NGurneet)
