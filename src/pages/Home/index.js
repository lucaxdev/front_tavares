import React, { Component } from "react";
import "./style.css";
import Sidebar from '../../component/Sidebar/index';
import Navbar from '../../component/Navbar/index';
import api from '../../service/api';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Consultoras: 0,
            catalogos: 0,
            pontoDeApoio: 0
        };
    }
    async componentDidMount() {
        const { data: response } = await api.get('/users')
        var teste = response.length
        const { data: response1 } = await api.get('/catalog')
        var teste1 = response1.length
        const { data: responde2 } = await api.get('/apoio')
        var teste2 = responde2.length
        this.setState({
            Consultoras: teste, catalogos: teste1, pontoDeApoio: teste2
        })

    }
    render() {
        return (

            <div className="Home-container">
                <Sidebar />
                <div className="Home-content">
                    <Navbar name="Ola, Bem vindo Cesar" />
                    <div className="Home-Cards">
                        <div id="Card">
                            <div id="Card-Part1">
                                <span id="Card-title">Consultoras</span>
                                <span id="Card-descripition">{this.state.Consultoras}</span>
                            </div>
                            <div id="Card-Part2">
                                <div className="Card-icon">
                                    <i id="Icon-Users" class="fas fa-users"></i>
                                </div>
                            </div>
                        </div>
                        <div id="Card">
                            <div id="Card-Part1">
                                <span id="Card-title">Catálogos</span>
                                <span id="Card-descripition">{this.state.catalogos}</span>
                            </div>
                            <div id="Card-Part2">
                                <div className="Card-icon">
                                    <i id="Icon-Users" class="fas fa-book"></i>
                                </div>
                            </div>
                        </div>
                        <div id="Card">
                            <div id="Card-Part1">
                                <span id="Card-title">Parceiros</span>
                                <span id="Card-descripition">{this.state.pontoDeApoio}</span>
                            </div>
                            <div id="Card-Part2">
                                <div className="Card-icon">
                                    <i id="Icon-Users" class="fas fa-map-marked-alt"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Home;