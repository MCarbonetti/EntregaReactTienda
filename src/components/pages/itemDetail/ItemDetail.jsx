import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../products";
import './itemDetail.css'; 

const ItemDetail = () => {
  const { id } = useParams(); 

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productSelected = products.find((el) => el.id === +id);
    setProduct(productSelected);
  }, [id]);

  return (
    <div className="item-detail-container"> 
      <h2 className="item-title">{product.title}</h2> 
      <img className="item-img" src={product.img} alt={product.title} /> 
      <p className="item-description">{product.description}</p> 
      <p className="item-price">{product.price}</p> 
    </div>
  );
};

export default ItemDetail;
