import React from 'react';

export const SignUpForm = ({onChange,onSubmit, user:{username,email,password1,password2}}) => (
    <form className="signupform__form" onSubmit={onSubmit}>
        <label htmlFor="username">Username</label>
        <input className="signupform__input-signup"
            type="text"
            id="username" 
            name="username" 
            value={username}
            onChange={onChange}
        />
        <label htmlFor="email">Email</label>
        <input className="signupform__input-signup"
            type="text"
            id="email" 
            name="email" 
            value={email}
            onChange={onChange}
        />
        <label htmlFor="password1">Contraseña</label>
        <input className="signupform__input-signup"
            type="password" 
            name="password1" 
            id="password1" 
            value={password1}
            onChange={onChange}
        />
        <label htmlFor="password2">Contraseña</label>
        <input className="signupform__input-signup"
            type="password" 
            name="password2" 
            id="password2" 
            value={password2}
            onChange={onChange}
        />
        <input className="signupform__button-signup"
            type="submit"  
            value="Registrar"
        />
    </form>
);