import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';

export default class ModificarPersonaje extends Component {

    cajaPersonajeRef = React.createRef();
    cajaSerieRef = React.createRef();

    state = {
        series: [],
        serie: {},
        statusS: false,
        personajes: [],
        personaje: {},
        statusP: false,
        status: true,
    }

    loadSeries = () => {
        var request = "api/Series";
        var url = Global.url + request;

        axios.get(url).then(response => {
            this.setState({
                series: response.data,
                statusS: true
            });
        })
    }

    loadPersonajes = () => {
        var request = "api/Personajes";
        var url = Global.url + request;

        axios.get(url).then(response => {
            this.setState({
                personajes: response.data,
                statusP: true
            });
        })
    }

    loadSerie = () => {
        var request = "api/Series/" + this.cajaSerieRef.current.value;
        var url = Global.url + request;

        axios.get(url).then(response => {
            this.setState({
                serie: response.data,
                status: true
            });
        })
    }

    loadPersonaje = () => {
        var request = "api/Personajes/" + this.cajaPersonajeRef.current.value;
        var url = Global.url + request;

        axios.get(url).then(response => {
            this.setState({
                personaje: response.data,
                status: false
            });
        })
    }

    componentDidMount = () => {
        this.loadSeries();
        this.loadPersonajes();
    }

    modificarPersonaje = (e) => {
        e.preventDefault();
        var request = 'api/Personajes/' + this.cajaPersonajeRef.current.value + "/" + this.cajaSerieRef.current.value;
        var url = Global.url + request;

        console.log(request);


        axios.put(url).then(response => {
            this.setState({
                status: true
            })
        });

        this.loadPersonaje();
        this.loadSerie();
        console.log(this.state.status);
    }


    render() {
        return (
            <div>
                <h1 style={{ color: "blue" }}>Personajes y Series</h1>
                <form style={{ width: "500px", margin: "0 auto" }}>
                    <label>Seleccione una Serie: </label>
                    <select style={{ textAlign: "center" }} className="form-select" ref={this.cajaSerieRef} required>
                        {
                            this.state.series.map((serie, index) => {
                                return (
                                    <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                )
                            })
                        }
                    </select>
                    <label>Seleccione un Personaje: </label>
                    <select style={{ textAlign: "center" }} className="form-select" ref={this.cajaPersonajeRef} required>
                        {
                            this.state.personajes.map((personaje, index) => {
                                return (
                                    <option key={index} value={personaje.idPersonaje}>{personaje.nombre}</option>
                                )
                            })
                        }
                    </select>
                    <button style={{ margin: "15px" }} className='btn btn-success' onClick={this.modificarPersonaje}>Guardar Cambios</button>
                </form>

                {
                    this.state.status == true && (
                        <div>
                            <h2 style={{ color: "red"}}>{this.state.serie.nombre}</h2>
                            <img style={{width: "550px"}} src={this.state.serie.imagen}/>
                            <h2 style={{ color: "blue"}}>{this.state.personaje.nombre}</h2>
                            <img style={{width: "550px"}} src={this.state.personaje.imagen}/>
                        </div>

                    )
                }

            </div>
        )
    }
}
