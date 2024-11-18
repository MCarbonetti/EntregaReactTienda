import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px", 
        backgroundColor: "darkblue", 
        borderBottom: "4px solid #440c06", 
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
        fontFamily: "'Cursive', sans-serif", 
      }}
    >
      <Link to="/">
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/519/669/non_2x/red-store-stand-modern-logo-symbol-icon-graphic-design-illustration-idea-creative-vector.jpg"
          alt="Logo"
          style={{ width: "50px", height: "50px" }}
        />
      </Link>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
        }}
      >
        <Link
          to="/category/teclados"
          style={{ fontSize: "18px", color: "white", textDecoration: "none" }}
        >
          Teclados
        </Link>
        <Link
          to="/category/mouse"
          style={{ fontSize: "18px", color: "white", textDecoration: "none" }}
        >
          Mouses
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
