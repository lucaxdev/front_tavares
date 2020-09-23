import React, { Component } from "react";
import "./style.css";
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (

            <div className="Sidebar-container">
                <div className="Sidebar-Brand">
                    <h1>T</h1>
                </div>
                <div className="Sidebar-content">
                    <ul>
                        <li>
                            <Link to="/home">
                                <i className="fas fa-chart-pie"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/listar">
                                <i className="fas fa-list"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cadastro">
                                <i id="Icon" className="fas fa-user-plus"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/catalogo">
                                <i className="fas fa-book-medical"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ponto-apoio">
                                <i className="fas fa-map-marked-alt"></i>
                            </Link>
                        </li>

                    </ul>

                </div>
                <div className="Sidebar-config">
                    <Link to="">
                        <i className="fas fa-cog"></i>
                    </Link>
                    
                </div>
            </div>


        );
    }
}

export default Sidebar;