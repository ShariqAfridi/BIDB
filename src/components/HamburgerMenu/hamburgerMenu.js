import React, { Component } from "react";

import "./hamburgerMenu.css";

export class hamburgerMenu extends Component {
    render() {
        return (
            <button
                className="toggle-button"
                onClick={this.props.click}
            >
                <div className="toggle-btn-line"></div>
                <div className="toggle-btn-line"></div>
                <div className="toggle-btn-line"></div>
            </button>
        )
    }
}
export default hamburgerMenu;