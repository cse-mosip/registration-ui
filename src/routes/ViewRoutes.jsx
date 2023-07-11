import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HOME } from '../constants/constants';
import Home from '../pages/Home';
import LogIn from '../pages/Login';

const ViewRoutes = () => {
  return (
    <Routes>
      <Route exact path="" element={<LogIn />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
};

export default ViewRoutes;
