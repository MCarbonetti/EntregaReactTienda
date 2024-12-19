import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import './cart.css';

const Cart = () => {
    const { cart, resetCart, removeProduct, getTotalPrice } = useContext(CartContext);
    let totalAmount = getTotalPrice();

    return (
    <div className="cart-container">
        <h1>pagina carrito</h1>
        {cart.length > 0 ? (
        cart.map((elemento) => (
            <div key={elemento.id} className="cart-item">
            <h3>{elemento.title}</h3>
            <h3>cantidad: {elemento.quantity}</h3>
            <h3>precio: {elemento.price}</h3>
            <button onClick={() => removeProduct(elemento.id)}>Eliminar</button>
            </div>
        ))
        ) : (
        <h2>El carrito está vacío</h2>
        )}

        {cart.length > 0 && (
        <div className="cart-summary">
            <h3>El total del carrito es: ${totalAmount}</h3>
            <button onClick={resetCart}>Limpiar todo el carrito</button>
            <Link to="/checkout">Finalizar compra</Link>
        </div>
        )}
    </div>
  );
};

export default Cart;
