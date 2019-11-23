import React from 'react';
import Dialog from './dialog.component.js';
import FrameworkInspector from './framework-inspector.component.js';
import {getBorder, showFrameworkObservable} from 'src/common/colored-border.js';
import './navbar.component.scss';

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      frameworkInspector: false,
    };
  }
  componentDidMount() {
    this.subscription = showFrameworkObservable.subscribe(newValue => this.setState({frameworkInspector: newValue}));
    $(".button-collapse").sideNav();
  }
  render() {
    return (
      <div>
        <div className="navbar-fixed ">
          <nav>
            <div className="nav-wrapper ">
              <a className="brand-logo activator" href="#">
                <img src="images/plansoft-logo.png" />
              </a>
              <a href="#" data-activates="mobile-demo" className="button-collapse">
                <i className="material-icons">
                  menu
                </i>
              </a>
              <ul className="right hide-on-med-and-down">
                {menuItems.call(this)}
              </ul>
            </div>
          </nav>
        </div>
        <ul className="side-nav" id="mobile-demo">
          {menuItems.call(this)}
        </ul>
      </div>
    );
  }
  componentWillUnmount() {
    this.subscription.dispose();
  }

  navigateTo = url => window.history.pushState(null, null, url)
}

function menuItems() {
  return (
    <div>
      <FrameworkInspector />
      <li>
        <a onClick={() => this.navigateTo("/")} className="blue-text">
          Home
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/react")}>
          React
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/angularjs")}>
          AngularJS
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/angular")}>
          Angular
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/vue")}>
          Vue.js
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/svelte")}>
          Svelte
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/cyclejs")}>
          CycleJS
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/preact")}>
          Preact
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/vanilla")}>
          Vanilla
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/inferno")}>
          Inferno
        </a>
      </li>
      <li>
        <a onClick={() => this.navigateTo("/ember")}>
          Ember
        </a>
      </li>
    </div>
  )
}
