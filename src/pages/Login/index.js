import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import "./style.css";

import Logo from "../../assets/logo.png"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isOpen: false,
            error: "",
            user: "",
            senha: "",
            UserAcesso: "Admin",
            SenhaAcesso: "Admin123"
        };
        this.handleNomeChange = this.handleNomeChange.bind(this)
        this.handleSenhaChange = this.handleSenhaChange.bind(this)
    }
    acessar() {
        let UserRec = this.state.user
        let SenhaRec = this.state.senha

        let senha = this.state.UserAcesso
        let User = this.state.SenhaAcesso

        if ((UserRec == senha) && (SenhaRec == User)) {
            this.props.history.replace("/home");
        } else {
            
            document.getElementById("Error").style.display="block"
        }

    }
    handleNomeChange(event) {
        this.setState({ user: event.target.value });
    }
    handleSenhaChange(event) {
        this.setState({ senha: event.target.value });
    }
    render() {
        return (
            <div className="Container-login">
                <div id="Box" class="d-flex justify-content-center h-100">
                    <div class="user_card">
                        <div class="d-flex justify-content-center">
                            <div class="brand_logo_container">
                                <img id="Logo" src={Logo} class="brand_logo" alt="Logo" />
                            </div>
                        </div>
                        <div class="d-flex justify-content-center form_container">
                            
                            <form>
                            <div id="Error" class="p-2 mb-2 bg-danger text-white">Usuário ou senha invalidos</div>
                                <div class="input-group mb-3">
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" name="" onChange={this.handleNomeChange} class="form-control input_user" placeholder="usuario" />
                                </div>
                                <div class="input-group mb-2">
                                    <div class="input-group-append">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" name="" onChange={this.handleSenhaChange} class="form-control input_pass" placeholder="senha" />
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customControlInline" />
                                        <label class="custom-control-label" for="customControlInline">Lembre me</label>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center mt-3 login_container">
                                    <button onClick={() => this.acessar()} id="Buton" type="button" name="button" class="btn login_btn">Entrar</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
                
            </div>



        );
    }
}

export default Login;