import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import Layout from '../components/Layout';

export default function AppRoutes() {
   return(
      <Layout>
         <Switch>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/list/:type" component={List}/>
         </Switch>
      </Layout>
   );
}