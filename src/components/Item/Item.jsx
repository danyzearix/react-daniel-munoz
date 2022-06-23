import React from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { bodega } from "../../data/products";


const Item = ({ item }) => {
//Componente retorna los valores de cada producto
  return (
    <div className="card mx-auto mb-5 shadow p-3 mb-5 bg-body rounded" style={{width: 20 + "rem"}}>
            <img src={item.img} className="card-img-top" alt="..."/>
         <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <h3 className='text-info'> ${item.price} USD </h3>
            <Link to={`/producto/${item.id}`} className="btn btn-primary">Ver mas</Link>
        </div>
    </div>
  )
}

export default Item