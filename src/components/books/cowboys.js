import React, { Component } from 'react';
import PortadaLibro from '../portadaLibro';
import { Link } from 'react-router-dom';

class Cowboys extends Component {
    render() {
        return(
            <Link to="/">
                <PortadaLibro image='https://image.freepik.com/vector-gratis/silueta-fondo-tres-vaqueros-caballo_218660-289.jpg' title='Los Cowboys!' description='La increíble historia de unos cowboys, su viaje y el misterio de las arenas.'/>
            </Link>
        )
    }
}

export default Cowboys;