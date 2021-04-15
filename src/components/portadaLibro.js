import React, { Component } from 'react';

class PortadaLibro extends Component {
    render() {
        const { image, title, description } = this.props;
        return(
            <div className='libro'>
                <div className='libro-delante'>
                    <img className='libro-delante__image' src={image}/>
                    <div className='libro-delante__title'>{title}</div>
                </div>
                <div className='libro-detras'>
                    <p className='libro-detras__descripción'>{description}</p>
                </div>
            </div>
        )
    }
}

export default PortadaLibro;