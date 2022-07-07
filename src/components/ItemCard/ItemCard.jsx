import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';

function IteamCart() {
    const { deleteProduct } = useContext(CartContext);
  return (
    <div>
       <img src={product.img} alt="" srcset="" /> 
       <div>
        <h3>Producto: {product.name}</h3>
        <h3>Precio: {product.price}</h3>
        <h3>Cantidad: {product.count}</h3>
        <h5>Total: ${product.count * product.price}</h5>
        <button onClick={() => deleteProduct(product.id)}>Eliminar producto</button>
       </div>
    </div>
  )
}

export default IteamCart;