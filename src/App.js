import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Router from './Router/index'

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/*" element={<Router />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;