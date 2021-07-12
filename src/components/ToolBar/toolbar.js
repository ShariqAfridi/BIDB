import React, { Component } from "react";

import HumburgerMenu from "../HamburgerMenu/hamburgerMenu";

import "./toolbar.css";

// export class toolbar extends Component {
  const toolbar =props=>(
  // render() {
    // return (
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div className="toolbar_logo header-title">
            <a href="/">My Evaluation List</a>
          </div>
          <div className="spacer" /> 
          <div className="toolbar_navigation-item">
            <div>
              <p className="user-profile-name">User name</p>
              <p className="user-profile-sub-name">User name</p>
            </div>
            <div className="user-profile-wrapper">
              <img className="user-profile" src="https://lh3.googleusercontent.com/a-/AOh14Gij7LiRUzWTVAOQZfFDOvgeSHB-U85_R31hZaz6=s96-c" alt="logo" />
            </div>
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
