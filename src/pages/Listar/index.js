import React, { Component } from "react";
import "./style.css";
import Sidebar from '../../component/Sidebar/index';
import Navbar from '../../component/Navbar/index';
import api from '../../service/api';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { Link } from 'react-router-dom';

class Listar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            useritens: [],
            userFixed: [],
            searchTerm: "",
        };
    }
    async componentDidMount() {
        const { data: response } = await api.get('/users')
        let itens = response

        this.setState({
            useritens: itens,
            userFixed: itens
        });
        console.log(itens)

        if(this.state.useritens !==""){
            document.getElementById("Loader").style.display = "none";
            
        }
    }
    updateSearch = (e) => {
        // campo de pesquisa
        this.setState({ searchTerm: e.target.value }, () => this.filterData());
    };

    filterData = () => {
        const { searchTerm, userFixed } = this.state;
        var re = new RegExp(searchTerm, "gi");
        const newUsers = userFixed.filter(
            (item) =>
                item.name.match(re) || item.id.match(re) || item.pointsupport.match(re)
        );
        this.setState({ useritens: newUsers });
    };

    updateSearch1 = (e) => {
        // campo de pesquisa
        this.setState({ searchTerm: e.target.value }, () => this.filterData1());
    };

    filterData1 = () => {
        const { searchTerm, userFixed } = this.state;
        var re1 = new RegExp(searchTerm, "gi");
        const newUsers = userFixed.filter(
            (item) =>
                item.cidade.match(re1) 
        );
        this.setState({ useritens: newUsers });
    };


    updateSearch2 = (e) => {
        // campo de pesquisa
        this.setState({ searchTerm: e.target.value }, () => this.filterData2());
    };

    filterData2 = () => {
        const { searchTerm, userFixed } = this.state;
        var re2 = new RegExp(searchTerm, "gi");
        const newUsers = userFixed.filter(
            (item) =>
                item.bairro.match(re2) 
        );
        this.setState({ useritens: newUsers });
    };
    render() {
        return (

            <div className="Listar-container">
                <Sidebar />
                <div className="Listar-content">
                    <Navbar name="Lista de Consultoras" />
                    <div className="Listar-Cards">
                        
                        <div className="TitleEButton">
                            <input id="Input" onChange={this.updateSearch} type="text" placeholder="Buscar.."></input>
                            <input id="Input" onChange={this.updateSearch1} type="text" placeholder="Cidade.."></input>
                            <input id="Input" onChange={this.updateSearch2} type="text" placeholder="Bairro.."></input>

                            <ReactHTMLTableToExcel
                                id="test-table-xls-button"
                                className="download-table-xls-button"
                                table="Table"
                                filename="tablexls"
                                sheet="tablexls"
                                buttonText="Exportar CSV" />

                            {/* {this.state.searchTerm} */}
                        </div>
                        <div id="Loader" class="loader"></div>
                        <table id="Table" className="table">
                            <thead className="thead-info">
                                <tr id="Scroll">
                                    <th scope="col">CPF</th>
                                    <th scope="col">Nome</th>

                                    <th scope="col">Telefone</th>


                                    <th scope="col">Catálogo</th>
                                    <th scope="col">Parceiros</th>
                                    <th scope="col">Bairro</th>
                                    <th scope="col">Cidade</th>



                                    <th scope="col">Ações</th>


                                </tr>
                            </thead>

                            {this.state.useritens.map((item) => (
                                <tbody id="CorpoRes" key={item._id}>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>

                                        <td>{item.catalog}</td>

                                        <td>{item.pointsupport}</td>
                                        <td>{item.bairro}</td>

                                        <td>{item.cidade}</td>



                                        <Link to={`detalhes/${item.id}`}>
                                            <i id="Icon" class="fas fa-eye"></i>
                                        </Link>

                                        <Link to={`/atualizar/${item.id}`}>
                                            <i id="Icon" class="far fa-file-alt"></i>
                                        </Link>
                                        <Link to={`/deletar/${item.id}`}>
                                            <i id="Icon" class="fas fa-trash"></i>
                                        </Link>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>


        );
    }
}

export default Listar;