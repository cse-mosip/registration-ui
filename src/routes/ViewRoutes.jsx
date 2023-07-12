import { Route, Routes } from 'react-router-dom';
import { HOME, ASKINFO, APP, LOGIN, FINGERPRINTLOAD } from '../constants/constants';
import Home from '../pages/Home';
import InfoAsker from '../pages/UserInfoInput';
import MainComponent from '../pages/Main';
import LogIn from '../pages/Login';
import FingerPrint from '../pages/FingerPrint';

const ViewRoutes = () => {
  return (
    <Routes>
      <Route exact path={LOGIN} element={<LogIn />} />
      <Route exact path={APP} element={<MainComponent />}>
        <Route index element={<Home />} />
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={ASKINFO} element={<InfoAsker />} />
        <Route exact path={FINGERPRINTLOAD} element={<FingerPrint/>}/> 
      </Route>
    </Routes>
  );
};

export default ViewRoutes;
