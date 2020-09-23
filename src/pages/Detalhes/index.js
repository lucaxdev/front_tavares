import React, { Component } from 'react';
import api from '../../service/api';
import './style.css'
import Sidebar from '../../component/Sidebar/index'
import Navbar from '../../component/Navbar/index'
import { Link } from 'react-router-dom';
class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {},
            useritens: [],
        }
    }
    async componentDidMount() {
        const { id } = this.props.match.params;

        const { data: response } = await api.get(`/users/${id}`)
        let itens = response

        this.setState({
            users: itens
        });
        console.log(this.state.users)
    }
    render() {
        const { users } = this.state;
        return (
            <div className="Detalhes-container">
                <Sidebar />
                <div className="Detalhes-content">
                    <Navbar />
                    <div className="ListContainer">
                        <div className="Title1">
                            <span className="text-dark">Lista de Consultor(a): {users.name}</span>
                            <Link to={`/atualizar/${users.id}`}>
                                <i id="pen" class="fa fa-pencil-alt"></i>
                            </Link>

                        </div>

                        <ul id="Tableta" key={users.id} id="UL" class="list-group">
                            <li id="LI" class="list-group-item">CPF: {users.id}</li>
                            <li id="LI" class="list-group-item">Nome: {users.name}</li>
                            <li id="LI" class="list-group-item">Email: {users.email} </li>
                            <li id="LI" class="list-group-item">Telefone: {users.phone} </li>
                            <li id="LI" class="list-group-item">Data de Nascimento: {users.datebirth}</li>


                            <li id="LI" class="list-group-item">Indicação: {users.indication}</li>

                            <li id="LI" class="list-group-item">RG: {users.rg}</li>

                            <li id="LI" class="list-group-item">Catalogo: {users.catalog}</li>

                            <li id="LI" class="list-group-item">Ponto de Suporte: {users.pointsupport}</li>
                            <li id="LI" class="list-group-item">Cep: {users.cep}</li>
                            <li id="LI" class="list-group-item">Rua: {users.rua}</li>
                            <li id="LI" class="list-group-item">Numero: {users.numero}</li>
                            <li id="LI" class="list-group-item">Complemento: {users.complemento}</li>
                            <li id="LI" class="list-group-item">Cidade: {users.cidade}</li>
                            <li id="LI" class="list-group-item">Estado: {users.estado}</li>
                            <li id="LI" class="list-group-item">Bairro: {users.bairro}</li>




                        </ul>


                    </div>
                </div>
            </div>



        )
    }
}

export default Container;