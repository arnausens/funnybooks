import React, { Component } from 'react';
import PortadaLibro from '../portadaLibro';
import { Link } from 'react-router-dom';

class SolNaciente extends Component {
    render() {
        return(
            <Link to="/">
                <PortadaLibro image='https://image.freepik.com/vector-gratis/geisha_9197-175.jpg' title='El Sol Naciente' description='La historia de una chica que vive con pajaros en Japón. Próximamente...'/>
            </Link>
        )
    }
}

export default SolNaciente;