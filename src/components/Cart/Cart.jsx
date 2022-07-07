import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

function Cart () {
    const { cart, totalPrice } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <>
                <div className="container-sm d-flex flex-column justify-content-center">
                    <h1>No hay productos en el carrito</h1>
                    <Link to="/">Volver a la tienda</Link>
                </div>
            </>
        );
    }
        
  return (
    <div>Cart</div>
  )
}

export default Cart