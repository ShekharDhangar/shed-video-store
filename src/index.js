import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom"
import { VideoProvider } from "./context/videoContext";
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    < BrowserRouter>
      <VideoProvider>
        <AuthProvider>
        <App />
        </AuthProvider>
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
