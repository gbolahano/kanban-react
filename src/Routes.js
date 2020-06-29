import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './components/index/index';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Index} ></Route>
        <Route path="/?create-issue=true" exact component={Index} ></Route>
        <Route path="/project/settings" exact component={Index} ></Route>
      </Switch>
    </Fragment>
   );
}

export default Routes;