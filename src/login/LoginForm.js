import React from 'react';

export const LoginForm = ({onChange,onSubmit, user:{username,password}}) => (
    <form className="loginform__form" onSubmit={onSubmit}>
        <label htmlFor="username">username</label>
        <input className="loginform__input-login"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onChange}
        />
        <label htmlFor="password1">Contraseña</label>
        <input className="loginform__input-login"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
        />
        <input className="loginform__button-login"
            type="submit"
            value="Iniciar Sesión"
        />
    </form>
);