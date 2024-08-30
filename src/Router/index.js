import React from 'react'
import {Route, Routes } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import Dashboard from '../pages/Dashboard.jsx';
import About from '../pages/About.jsx';
import Analytics from '../pages/Analytics.jsx';
import Comment from '../pages/Comment.jsx';
import Services from '../pages/Services.jsx';
import ProductList from '../pages/ProductList.jsx';

function index() {
  return (
    <div>
       <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/listofservice" element={<Services />} />

          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
         
          <Route path="/productList" element={<ProductList />} />
        </Routes>
    </div>
  )
}

export default index
