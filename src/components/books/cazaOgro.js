import React, { Component } from 'react';
import PortadaLibro from '../portadaLibro';
import { Link } from 'react-router-dom';

class ElCazador extends Component {
    render() {
        return(
            <Link to="/elcazador">
                <PortadaLibro image='https://cdn.pixabay.com/photo/2016/10/07/23/19/vintage-1722810_960_720.jpg' title='El Cazador y el Ogro' description='la historia de un cazador que contratan para matar a un ogro que devora cabras, pollos, perros y lo que pilla por ahí.'/>
            </Link>
        )
    }
}

export default ElCazador;