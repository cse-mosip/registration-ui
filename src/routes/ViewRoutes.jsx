import { Route, Routes } from "react-router-dom";
import { HOME, ASKINFO, APP } from "../constants/constants";
import Home from "../pages/Home";
import InfoAsker from "../pages/UserInfoInput";
import MainComponent from "../pages/Main";

const ViewRoutes = () => {
  return (
    <Routes>
      <Route exact path={APP} element={<MainComponent />}>
        <Route index element={<Home />} />
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={ASKINFO} element={<InfoAsker />} />
      </Route>
    </Routes>
  );
};

export default ViewRoutes;
