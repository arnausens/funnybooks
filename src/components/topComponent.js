import React, { Component } from 'react';
import AuthApi from '../api/authRepository';
import { Link } from 'react-router-dom';

class TopPage extends Component {

    toLogOut = () => {
        AuthApi.logOut()
         
    }

    render() {
        const { className, title} = this.props;
        
        return (
            <div className={`${className} top-page`}>
                <div className='top-page__loginLinks'>

                    { localStorage.getItem("user_uaeh_token") === null ?
                    <Link to='/login'><div className='top-page__login'>Entrar</div></Link> : 
                    <div onClick={this.toLogOut} className='top-page__login'>Salir</div>}
                    
                    
                    <Link to ='/'><div className='top-page__home'>Inicio</div></Link>

                    <Link to='/blog'><div className='top-page__language'>Blog</div></Link>

                </div>
                <div className='top-page__title'>{title}</div>
            </div>
        )
    }
}

export default TopPage;