import React from 'react'
import ReactDOM from 'react-dom'

const TarjetaFruta = () => {
    return (
        <div>
            <h3>Titulo</h3>
            <hr/>
            <p>Descripcion</p>
        </div>
    )
}

const App = () => (
    <TarjetaFruta/>
)

ReactDOM.render(App, document.getElementById('root'))