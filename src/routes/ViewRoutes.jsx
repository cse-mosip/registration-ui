import { Route, Routes } from 'react-router-dom';
import {
  HOME,
  ASKINFO, VIEW,
  APP,
  LOGIN,
  FINGERPRINTLOAD,
  FACESCAN,
  REG_COMPLETE,
} from '../constants/constants';
import Home from '../pages/Home';
import View from '../pages/View';
import InfoAsker from '../pages/UserInfoInput';
import MainComponent from '../pages/Main';
import LogIn from '../pages/Login';
import FingerPrint from '../pages/FingerPrint';
import FaceScan from '../pages/FaceScan';
import RegistrationComplete from '../pages/RegistrationComplete';

const ViewRoutes = () => {
  return (
    <Routes>
      <Route exact path={LOGIN} element={<LogIn />} />
      <Route exact path={APP} element={<MainComponent />}>
        <Route index element={<Home />} />
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={VIEW} element={<View />} />
        <Route exact path={ASKINFO} element={<InfoAsker />} />
        <Route exact path={FINGERPRINTLOAD} element={<FingerPrint />} />
        <Route exact path={FACESCAN} element={<FaceScan />} />
        <Route exact path={REG_COMPLETE} element={<RegistrationComplete />} />
      </Route>
    </Routes>
  );
};

export default ViewRoutes;
