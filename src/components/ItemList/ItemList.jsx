import React from "react";
import Item from "../Item/Item";

//La funcion itera en el array de productos a través del método .map
const ItemList = ({ items }) => {
    return (
        <div>
        {items.map((item) => (
        <Item key={item.id} item={item} /> 
        ))}
        </div>
    );
};

export default ItemList;