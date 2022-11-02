import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class PersonajesSerie extends Component {

    state = {
        personajes: [],
        status: false
    }

    loadPersonajes = () => {
        var request = "api/Series/PersonajesSerie/" + this.props.idserie;
        var url = Global.url + request;

        axios.get(url).then(repsonse => {
            this.setState({
                personajes: repsonse.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.loadPersonajes();
    }

    render() {
        return (
            <div>
                <NavLink className="btn btn-danger" to={"/serie/" + this.props.idserie}>Volver</NavLink>
                {
                    this.state.status == true && (
                        <table style={{margin: "50px auto"}} className="table table-dark table-striped" border={1}>
                            <thead>
                                <tr>
                                    <th>Personaje</th>
                                    <th>Imagen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.personajes.map((personaje, index) => {
                                        return (
                                            <tr key={personaje.idPersonaje}>
                                                <td>{personaje.nombre}</td>
                                                <td><img style={{width: "350px"}} src={personaje.imagen} /></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        )
    }
}
