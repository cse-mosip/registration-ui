import React from "react";
import { Route, Routes } from "react-router-dom";
import { HOME, ASKINFO,REG_COMPLETE } from "../constants/constants";
import Home from "../pages/Home";
import RegistrationComplete from "../pages/RegistrationComplete"
import InfoAsker from "../pages/UserInfoInput";

const ViewRoutes = () => {

  return (
    <Routes>
      <Route exact path={HOME} element={<Home />} />
      <Route exact path={REG_COMPLETE} element={<RegistrationComplete />} />
      <Route exact path={ASKINFO} element={<InfoAsker />} />
    </Routes>
  );
};

export default ViewRoutes;
