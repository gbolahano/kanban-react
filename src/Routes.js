import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Index from './components/index/index';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Redirect exact from="/" to="/project" />
        <Route path="/project" component={Index} ></Route>
        {/* <Route path="/project/create-issue" component={Index} ></Route> */}
        <Route path="/project/settings" exact component={Index} ></Route>
      </Switch>
    </Fragment>
   );
}

export default Routes;