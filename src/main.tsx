import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootLayout from "./layout.tsx";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootLayout children={<App />}/>
  </StrictMode>,
)
