import React, { Component } from 'react';
import PortadaLibro from '../portadaLibro';

class TheMummy extends Component {
    render() {
        return(
            <PortadaLibro image='https://cdn.pixabay.com/photo/2019/06/22/07/53/egyptian-4291024_960_720.jpg' title='The Mummy' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum fermentum. Aenean faucibus libero eget dignissim pellentesque. Maecenas sed.'/>
        )
    }
}

export default TheMummy;