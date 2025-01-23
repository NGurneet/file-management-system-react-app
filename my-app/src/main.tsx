import React from "react"
import { createRoot } from "react-dom/client"
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./store"
import "./index.css"
import CustomThemeProvider from './theme';

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Provider store={store}>
        <CustomThemeProvider>
        <App />
        </CustomThemeProvider>
        
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
