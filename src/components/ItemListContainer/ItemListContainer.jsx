import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Carousel from "../Carousel/Carousel";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {

    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");
    
      if (categoryId) {
        const queryFilter = query(queryCollection, where("category", "==", categoryId))
        getDocs(queryFilter)
          .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
      } else {
        getDocs(queryCollection)
          .then(res => setProducts(res.docs.map(product => ({id: product.id, ...product.data() }))))
      }


  }, [categoryId]);

if (products.length >= 8 ){
 return (
    <>
    <Carousel/>
    <div className="text-center container mx-auto mt-5">
      <ItemList items={products} />
    </div>
    </>
  );
}  
return (

 <div className="text-center container mx-auto mt-5">
    <ItemList items={products} />
  </div>
)
};

export default ItemListContainer;
