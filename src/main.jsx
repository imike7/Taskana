import './assets/global.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppLayout from "./layouts/appLayout";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
)
