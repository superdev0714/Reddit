import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Subreddit from 'views/Subreddit';

const publicPath = '/';

export const routeCodes = {
  NEWS: `${ publicPath }news`,  
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ Subreddit } />
    <Route path={ routeCodes.NEWS } component={ Subreddit } />     
  </Switch>
);
