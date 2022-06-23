import React, { useState, useEffect } from "react";
import { bodega } from "../../data/products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {

    const traerbodega = new Promise((res, rej) => {
      setTimeout(() => {
        res(bodega);
      }, 20);
    });
    if (categoryId) {
      traerbodega.then(res => setProducts(res.filter(consolas => consolas.category === categoryId)));
      } 
      if (categoryId) {
        traerbodega.then(res => setProducts(res.filter(ipad => ipad.category === categoryId)));
        }
        
        if (categoryId) {
          traerbodega.then(res => setProducts(res.filter(smartwatch => smartwatch.category === categoryId)));
          }

          if (categoryId) {
            traerbodega.then(res => setProducts(res.filter(laptops => laptops.category === categoryId)));
            }
      else {
      traerbodega.then(res => setProducts(res));
    }


  }, [categoryId]);

  return (
    <div className="text-center container mx-auto mt-5">
      <div>
        <h1 className="text-primary mb-5">{greeting}</h1>
      </div>
      <ItemList items={products} />
    </div>
  );
};

export default ItemListContainer;
