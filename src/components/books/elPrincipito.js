import React, { Component } from 'react';
import PortadaLibro from '../portadaLibro';

class ElPrincipito extends Component {
    render() {
        return(
            <PortadaLibro image='http://via.placeholder.com/220x320' title='El Principito' description='la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.'/>
        )
    }
}

export default ElPrincipito;