import React, { Component } from 'react';
import PortadaLibro from '../portadaLibro';

class ElPrincipito extends Component {
    render() {
        return(
            <PortadaLibro image='https://cdn.pixabay.com/photo/2019/10/05/10/59/the-little-prince-4527691_960_720.jpg' title='El Principito' description='la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.'/>
        )
    }
}

export default ElPrincipito;