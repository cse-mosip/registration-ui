import React from "react";
import { Route, Routes } from "react-router-dom";
import { HOME, ASKINFO } from "../constants/constants";
import Home from "../pages/Home";
import InfoAsker from "../pages/UserInfoInput";

const ViewRoutes = () => {

  return (
    <Routes>
      <Route exact path={HOME} element={<Home />} />
      <Route exact path={ASKINFO} element={<InfoAsker />} />
    </Routes>
  );
};

export default ViewRoutes;
