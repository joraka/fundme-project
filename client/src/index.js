import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import Kebab from "./Kebab";
import PageNotFound from "./Pages/PageNotFound";
import NewIdeaPage from "./Pages/NewIdeaPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kebab" element={<Kebab />} />
          <Route path="new-idea" element={<NewIdeaPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
