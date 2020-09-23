import React, { Component } from "react";
import "./style.css";
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (

            <div className="Navbar-container">
              <h3 className="H3" id="TitleList" >{this.props.name}</h3>

            </div>


        );
    }
}

export default Navbar;