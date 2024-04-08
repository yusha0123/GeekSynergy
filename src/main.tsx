import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/sonner";
import { AuthContextProvider } from "./context/authContext.tsx";
import InfoModal from "./components/info-modal.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    <Toaster position="top-center" richColors />
    <InfoModal />
  </React.StrictMode>
);
