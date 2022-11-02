import axios from 'axios';
import React, { Component } from 'react';
import Global from '../Global';
import logo from '../assets/images/Stranger-Things-Logo-2016.png';
import { NavLink } from 'react-router-dom';

export default class Menu extends Component {
    state = {
        series: [],
        status: false
    }

    loadSeries = () => {
        var request = "api/Series";
        var url = Global.url + request;

        axios.get(url).then(response => {
            this.setState({
                series: response.data,
                status: true
            })
        })

    }

    componentDidMount = () => {
        this.loadSeries();
    }

    render() {

        return (
            <nav className="navbar navbar-expand" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <img style={{ width: "70px"}} src={logo} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active"
                                    to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/crearpersonaje">Nuevo personaje</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/modificarpersonaje">Modificar personaje</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Series
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.series.map((serie, index) => {
                                            return (
                                                <li key={index}>
                                                    <NavLink className="dropdown-item" to={"/serie/" + serie.idSerie}>{serie.nombre}</NavLink>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
