import React, { Component } from 'react';
import ColorGrid from '../juegos/colorGrid';

class ParrafoJuego extends Component {
  render() {
    const { texto, className, buttonName, click } = this.props;
    return (
        <div className={`${className} parrafo-juego`}>
            <div className="parrafo-juego__parrafo">{texto}</div>
            <ColorGrid click={click} className={'juegoColorGrid'} buttonName={buttonName}/>  
        </div>
    );
  }
}

export default ParrafoJuego;