import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './itemDetail.css'; 
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams(); 

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productsCollection = collection( db, "products")
    let refDoc = doc( productsCollection, id)
    const getDocById = getDoc( refDoc )
    getDocById.then( (res) => setProduct({ ...res.data(), id:res,id }));
    
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
