import React, { Component } from 'react';
import Global from '../Global';
import axios from 'axios';

export default class CreatePersonaje extends Component {

    cajaNombreRef = React.createRef();
    cajaImgRef = React.createRef();
    cajaSerieRef = React.createRef();

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
            });
        })
    }

    componentDidMount = () => {
        this.loadSeries();
    }

    insertarPersonaje = (e) => {
        e.preventDefault();
        var request = 'api/Personajes/';
        var url = Global.url + request;

        var personaje = {
            idPersonaje: 0,
            nombre: this.cajaNombreRef.current.value,
            imagen: this.cajaImgRef.current.value,
            idSerie: parseInt(this.cajaSerieRef.current.value)
        };


        axios.post(url, personaje).then(response => {
            this.setState({
                status: true,
                mensaje: "Personaje insertado!!"
            })
        });
    }


    render() {
        return (
            <div>
                <h1 style={{ color: "blue" }}>Nuevo Personaje</h1>
                <form style={{ width: "500px", margin: "0 auto" }}>
                    <label>Nombre: </label>
                    <input style={{ textAlign: "center" }} type="text" className='form-control' ref={this.cajaNombreRef} required /> <br />
                    <label>Imagen: </label>
                    <input style={{ textAlign: "center" }} type="text" className='form-control' ref={this.cajaImgRef} required /> <br />
                    <label>Serie: </label>
                    <select style={{ textAlign: "center" }} className="form-select" ref={this.cajaSerieRef} required>
                        {
                            this.state.series.map((serie, index) => {
                                return (
                                    <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                )
                            })
                        }
                    </select>
                    <button style={{ margin: "15px" }} className='btn btn-success' onClick={this.insertarPersonaje}>Insertar Personaje</button>
                </form>

                <h2 style={{color:"blue"}}>{this.state.mensaje}</h2>
            </div>
        )
    }
}
