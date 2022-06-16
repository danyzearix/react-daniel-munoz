import React, { useState, useEffect } from "react";
import { bodega } from "../../data/products";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const traerbodega = new Promise((res, rej) => {
      setTimeout(() => {
        res(bodega);
      }, 2000);
    });

  traerbodega
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(bodega);

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
