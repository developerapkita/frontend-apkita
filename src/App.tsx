import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Fragments/layouts/Layout";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Anggota from "./pages/anggota";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/anggota" element={<Anggota />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
