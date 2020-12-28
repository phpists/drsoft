import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Auth from './pages/auth/Auth';
import Edit from './pages/edit/Edit';
import Accent from './pages/accent/Accent';
import OverHead from './pages/overhead/OverHead';
import Password from './pages/password/Password';
import Skan from './pages/skan/Skan';



const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Accent} />
      <Route path="/accent" component={Accent} />
      <Route path="/auth" component={Auth} />
      <Route path="/edit" component={Edit} />
      <Route path="/overhead" component={OverHead} />
      <Route path="/password" component={Password} />
      <Route path="/skan" component={Skan} />
    </Switch>
  )
}

export default Routes;

