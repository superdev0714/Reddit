import React, { Component } from 'react';
import Routes from 'config/routes';

import Menu from 'components/Global/Menu';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <Menu />
          </div>
          <div className="col-sm-9">
            <Routes />
          </div>
        </div>
      </div>
    );
  }
}
