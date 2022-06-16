import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import { products } from "../../data/products.js";
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({}) => {
    const [products,setProducts] = useState([]);
    useEffect(() => {const callProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  callProducts.then((resolve) =>{
    //console.log(products)
    setProducts(resolve);
  })
    .catch((error) => {
      console.error(error);
    });
  
  
  },[]);


console.log(products)

return (
  <>
    <div>
        <ItemList items={products} />
    </div>
  </>
);
};

export default ItemListContainer;