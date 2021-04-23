import React, { Component } from 'react';
import AuthApi from '../api/authRepository';

import ElCazador from './books/cazaOgro';
import ElPrincipito from './books/elPrincipito';
import TheMummy from './books/theMummy';
import SolNaciente from './books/solNaciente';
import Cowboys from './books/cowboys';
import ElAstronauta from './books/elAstronauta';

import TopPage from './topComponent';





class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            loggedIn: false
        }
    
    }
   
    isLoggedIn = () => {
        AuthApi.checkIn()  
    };

    render() {
        return (
            <div className='app'>
                <TopPage className='Home-page__title' title='Funny Books'/>
                <div className='books-grid'>
                    <div onClick={this.isLoggedIn}><ElCazador /></div>
                    <div><TheMummy /></div>
                    <div><ElPrincipito/></div>
                    <div><SolNaciente/></div>
                    <div><Cowboys/></div>
                    <div><ElAstronauta/></div>
                </div>
            </div>
        );
    }
}

export default Home;