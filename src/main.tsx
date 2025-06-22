import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import { VideoProvider } from './global-state/context/video/videoContext.tsx'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./global-state/context/auth/authContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
