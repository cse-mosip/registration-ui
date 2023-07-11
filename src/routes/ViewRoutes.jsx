import React from "react";
import { Route, Routes } from "react-router-dom";
import { HOME } from "../constants/constants";
import Home from "../pages/Home";

const ViewRoutes = () => {

  return (
    <Routes>
      <Route exact path={HOME} element={<Home />} />
    </Routes>
  );
};

export default ViewRoutes;
