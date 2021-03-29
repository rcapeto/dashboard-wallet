import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';

export default function AuthRoutes() {
   return(
      <Switch>
         <Route component={Login} path="/login"/>
      </Switch>
   );
}