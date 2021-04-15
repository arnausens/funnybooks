import axios from 'axios';
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
   
    componentDidMount() {
        // const usuario = JSON.parse(localStorage.getItem('users'))
        // this.setState({
        //     user: usuario[0]
        // })

        // let tokentoserver = localStorage.getItem('user_uaeh_token');
         
        // axios.get('http://127.0.0.1:8000/rest-auth/user/',
        //     {
        //         headers: {
        //         'Authorization' : 'Token' + tokentoserver,
        //         'Content-Type': 'application/json',
        //         'Accept' : 'application/json',
                
        //     }
        // })
        //     .then(r => {
        //         console.log(r)
        //         swal("FUNNY BOOKS!",'Bienvenido', "success");
        //     }).catch(e => {
        //         console.log(e)

        //         console.log(tokentoserver)
        //         swal('OOOOPS!','Server problem', "error");
        // });
        AuthApi.checkIn()
        
        
    };

    render() {
        return (
            <div className='app'>
                <TopPage className='Home-page__title' title='Funny Books'/>
                <div className='books-grid'>
                    <TheMummy/>
                    <ElCazador />
                    <ElPrincipito/>
                </div>
            </div>
        );
    }
}

export default Home;