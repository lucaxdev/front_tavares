import React, { Component } from "react";
import "./style.css";
import Sidebar from '../../component/Sidebar/index';
import Navbar from '../../component/Navbar/index';
import api from '../../service/api';

import { Link } from 'react-router-dom';



class Listar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            rg: "",
            cpf: "",
            dataDeNasc: "",
            IndicadoPor: "",
            Telefone: "",
            rua: "",
            bairro: "",
            numero: "",
            cep: "",
            complemento: "",
            cidade: "",
            estado: "",
            catalogo: "",
            pontoSuporte: "",
            apoio: [],
            catalogs: [],
            user:[]

        };
        this.send = this.send.bind(this)
        this.handleNomeChange = this.handleNomeChange.bind(this)
        this.handleEMailChange = this.handleEMailChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleDatebirthChange = this.handleDatebirthChange.bind(this)
        this.handleRgChange = this.handleRgChange.bind(this)
        this.handleCatalog1Change = this.handleCatalog1Change.bind(this)
        this.handleCatalog4Change = this.handleEMailChange.bind(this)
        this.handlePointsupportChange = this.handlePointsupportChange.bind(this)
        this.handleCepChange = this.handleCepChange.bind(this)
        this.handleRuaChange = this.handleRuaChange.bind(this)
        this.handleNumeroChange = this.handleNumeroChange.bind(this)
        this.handleComplementoChange = this.handleComplementoChange.bind(this)
        this.handleCidadeChange = this.handleCidadeChange.bind(this)
        this.handleEstadoChange = this.handleEstadoChange.bind(this)
        this.handleBairroChange = this.handleBairroChange.bind(this)
        this.handleCpfChange = this.handleCpfChange.bind(this)
        this.handleIndicadoPorChange = this.handleIndicadoPorChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async componentDidMount() {
        const { id } = this.props.match.params;

        const { data: response1 } = await api.get(`/users/${id}`)
        this.setState({
            nome: response1.name,
            email: response1.email,
            rg: response1.rg,
            cpf: response1.id,
            dataDeNasc: response1.datebirth,
            IndicadoPor: response1.indication,
            Telefone: response1.phone,
            rua: response1.rua,
            bairro: response1.bairro,
            numero: response1.numero,
            cep: response1.cep,
            complemento: response1.complemento,
            cidade: response1.cidade,
            estado: response1.estado,
            catalogo: response1.catalog,
            pontoSuporte: response1.pointsupport,
           
        })

        console.log(this.state.users)

        const { data: response } = await api.get('/users')
        let itens = response

        this.setState({
            useritens: itens
        });
        console.log(itens)
        const { data: res } = await api.get('/catalog')

        let catalogs = res

        this.setState({
            catalogs: catalogs
        });

        const { data: resp } = await api.get('/apoio')

        let pontoApoio = resp

        this.setState({
            apoio: pontoApoio
        })

        console.log(this.state.apoio)
        console.log(this.state.catalogos)


        console.log(this.state.catalogs)
    }
    async send() {
        const { id } = this.props.match.params;
        let value = {
            id: this.state.cpf,
            name: this.state.nome,
            email: this.state.email,
            phone: this.state.Telefone,
            datebirth: this.state.dataDeNasc,
            indication: this.state.IndicadoPor,
            rg: this.state.rg,
            catalog: this.state.catalogo,
            catalog2: this.state.catalogo2,
            catalog3: this.state.catalogo3,
            catalog4: this.state.catalogo4,
            catalog5: this.state.catalogo5,
            catalog6: this.state.catalogo6,
            catalog7: this.state.catalog07,
            catalog8: this.state.catalogo8,
            pointsupport: this.state.pontoSuporte,
            cep: this.state.cep,
            rua: this.state.rua,
            numero: this.state.numero,
            complemento: this.state.complemento,
            cidade: this.state.cidade,
            estado: this.state.estado,
            bairro: this.state.bairro,
        }
        const enviar = await api.put(`/users/${id}`, value)
    }
    handleNomeChange(event) {
        this.setState({ nome: event.target.value });
    }
    handleCatalogValueChange(event) {
        this.setState({ catalogoss: event.target.value });
    }
    handleEMailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePhoneChange(event) {
        this.setState({ Telefone: event.target.value });
    }
    handleDatebirthChange(event) {
        this.setState({ dataDeNasc: event.target.value });
    }
    handleRgChange(event) {
        this.setState({ rg: event.target.value });
    }
    handleCatalog1Change(event) {
        this.setState({ catalogo: event.target.value });
    }
    handlePointsupportChange(event) {
        this.setState({ pontoSuporte: event.target.value });
    }
    handleCepChange(event) {
        this.setState({ cep: event.target.value });
    }
    handleRuaChange(event) {
        this.setState({ rua: event.target.value });
    }
    handleNumeroChange(event) {
        this.setState({ numero: event.target.value });
    }
    handleComplementoChange(event) {
        this.setState({ complemento: event.target.value });
    }

    handleCidadeChange(event) {
        this.setState({ cidade: event.target.value });
    }
    handleEstadoChange(event) {
        this.setState({ estado: event.target.value });
    }
    handleBairroChange(event) {
        this.setState({ bairro: event.target.value });
    }
    handleCpfChange(event) {
        this.setState({ cpf: event.target.value });
    }
    handleIndicadoPorChange(event) {
        this.setState({ IndicadoPor: event.target.value });
    }
    handleChange(event) {
        this.setState({ teste: event.target.value })
    }

    handleSubmit(event) {
        console.log(this.selected)

    }


    render() {
        return (

            <div className="Cadastro-container">
                <Sidebar />
                <div className="Cadastro-content">
                    <Navbar />
                    <div className="Cadastro-Cards">
                        <h3 id="TitleList">Cadastro de Consultoras</h3>
                        <form className="needs-validation" >
                            <div className="form-row">
                                <div className="col-md-3 mb-3 text-dark">
                                     <label>Nome</label>
                                    <input onChange={this.handleNomeChange} value={this.state.nome} type="text" className="form-control" id="validationCustom01" placeholder="Digite seu nome"
                                        required />

                                </div>
                                <div className="col-md-3 mb-3 text-dark">
                                    <label>E-mail</label>
                                    <input onChange={this.handleEMailChange} value={this.state.email} type="email" className="form-control" placeholder="Digite seu email"
                                        required />

                                </div>

                                <div className="col-md-2 mb-3 text-dark">
                                    <label>RG </label>
                                    <input onChange={this.handleRgChange} value={this.state.rg} type="text" className="form-control" placeholder="Digite seu RG"
                                        required />
                                </div>
                                <div className="col-md-2 mb-2 text-dark">
                                    <label>CPF </label>
                                    <input onChange={this.handleCpfChange} value={this.state.cpf} type="text" className="form-control" placeholder="Digite seu CPF"
                                        required />
                                </div>


                            </div>
                            <div className="form-row">

                                <div className="col-md-2 mb-2 text-dark">
                                    <label>Data de Nascimento </label>
                                    <input onChange={this.handleDatebirthChange}value={this.state.dataDeNasc} type="date" className="form-control"
                                        required />
                                </div>
                                <div className="col-md-2 mb-2 text-dark">
                                    <label>Indicado por: </label>
                                    <input onChange={this.handleIndicadoPorChange} value={this.state.IndicadoPor} type="text" className="form-control" placeholder="Somente o CPF"
                                        required />
                                </div>
                                <div className="col-md-2 mb-2 text-dark">
                                    <label>Telefone </label>
                                    <input onChange={this.handlePhoneChange} value={this.state.Telefone} type="text" className="form-control" placeholder="Digite o telefone"
                                        required />
                                </div>
                                <div className="col-md-4 mb-3 text-dark">
                                    <label>Rua </label>
                                    <input onChange={this.handleRuaChange} value={this.state.rua} type="text" className="form-control" placeholder="Digite a rua" required />

                                </div>
                            </div>
                            <div className="form-row">

                                <div className="col-md-2 mb-3 text-dark">
                                    <label>Bairro </label>
                                    <input onChange={this.handleBairroChange} value={this.state.bairro} type="text" className="form-control" placeholder="Digite o bairro" required />

                                </div>
                                <div className="col-md-2 mb-3 text-dark">
                                    <label>Numero </label>
                                    <input onChange={this.handleNumeroChange} value={this.state.numero} type="text" className="form-control" placeholder="Digite o numero" required />

                                </div>
                                <div className="col-md-2 mb-3 text-dark" >
                                    <label>Cep </label>
                                    <input onChange={this.handleCepChange} value={this.state.cep} type="text" className="form-control" placeholder="Digite o cep" required />

                                </div>
                                <div className="col-md-4 mb-3 text-dark" >
                                    <label>Complemento </label>
                                    <input onChange={this.handleComplementoChange} value={this.state.complemento} type="text" className="form-control" placeholder="Complemento" required />

                                </div>

                                <div className="form-row">

                                    <div className="col-md-2 mb-3 text-dark" >
                                        <label>Ponto de Apoio </label>
                                        <select className="form-control" onChange={this.handlePointsupportChange} value={this.state.pontoSuporte}  >
                                            <option value="" >Escolha</option>
                                            <option value="Sem Ponto de Apoio "> Não Tem</option>
                                            {this.state.apoio.map((item) => (
                                                <option value={item.name}>{item.name}</option>
                                            ))}
                                        </select>

                                    </div>
                                    <div className="col-md-2 mb-3 text-dark" >
                                        <label>Cidade </label>
                                        <input onChange={this.handleCidadeChange} value={this.state.cidade} type="text" className="form-control" placeholder="Cidade" required />

                                    </div>
                                    <div className="col-md-2 mb-3 text-dark" >
                                        <label>Estado</label>
                                        <input onChange={this.handleEstadoChange} value={this.state.estado} type="text" className="form-control" placeholder="Estado" required />

                                    </div>
                                    <div className="col-md-2 mb-3 text-dark" >
                                        <label>Catálogos</label>
                                        <textarea onChange={this.handleCatalog1Change} value={this.state.catalogo} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>


                                    </div>
                                    <div className="col-md-4 mb-3 text-dark">
                                        <button type="button" class="botao" data-toggle="modal" data-target="#ExemploModalCentralizado">
                                            Lista de Catalogos
                                    </button>
                                    </div>

                                </div>


                            </div>




                            <button onClick={this.send} value="Enviar" className="btn btn-success btn-sm" >Enviar</button>

                        </form>

                    </div>
                </div>
                <div class="modal fade" id="ExemploModalCentralizado" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="TituloModalCentralizado">Lista de Catalogos</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <ul class="list-group list-group-flush">
                                    {this.state.catalogs.map((item) => (
                                         <li class="list-group-item">{item.name}</li>
                                    ))}

                                </ul>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div >


        );
    }
}

export default Listar;