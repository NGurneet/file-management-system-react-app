// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//  import Header from './components/Headers/index';
// import Home from './pages/home-page';
// import FileExplorer from './pages/file-explorer';
// import UserLogin from './pages/user-login-page';
// import UploadFilePage from './pages/upload-file-page';
// import { ToastContainer } from 'react-toastify';
// import ReactDOM from 'react-dom/client';
// import { store } from './store';


// const App = () => {
//   return (
//     <Router>
//       <ToastContainer 
//         position="top-right" 
//         autoClose={3000} 
//         hideProgressBar={false} 
//         newestOnTop={false} 
//         closeOnClick 
//         rtl={false} 
//         pauseOnFocusLoss 
//         draggable 
//         pauseOnHover 
//       />
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/explorer" element={<FileExplorer />} />
//         <Route path="/login" element={<UserLogin />} />
//         <Route path="/upload" element={<UploadFilePage />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Headers';  // Corrected import
import Home from './pages/home-page';
import FileExplorer from './pages/file-explorer';
import UserLogin from './pages/user-login-page';
import UploadFilePage from './pages/upload-file-page';
import { ToastContainer } from 'react-toastify';
import { store } from './store';  // Ensure store is imported for proper Redux functionality
import { Provider } from 'react-redux';  // Added to wrap the app with Redux store
import FolderPage from './components/FolderPage';
import FilesPage from './components/FilesPage';
 //import Signup from './components/Signup';


const App: React.FC = () => {
  return (
    <Provider store={store}> {/* Wrapping with Redux store provider */}
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Conditionally render Header based on current path */}
        {location.pathname !== '/login' && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<FileExplorer />} />
          <Route path="/login" element={<UserLogin />} />
           {/* <Route path="/signup" element={<Signup />} />  */}
          <Route path="/upload" element={<UploadFilePage />} />
          <Route path="/folders" element={<FolderPage />} />
          <Route path="/folder/id" element={<FilesPage />} /> 
         
          {/* <Route path="/folder/:folderId" Component={FilesPage} /> */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
