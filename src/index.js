import React from 'react'
import ReactDOM from 'react-dom/client'

/**Las props siempre son el primer parámetro que se le pasa
 * a los componentes funcionales.
 */
const TarjetaFruta = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <hr/>
            <p> {props.price}</p>
        </div>
    )
}

const App = () => (
    <div>
        <TarjetaFruta name= 'Naranja' price={ 2.00 }/>
        <TarjetaFruta name= 'Granadilla' price={ 5.50 }/>
        <TarjetaFruta name= 'Palta' price={ 7.99 }/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
