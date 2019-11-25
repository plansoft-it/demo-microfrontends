import React from 'react';
import './navbar.component.scss';

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      frameworkInspector: false,
    };
  }
  componentDidMount() {
    $(".button-collapse").sideNav();
  }
  render() {
    return (
      <div>
        <div className="navbar-fixed ">
          <nav>
            <div className="nav-wrapper ">
              <a className="brand-logo activator" onClick={() => this.navigateTo("/")}>
                <img src={`${window.location.origin}/images/plansoft-logo.png`} />
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
}

function menuItems() {
  return (
    <div>
      <li>
        <a href="/" className="blue-text">
          Home
        </a>
      </li>
      <li>
        <a href="/workshops">
          Workshops
        </a>
      </li>
      <li>
        <a href="/speakers">
          Relatori
        </a>
      </li>
      <li>
        <a href="/angular">
          Angular
        </a>
      </li>
      <li>
        <a href="/vue">
          Vue.js
        </a>
      </li>
      <li>
        <a href="/svelte">
          Svelte
        </a>
      </li>
      <li>
        <a href="/cyclejs">
          CycleJS
        </a>
      </li>
      <li>
        <a href="/preact">
          Preact
        </a>
      </li>
      <li>
        <a href="/vanilla">
          Vanilla
        </a>
      </li>
      <li>
        <a href="/inferno">
          Inferno
        </a>
      </li>
      <li>
        <a href="/ember">
          Ember
        </a>
      </li>
    </div>
  )
}
