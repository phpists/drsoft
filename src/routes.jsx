import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './pages/auth/Auth';
import Edit from './pages/edit/Edit';
import Accent from './pages/accent/Accent';
import OverHead from './pages/overhead/OverHead';
import Skan from './pages/skan/Skan';
import { connect } from 'react-redux';


const Private = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={props => {
      if (rest.token) {
        return <Component {...props} />
      }
      return <Redirect to="/auth" />

      //return <Component {...props} />
    }} />
  );
};

const mapStateToProps = (state) => ({
  token: state.authorization.token,
});

const PrivateRoute = connect(mapStateToProps)(Private)

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Auth} />
      <Route path="/auth" component={Auth} />
      <PrivateRoute path="/accent" component={Accent} />
      <PrivateRoute path="/edit" component={Edit} />
      <PrivateRoute path="/overhead" component={OverHead} />
      <PrivateRoute path="/skan" component={Skan} />
    </Switch>
  );
};


export default Routes;

