import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Fragments/layouts/Layout";
import Dashboard from "./pages/dashboard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
