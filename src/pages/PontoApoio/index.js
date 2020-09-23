import React, { Component } from "react";
import "./style.css";
import Sidebar from '../../component/Sidebar/index';
import Navbar from '../../component/Navbar/index';
import api from '../../service/api';
import { Link, Redirect } from 'react-router-dom';

class Listar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalog: [],
            catalogo: ""
        };
        this.handleChange = this.handleChange.bind(this)
        this.sendCatalog = this.sendCatalog.bind(this)
    }
    async componentDidMount() {
        const { data: response } = await api.get('/apoio')
        let itens = response

        this.setState({
            catalog: itens
        });
        console.log(itens)
    }
    handleChange(event) {
        this.setState({ catalogo: event.target.value });
    }
    async sendCatalog() {
        let value = {
            name: this.state.catalogo
        }
        const enviar = await api.post('/apoio', value)

    }
    render() {
        return (

            <div className="Catalogo-container">
                <Sidebar />
                <div className="Catalogo-content">
                    <Navbar name="Ponto de Apoio" />
                    <div className="Catalogo-Cards">
                      
                        <div className="Catalogo-section">
                            <div id="Section1">
                                <label>Cadastrar Ponto de Apoio</label>
                                <form>
                                    <input onChange={this.handleChange} id="CampoCatalog" type="text"></input>
                                    <input onClick={this.sendCatalog} id="SendCatalog" type="submit" value="Inserir" />
                                </form>

                            </div>
                            <div id="Section2">
                                <label>Pontos de Apoio Cadastrados</label>
                                < table id="Table" className="table">
                                    <thead className="thead-info">
                                        <tr id="Scroll">
                                            <th scope="col">ID</th>
                                            <th scope="col">Nome</th>

                                            <th scope="col">Ações</th>


                                        </tr>
                                    </thead>

                                    {this.state.catalog.map((item) => (
                                        <tbody id="CorpoRes" key={item._id}>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <Link to={`/ponto-apoio/${item.id}`}>
                                                    <i id="Icon" class="fas fa-trash"></i>
                                                </Link>
                                              

                                            </tr>
                                        </tbody>
                                    ))}
                                </table>



                                <div class="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="TituloModalCentralizado">Excluir Catalogo</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                                <button type="button" class="btn btn-primary">Salvar mudanças</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Listar;