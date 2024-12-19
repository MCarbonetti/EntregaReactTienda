import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

const btnStyles = {
    padding: "10px 40px",
    backgroundColor: "steelblue",
    fontSize: "1.5rem",
    color: "white",
    border: "none",
    borderRadius: "8px",
};
const divStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
};
const Counter = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
    if (count < product.stock) {
        setCount(count + 1);
        }
    };

    const handleDecrement = () => {
    if (count > 1) {
        setCount(count - 1);
    } else {
        alert("minimo 1 ");
    }
    };

    const onAdd = () => {
    let productToCart = { ...product, quantity: count };
    addToCart(productToCart);
    };

    return (
    <div style={{ ...divStyles, flexDirection: "column" }}>
        <div style={divStyles}>
        <button onClick={handleDecrement} style={btnStyles}>
            -
        </button>
        <h1 style={{ color: 'black' }}>{count}</h1>
        <button onClick={handleIncrement} style={btnStyles}>
            +
        </button>
        </div>
        <button style={btnStyles} onClick={onAdd}>
        Agregar al carrito
        </button>
    </div>
    );
};

export default Counter;