import React from "react";
import ReactDOM from "react-dom/client";

class TarjetaFruta extends React.Component {

  constructor () {
    super()

    this.agregar = this.agregar.bind(this)

    this.state = {
      cantidad : 0
    }
  }

  agregar(){
    /**cada vez que se llama al método setState se ejecuta el método render de la clase 
     * lo cual al dejar este método dentro de un arrow function en el método onClick, estaríamos
     * generando una nueva función por cada click. Esto puede afectar al rendiento.
    */
    this.setState({ cantidad: this.state.cantidad += 1 })
  }

  /**Al usuar clases para crear componentes, las "props" no llegan através
   * del método; si no, llegan usando la palabra reservada this
   */
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Precio: $ {this.props.price}</p>
        <p>Cantidad: {this.state.cantidad}</p>
        <button 
          //Usamos bind para que el método sepa que cuando llamamos a this, nos referimos a la clase y no al mismo método
          onClick= {this.agregar}>
              Agregar
        </button>
        <hr />
      </div>
    );
  }
}

/**Las props siempre son el primer parámetro que se le pasa
 * a los componentes funcionales.
 */
// const TarjetaFruta = (props) => {
//   return (
//     <div>
//       <h3>{props.name}</h3>
//       <hr />
//       <p> {props.price}</p>
//     </div>
//   );
// };

const App = () => (
  <div>
    <TarjetaFruta name="Naranja" price={2.0} />
    <TarjetaFruta name="Granadilla" price={5.5} />
    <TarjetaFruta name="Palta" price={7.99} />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
