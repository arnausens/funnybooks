import React, { Component } from 'react';
import PortadaLibro from '../portadaLibro';
import { Link } from 'react-router-dom';

class ElAstronauta extends Component {
    render() {
        return(
            <Link to="/">
                <PortadaLibro image='https://image.freepik.com/vector-gratis/ilustracion-vectorial-cosmonauta_1441-11.jpg' title='Jack el Astronauta' description='Miles de kilometros le separan de la tierra ¿Logrará volver?. Próximamente...'/>
            </Link>
        )
    }
}

export default ElAstronauta;