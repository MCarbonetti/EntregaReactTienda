import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
    const { cart, resetCart, removeProduct, getTotalPrice } =
    useContext(CartContext);
    let totalAmount = getTotalPrice();
    return (
    <div>
        <h1>pagina carrito</h1>
        {cart.length > 0 ? (
        cart.map((elemento) => {
            return (
            <div
                key={elemento.id}
                style={{ border: "2px solid black", padding: "20px" }}
            >
                <h3>{elemento.title}</h3>
                <h3>cantidad: {elemento.quantity}</h3>
                <h3>precio: {elemento.price}</h3>
                <button onClick={() => removeProduct(elemento.id)}>
                Eliminar
                </button>
            </div>
            );
        })
        ) : (
        <h2>El carrrito esta vacio</h2>
        )}

        {cart.length > 0 && (
        <div>
            <h3>El total del carrito es : ${totalAmount}</h3>
            <button onClick={resetCart}>Limpiar todo el carrito</button>
            <Link to="/checkout">Finalizar compra</Link>
        </div>
        )}
    </div>
    );
};

export default Cart;