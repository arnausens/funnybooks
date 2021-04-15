import React, {Component} from 'react';
import {LoginForm} from './LoginForm';
import AuthApi from '../api/authRepository';
import TopPage from '../components/topComponent';
import swal from 'sweetalert';

import { inject, observer } from "mobx-react";
import usersStore from '../stores/UsersStore';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                username: '',
                email: '',
                password: '',
            }
        };
    }

    onChange = (e) => {
        let user = Object.assign({},this.state.user);
        user[e.target.name] = e.target.value;
        this.setState({user});
    };

    onSubmit = (e) => {
        e.preventDefault();
        const user = Object.assign({},this.state.user);
        AuthApi.logIn(user)
            .then(r => {
                usersStore.loggedUser(user.username)
                console.log(user, r)
                swal("FUNNY BOOKS!",`Bienvenido ${user.username}`, "success");
                this.props.history.push('/');
            }).catch(e => {
                swal('OOOOPS!','Usuario o contraseña equivocados', "error");
        });

    };

    render(){
        const { UsersStore } = this.props;
        return (
            <div className="app">

                <TopPage className='Home-page__title' title='Bienvenido!'/>
                <div className="login-wrapper">
                <div className="loginform">
                    <LoginForm 
                    user={this.state.user}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                    />
                    <a href='/signUp' className='not-registered'>¿No estás registrado? Regístrate.</a>
                </div>
                </div>
                
            </div>
        );
    }

}

export default inject ("UsersStore")(LoginPage);