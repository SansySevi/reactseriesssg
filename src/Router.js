import React, { Component } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CreatePersonaje from './components/CreatePersonaje';
import DetallesSeries from './components/DetallesSeries';
import Home from './components/Home';
import Menu from './components/Menu';
import ModificarPersonaje from './components/ModificarPersonaje';
import PersonajesSerie from './components/PersonajesSerie';


export default class Router extends Component {

    render() {

        function DetallesSerieElement() {
            var { idserie } = useParams();
            return (
                <DetallesSeries idserie={idserie} />
            );
        }

        function PersonajesSerieElement() {
            var { idserie } = useParams();
            return (
                <PersonajesSerie idserie={idserie} />
            );
        }

        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/serie/:idserie' element={<DetallesSerieElement />} />
                    <Route path='/crearpersonaje' element={<CreatePersonaje />} />
                    <Route path='/modificarpersonaje' element={<ModificarPersonaje />} />
                    <Route path='/personajesserie/:idserie' element={<PersonajesSerieElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
