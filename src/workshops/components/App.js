import React, { Component } from 'react'
import Dashboard from './Dashboard'
import { workshops } from './../stubs/workshops';

class App extends Component {
  render() {
    return (
			<div className="container-fluid">
				{this.props.children || <Dashboard workshops={workshops} />}
			</div>
    )
  }
}

module.exports = App
