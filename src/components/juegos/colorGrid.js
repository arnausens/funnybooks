
import React, { Component, useEffect } from 'react';


class ColorGrid extends Component {

    constructor() {
        super()
        this.state = {
            fase0:"", 
            fase1:"",  
            fase2:"",  
            fase3:"",  
            fase4: true,  
            fase5:""  
        }
    }

    changeColor = () => {
        var lista = ["color-grid__blue", "color-grid__red", "color-grid__yellow", "color-grid__white", "color-grid__green", "color-grid__purple"];
        var aleatorio = Math.floor(Math.random()*(0 + lista.length));
        var seleccion = lista[aleatorio];
       
        var recuadro = document.getElementById('grid__blue').classList;
        recuadro.remove("color-grid__blue",'color-grid__red', 'color-grid__yellow', 'color-grid__white', 'color-grid__green', 'color-grid__purple');
        recuadro.add(seleccion);

        if (recuadro.contains('color-grid__green')) {
            this.setState ({ fase0: true })
        } else {
            this.setState ({ fase0: false })
        }
 
    }
    changeColor2 = () => {
        var lista = ["color-grid__blue", "color-grid__red", "color-grid__yellow", "color-grid__white", "color-grid__green", "color-grid__purple"];
        var aleatorio = Math.floor(Math.random()*(0 + lista.length));
        var seleccion = lista[aleatorio];
       

        var recuadro = document.getElementById('grid__red').classList;
        recuadro.remove("color-grid__blue",'color-grid__red', 'color-grid__yellow', 'color-grid__white', 'color-grid__green', 'color-grid__purple');
        recuadro.add(seleccion);

        if (recuadro.contains('color-grid__green')) {
            this.setState ({ fase1: true })
        }else {
            this.setState ({ fase1: false })
        } 
 
    }
    changeColor3 = () => {
        var lista = ["color-grid__blue", "color-grid__red", "color-grid__yellow", "color-grid__white", "color-grid__green", "color-grid__purple"];
        var aleatorio = Math.floor(Math.random()*(0 + lista.length));
        var seleccion = lista[aleatorio];
       

        var recuadro = document.getElementById('grid__yellow').classList;
        recuadro.remove("color-grid__blue",'color-grid__red', 'color-grid__yellow', 'color-grid__white', 'color-grid__green', 'color-grid__purple');
        recuadro.add(seleccion);

        if (recuadro.contains('color-grid__green')) {
            this.setState ({ fase2: true })
        }else {
            this.setState ({ fase2: false })
        } 
 
    }
    changeColor4 = () => {
        var lista = ["color-grid__blue", "color-grid__red", "color-grid__yellow", "color-grid__white", "color-grid__green", "color-grid__purple"];
        var aleatorio = Math.floor(Math.random()*(0 + lista.length));
        var seleccion = lista[aleatorio];
       

        var recuadro = document.getElementById('grid__white').classList;
        recuadro.remove("color-grid__blue",'color-grid__red', 'color-grid__yellow', 'color-grid__white', 'color-grid__green', 'color-grid__purple');
        recuadro.add(seleccion);

        if (recuadro.contains('color-grid__green')) {
            this.setState ({ fase3: true })
        }else {
            this.setState ({ fase3: false })
        } 
 
    }
    changeColor5 = () => {
        var lista = ["color-grid__blue", "color-grid__red", "color-grid__yellow", "color-grid__white", "color-grid__green", "color-grid__purple"];
        var aleatorio = Math.floor(Math.random()*(0 + lista.length));
        var seleccion = lista[aleatorio];
       

        var recuadro = document.getElementById('grid__green').classList;
        recuadro.remove("color-grid__blue",'color-grid__red', 'color-grid__yellow', 'color-grid__white', 'color-grid__green', 'color-grid__purple');
        recuadro.add(seleccion);

        if (recuadro.contains('color-grid__green')) {
            this.setState ({ fase4: true })
        }else {
            this.setState ({ fase4: false })
        } 
 
    }
    changeColor6 = () => {
        var lista = ["color-grid__blue", "color-grid__red", "color-grid__yellow", "color-grid__white", "color-grid__green", "color-grid__purple"];
        var aleatorio = Math.floor(Math.random()*(0 + lista.length));
        var seleccion = lista[aleatorio];
       

        var recuadro = document.getElementById('grid__purple').classList;
        recuadro.remove("color-grid__blue",'color-grid__red', 'color-grid__yellow', 'color-grid__white', 'color-grid__green', 'color-grid__purple');
        recuadro.add(seleccion);

        if (recuadro.contains('color-grid__green')) {
            this.setState ({ fase5: true })
        } else {
            this.setState ({ fase5: false })
        }
 
    }

    render() {
        const { className, buttonName, click } = this.props;
        
        return (
            
            <div className={`${className} color-grid`}>
                <div className='color-grid__grid'>
                    <div className='color-grid__blue' id='grid__blue' onClick={this.changeColor}></div>
                    <div className='color-grid__red' id='grid__red' onClick={this.changeColor2}></div>
                    <div className='color-grid__yellow' id='grid__yellow' onClick={this.changeColor3}></div>
                    <div className='color-grid__white' id='grid__white' onClick={this.changeColor4}></div>
                    <div className='color-grid__green' id='grid__green' onClick={this.changeColor5}></div>
                    <div className='color-grid__purple' id='grid__purple' onClick={this.changeColor6}></div>
                </div>
                {this.state.fase0 && this.state.fase1 && this.state.fase2 && this.state.fase3 && this.state.fase4 && this.state.fase5 ? 
                <button className='color-grid__button-complete' id='button-grid' onClick={click}>{buttonName}</button> :
                <button className='color-grid__button-hidden' id='button-grid' onClick={click}>{buttonName}</button>}
                
            </div>
        );
    };
};

export default ColorGrid;