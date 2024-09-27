import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseContextProvider from './AllHooks/useContext/UseContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <UseContextProvider>
    <App />
  </UseContextProvider>
)
