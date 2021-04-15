import React, { Component } from 'react';

class DobleImagenParrafo extends Component {
  render() {
    const { imageL, imageR,  texto, className, buttonL, buttonR, clickL, clickR } = this.props;
    return (
        <div className={`${className} dobleImagen-parrafo`}>
            <img className='dobleImagen-parrafo__imagen' src={imageL}/>
            <div className='dobleImagen-parrafo__textoybuttons'>
                <div className='dobleImagen-parrafo__texto'>{texto}</div>
                <div className='dobleImagen-parrafo__buttons'>
                    <button className='dobleImagen-parrafo__button' onClick={clickL}>{buttonL}</button> 
                    <button className='dobleImagen-parrafo__button' onClick={clickR}>{buttonR}</button>
                </div>
            </div>
            <img className='dobleImagen-parrafo__imagen' src={imageR}/>
               
        </div>
    );
  }
}

export default DobleImagenParrafo;