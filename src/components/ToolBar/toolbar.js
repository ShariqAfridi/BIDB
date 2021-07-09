import React, { Component } from "react";

import HumburgerMenu from "../HamburgerMenu/hamburgerMenu";

import "./toolbar.css";

// export class toolbar extends Component {
  const toolbar =props=>(
  // render() {
    // return (
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div className="toolbar_logo">
            <a href="/">Insert Page Name Here</a>
          </div>
          <div className="spacer" /> 
          <div className="toolbar_navigation-item">
            <ul>
              <li>
                <a href="/">Profile</a>
              </li>
              <li>
                <a href="/">Empty</a>
              </li>
            </ul>
          </div>
          <div>
          {/* <HumburgerMenu click={ props.drawerClickHandler}/> */}
          </div>
        </nav>
      </header>
// );
    )
//   }
// }
export default toolbar;
