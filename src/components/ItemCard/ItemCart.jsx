import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';

function ItemCart({product}) {
    const { deleteProduct } = useContext(CartContext);

  return (
    <div className='container-sm'>
       <img src={product.img} width={100} alt="imagenproducto"/> 
       <div className='container-sm'>
        <h5>Producto: {product.name}</h5>
        <h5>Precio: {product.price}</h5>
        <h5>Cantidad: {product.count}</h5>
        <h5>Total: ${product.count * product.price}</h5>
        <button onClick={() => deleteProduct(product.id)}>Eliminar producto</button>
       </div>
    </div>
  )
}

export default ItemCart;