import React from "react";
import ReactDOM from "react-dom/client";

class TarjetaFruta extends React.Component {

  constructor () {
    super()

    this.state = {
      cantidad : 0
    }
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
          onClick={ () => {
              this.setState({ cantidad: this.state.cantidad += 1});
            }}>
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
