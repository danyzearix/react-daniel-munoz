import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCart from '../ItemCard/ItemCart';

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
    <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <div className='container-sm'>
        <h3>
            Total: ${totalPrice()}
        </h3>
        </div>
        
    </>
  )
}
export default Cart