import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AuthPage from "./AuthPage";
import MainPage from "./MainPage";
import Layout from "../shared/ui/layout"

export const Routing = () => {
  return (
    <Routes>
        <Route element={<Layout />} path="/">
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/main" element={<MainPage />} />
        </Route>
    </Routes>
  );
};