import React, { Component } from 'react';

class ImagenParrafo extends Component {
  render() {
    const { image, texto, className, click, button, styleImg } = this.props;
    return (
        <div className={`${className} imagen-parrafo`}>
            <div className='imagen-parrafo__imagen-texto'>
                <img className='imagen-parrafo__imagen' style={styleImg} src={image}/>
                <div className='imagen-parrafo__texto'>{texto}</div>
            </div>
            <div>
                <button className='imagen-parrafo__button' onClick={click}>{button}</button>
            </div>
               
        </div>
    );
  }
}

export default ImagenParrafo;