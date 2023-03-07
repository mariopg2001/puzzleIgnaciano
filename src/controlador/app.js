import {Modelo} from '../modelos/modelo.js'

class Controlador{
    constructor(){
        window.onload= this.iniciar.bind(this)
        this.odelo=new Modelo(this)
    }


    iniciar(){
        this.modelo= new Modelo()
		this.nav = document.getElementsByTagName('nav')[0]
        

    }
}