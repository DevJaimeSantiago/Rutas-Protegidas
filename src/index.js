import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// views
import App from "./App";
import Blog from "./routes/Blog";
import Contacto from "./routes/Contacto";
import Inicio from "./routes/Inicio";
import Notfound from "./routes/Notfound";
import Posts from "./routes/Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<Posts />} />
          <Route path="contacto" element={<Contacto />} />

          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
