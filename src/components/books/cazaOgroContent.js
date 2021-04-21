import React, { Fragment, Component } from 'react';
import DobleImagenParrafo from '../booksComponents/dobleImagenParrafo';
import ImagenParrafo from '../booksComponents/imagenParrafo';
import ParrafoJuego from '../booksComponents/parrafoJuego';
import history from '../../history';

import TopPage from '../topComponent';

class CazaOgroContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // title: false,
            step1: true,
            step2: false,
            step3a: false,
            step3b: false,
            step4: false
        }

        // this.setState = this.returnHome.bind(this);
        this.step2 = this.step2.bind(this);
        this.step3a = this.step3a.bind(this);
        this.step3b = this.step3b.bind(this);
        this.step4 = this.step4.bind(this);
    }

    
    step2() {
        this.setState({
            step1: false,
            step2: true
        })
    }
    step3a() {
        this.setState({
            step2: false,
            step3a: true
        })
    }
    step3b() {
        this.setState({
            step2: false,
            step3b: true
        })
    }
    step4() {
        this.setState({
            step3b: false,
            step4: true
        })
    }
    returnHome = () => {
        history.push('/');
    }



    render() {
        
        if (this.state.step1 === true ) {
            return (
                <Fragment>
                    <TopPage className='Home-page__title' title='El Cazador y el Ogro'/>
                    <div className='book-content'>
                    <ImagenParrafo
                    className='ogro-step1'
                    image='https://cdn.pixabay.com/photo/2016/10/07/23/10/vintage-1722786_960_720.jpg' 
                    texto='Todos sabían que el pequeño faraón era caprichoso, engreído y malcriado. ¡Pero su último mandato había dejado a los egipcios con los ojos como platos! 
                        El pequeño faraón había ordenado construir una pirámide: la más grande y majestuosa que se hubiera visto jamás. Y quería que fuera negra como la noche: de obsidiana, un vidrio volcánico del que se creía que tenía poderes extraordinarios.
                        Hasta ahí no había problema: el arquitecto real contaba con experimentados constructores egipcios y el Imperio tenía riquezas y recursos suficientes como para traer la exótica roca volcánica desde la lejana Anatolia…  ¡Lo realmente inaudito era que el pequeño faraón había pedido que construyeran la pirámide del revés!'
                    click={this.step2}
                    button={"Continuar"}
                    />
                    </div>
                </Fragment>
            )
        } else if (this.state.step2 === true ) {
            return (
                <Fragment>
                    <TopPage className='Home-page__title' title='El Cazador y el Ogro'/>
                    <div className='book-content'>
                    <DobleImagenParrafo
                    className='ogro-step2' 
                    imageL='https://cdn.pixabay.com/photo/2016/10/07/23/14/vintage-1722799_960_720.jpg'
                    buttonL='Opción A'
                    clickL={this.step3a}
                    texto='Lorem ipsum dolor sit amet consectetur adipiscing elit nunc, a volutpat bibendum aliquet vehicula libero fusce, nibh ullamcorper dignissim penatibus enim ultricies ornare. Placerat condimentum ultrices elementum ullamcorper lacinia senectus, massa habitant sodales nibh aptent. Sociis vivamus facilisis integer tristique sagittis accumsan nunc massa ad arcu, est quisque habitant libero at bibendum nec himenaeos.'
                    imageR='https://cdn.pixabay.com/photo/2016/10/07/23/20/vintage-1722824_960_720.jpg'
                    buttonR='Opción B'
                    clickR={this.step3b}
                    />
                    </div>
                </Fragment>
            )
        } else if (this.state.step3a === true ) {
            return (
                <Fragment>
                    <TopPage className='Home-page__title' title='El Cazador y el Ogro'/>
                    <div className='book-content'>
                    <ImagenParrafo
                    className='ogro-step-final'
                    image='https://image.freepik.com/free-photo/halloween-graves_1048-3283.jpg' 
                    texto="El ogro se enfada y te mata..."
                    click={() => {this.returnHome()}}
                    button={"Game Over"}
                    styleImg={{height: 250}}
                    />
                    </div>
                </Fragment>
            )
        } else if (this.state.step3b === true ) {
            return (
                <Fragment>
                    <TopPage className='Home-page__title' title='El Cazador y el Ogro'/>
                    <div className='book-content'>
                    <ParrafoJuego
                    texto='Completa el minijuego para continuar, haz que todos los cuadrados sean del color verde...'
                    click={this.step4}
                    buttonName='Continuar'
                    />
                    </div>
                </Fragment>
            )
        } else if (this.state.step4 === true ) {
            return (
                <Fragment>
                    <TopPage className='Home-page__title' title='El Cazador y el Ogro'/>
                    <div className='book-content'>
                    <ImagenParrafo
                    className='ogro-step1'
                    image='https://cdn.pixabay.com/photo/2016/10/07/23/10/vintage-1722786_960_720.jpg' 
                    texto='Terminó en cuento'
                    click={() => {this.returnHome()}}
                    button={"Final"}
                    />
                    </div>
                </Fragment>
            )
        }
    }
}

export default CazaOgroContent;

