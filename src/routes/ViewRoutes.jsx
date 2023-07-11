import { Route, Routes } from 'react-router-dom';
import { HOME, ASKINFO, APP, LOGIN } from '../constants/constants';
import Home from '../pages/Home';
import InfoAsker from '../pages/UserInfoInput';
import MainComponent from '../pages/Main';
import LogIn from '../pages/Login';

const ViewRoutes = () => {
  return (
    <Routes>
      <Route exact path={APP} element={<MainComponent />}>
        <Route index element={<Home />} />
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={LOGIN} element={<LogIn />} />
        <Route exact path={ASKINFO} element={<InfoAsker />} />
      </Route>
    </Routes>
  );
};

export default ViewRoutes;
