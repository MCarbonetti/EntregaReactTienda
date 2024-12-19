import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import './checkout.css';

const Checkout = () => {
  const { cart, getTotalPrice, resetCart } = useContext(CartContext);
  const [userData, setUserData] = useState({
    nombre: "",
    userEmail: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);

  const capturarDatos = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const funcionDelFormulario = (e) => {
    e.preventDefault();



    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <h2 className="order-message">
          Gracias por tu compra, tu ticket es: <span>{orderId}</span>
        </h2>
      ) : (
        <form className="checkout-form" onSubmit={funcionDelFormulario}>
          <input
            className="checkout-input"
            type="text"
            placeholder="Nombre"
            name="nombre"
            onChange={capturarDatos}
            required
          />
          <input
            className="checkout-input"
            type="email"
            placeholder="Email"
            name="userEmail"
            onChange={capturarDatos}
            required
          />
          <input
            className="checkout-input"
            type="tel"
            placeholder="Teléfono"
            name="telefono"
            onChange={capturarDatos}
            required
          />
          <div className="checkout-buttons">
            <button className="checkout-submit" type="submit">
              Enviar
            </button>
            <button
              className="checkout-cancel"
              type="button"
              onClick={() => setUserData({ nombre: "", userEmail: "", telefono: "" })}
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
