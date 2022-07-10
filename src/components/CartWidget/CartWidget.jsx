import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import icon from "./car-icon.svg"
import { CartContext } from '../../context/CartContext';
import css from "./CartWidget.css"



function CartWidget() {
  const { cart, allProducts } = useContext(CartContext);

  if (cart.length === 0) {
    return (
    <div className='none'>

    </div>
    )
  } else {
  return (
    
     <NavLink to={"/carrito"}> <img src={icon} alt="icono-tienda" width={28} height={28} /> 
     <h6 className='text-center' id='cartCounter'>{allProducts()}</h6></NavLink>
  )
  }
}

export default CartWidget