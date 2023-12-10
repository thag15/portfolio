import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import Theme from "./theme/page.js";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider theme={Theme}>
        <CssBaseline />
        <App />
      </CssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
