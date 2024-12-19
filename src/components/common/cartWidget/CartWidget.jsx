import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to= "/cart" style={{ position: "relative", display: "inline-block" }}>
    <img 
      src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" 
      alt="Carrito de compras" 
      style={{ width: "50px", height: "50px" }} 
    />
    <span 
      style={{
        position: "absolute",
        top: "0",
        right: "0",
        background: "red",
        color: "white",
        borderRadius: "50%",
        padding: "0.2rem 0.5rem",
        fontSize: "18px",
        transform: "translate(50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
    {cart.length}
    </span>
  </Link>
  
  );
};

export default CartWidget;
