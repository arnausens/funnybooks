import React, { Component } from 'react';
import PortadaLibro from '../portadaLibro';

class TheMummy extends Component {
    render() {
        return(
            <PortadaLibro image='http://via.placeholder.com/220x320' title='The Mummy' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut augue a ipsum dapibus faucibus. Vestibulum imperdiet lorem in neque fermentum fermentum. Aenean faucibus libero eget dignissim pellentesque. Maecenas sed.'/>
        )
    }
}

export default TheMummy;