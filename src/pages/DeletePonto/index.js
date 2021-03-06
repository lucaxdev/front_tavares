import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';

import api from '../../service/api';

class DeleteUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            consultora: [],
            redirect: false

        }
    }
    async componentDidMount() {
        const { id } = this.props.match.params;

        const { data: response } = await api.get(`/apoio/${id}`)
        let itens = response
        console.log(response.data)
        this.setState({
            consultora: itens
        });
    console.log(itens)
    }
    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/ponto-apoio" exact />
        } else {
            return (
                <div className="Delete-content">
                    <div className="Delete-box">
                        <label>Deletar Ponto de Apoio</label>
                        <span> Tem Certeza que deseja remover <b>{this.state.consultora.name}</b> ?</span>
                        <br></br>
                        <button onClick={this.deleteData}>Remover</button>

                    </div>
                </div>

            );
        }
    }

    deleteData = async () => {
        const { id } = this.props.match.params;
        try {
            await api.delete(`/apoio/${id}`);

            this.setState({ redirect: true });
        } catch (e) {
            console.log(e);
        }
    };
}
export default DeleteUser;