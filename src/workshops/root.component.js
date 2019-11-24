import React from 'react';

import { Router, browserHistory } from 'react-router';

const rootRoute = {
  childRoutes: [ {
    path: 'workshops',
    component: require('./components/App'),
    childRoutes: [
      require('./routes/workshop'),
    ]
  } ]
};

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      frameworkInspector: false,
    };
  }
 
  render() {
    return (
        <Router
          history={browserHistory}
          routes={rootRoute}
        />
    );
  }
}
