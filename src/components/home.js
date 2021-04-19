import React, { Component } from 'react';
import AuthApi from '../api/authRepository';

import ElCazador from './books/cazaOgro';
import ElPrincipito from './books/elPrincipito';
import TheMummy from './books/theMummy';

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
                    <div><TheMummy /></div>
                    <div onClick={this.isLoggedIn}><ElCazador /></div>
                    <div><ElPrincipito/></div>
                </div>
            </div>
        );
    }
}

export default Home;