import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class DetallesSeries extends Component {

    state = {
        serie: {},
        status: false
    }

    loadSerie = () => {
        var request = "api/Series/" + this.props.idserie;
        var url = Global.url + request;

        axios.get(url).then(response => {
            this.setState({
                serie: response.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.loadSerie();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idserie != this.props.idserie) {
            this.loadSerie();
        }
    }


    render() {
        return (
            <div>
                {
                    this.state.status == true && (
                        <div className="card" style={{width:"750px", margin:"50px auto"}}>
                            <img src={this.state.serie.imagen}  className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{this.state.serie.nombre}</h5>
                                <p className="card-text">IMDB: {this.state.serie.puntuacion}</p>
                                <div className="card-footer">
                                    <NavLink to={"/personajesserie/" + this.props.idserie} className="btn btn-success">Personajes</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}
