import React, { Component } from "react";

import "./sideDrawer.css";

export class sideDrawer extends Component {
  render() {
      return (
          <nav className="sideDrawer">
              <ul>
                  <li><a href="/">Profile</a></li>
                  <li><a href="/">Empty</a></li>
              </ul>
        </nav>
    );
  }
}
export default sideDrawer;