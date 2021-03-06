import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

function ItemDetail({data}) {
  const [carrito, setCarrito] = useState(false)
  const { addToCart } = useContext(CartContext)

  const onAdd = (count) => {
  setCarrito(true);
  addToCart(data, count)
  }
  
  return (
    <div className='container-sm d-flex flex-column justify-content-center'>

            <img className='img-fluid mx-auto' src={data.img} alt="" width={400} height={600}/>
        
        <div className='d-flex flex-column justify-content-center text-center'>
        <p className='fs-2 fw-bold text-info'>${data.price} USD</p>
          <h1>{data.name}</h1>
          <h6>Sobre este producto: <br /> {data.description}</h6>
          <p className='fw-bolder'>STOCK:</p>
          <p>{data.stock}</p>
          {
            carrito ? <Link to="/carrito">Finalizar compra</Link>
            :<ItemCount initial={3} stock={data.stock} onAdd={onAdd}/>
          }
        </div>

    </div>
  )
}

export default ItemDetail