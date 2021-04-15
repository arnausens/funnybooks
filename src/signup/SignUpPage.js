import React, {Component} from 'react';
import {SignUpForm} from './SignUpForm';
import AuthApi from '../api/authRepository';
import TopPage from '../components/topComponent';

class SignUpPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                username: '',
                email: '',
                password1: '',
                password2: ''
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
        AuthApi.signUp(user)
        .then(r => {
            alert('Usuario creado');
            this.props.history.push('/');
        }).catch(e => {
            alert('Algo salió mal');
        });

    }

    render(){
        return (
            <div className="app">

                <TopPage className='Home-page__title' title='Ya falta poco...'/>
                <div className="signup-wrapper">
                <div className="signupform">
                    <SignUpForm
                        user={this.state.user}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                    />
                </div>
                </div>
                
            </div>
           
        );
    }

}

export default SignUpPage;