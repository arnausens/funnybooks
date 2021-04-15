import React, { Component } from 'react';
import AuthApi from '../api/authRepository';

class TopPage extends Component {

    logOut = () => {
        AuthApi.logOut()
            .then(r => {
                alert('Hasta pronto!');
                this.props.history.push('/');
            }).catch(e => {
                alert('Upss hubo un error');
        });
    }

    render() {
        const { className, title} = this.props;
        
        return (
            <div className={`${className} top-page`}>
                <div className='top-page__loginLinks'>

                    { localStorage.getItem("user_uaeh_token") === null ? 
                    <a href="/login" className='top-page__login'>Entrar</a> : 
                    <a href="/" onClick={this.logOut} className='top-page__login'>Salir</a>}
                    
                    
                    <a href="/" className='top-page__home'>Inicio</a>

                    <a href="/blog" className='top-page__language'>Blog</a>

                </div>
                <div className='top-page__title'>{title}</div>
            </div>
        )
    }
}

export default TopPage;