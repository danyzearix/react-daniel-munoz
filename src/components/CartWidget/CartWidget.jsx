import React from 'react'
import { NavLink } from 'react-router-dom'
import icon from "./car-icon.svg"

function CartWidget() {
  return (
    
     <NavLink to={"/carrito"}> <img src={icon} alt="icono-tienda" width={28} height={28} /> </NavLink>
  )
}

export default CartWidget