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
                {this.menuItems()}
              </ul>
            </div>
          </nav>
        </div>
        <ul className="side-nav" id="mobile-demo">
          {this.menuItems()}
        </ul>
      </div>
    );
	}
	
	menuItems() {
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
					<a href="/frameworks">
						Frameworks
					</a>
				</li>
	
			</div>
		)
	}
}
 
