import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="navigation-bar">
        <div className="logo">LOGO</div>
        <div>
          <ul className="navigation">
            <li>Home</li>
            <li>My Portfolio</li>
            <li>Clients</li>
            <li>Get in Touch</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
