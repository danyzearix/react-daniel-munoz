import { addDoc, getFirestore, collection } from "firebase/firestore"
import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCart from '../ItemCard/ItemCart';

function Cart () {
    const { cart, totalPrice } = useContext(CartContext);
    
    const orden = {
        cliente: {
            name: "Daniel",
            lastname: "Munoz",
            email: "dgmunoz312@gmail.com",
            phone: "3134703991",
            address: "Cra 20 # 06-50 Soacha",       
        },
       // items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        //total: totalPrice(),
    }

    const handleClick = () => {
        const database = getFirestore();
        const ordersCollection = collection(database, "ordenes");
        addDoc(ordersCollection, orden)
            .then(({id}) => console.log(id))
    }

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
        <button onClick={handleClick}>Generar compra</button>
        </div>
        
    </>
  )
}
export default Cart