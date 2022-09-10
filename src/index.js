import React from 'react'
import ReactDOM from 'react-dom/client'

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
    <div>
        <TarjetaFruta/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(App())
