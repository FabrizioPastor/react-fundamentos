import React from 'react'
import ReactDOM from 'react-dom'

const App = <h1>Hola Mundo!</h1> 

const TarjetaFruta = () => {
    return (
        <div>
            <h3>Titulo</h3>
            <hr/>
            <p>Descripcion</p>
        </div>
    )
}

ReactDOM.render(App, document.getElementById('root'))