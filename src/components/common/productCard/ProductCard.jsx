import { Link } from "react-router-dom";
import './productCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <h3 className="card--title">{product.title}</h3>
      <img
        className="card--img"
        src={product.img}
        alt={product.title}
      />
      <p>{product.description}</p>
      <p className="card--price">{product.price}</p>
      <Link to={`/itemDetail/${product.id}`} className="card--more">Ver Más</Link>
    </div>
  );
};

export default ProductCard;

