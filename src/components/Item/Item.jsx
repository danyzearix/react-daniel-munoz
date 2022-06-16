import React from 'react'


const Item = ({ item }) => {
//Componente retorna los valores de cada producto
  return (
    <div class="card mx-auto mb-5 shadow p-3 mb-5 bg-body rounded" style={{width: 20 + "rem"}}>
            <img src={item.img} class="card-img-top" alt="..."/>
         <div class="card-body">
            <h5 class="card-title">{item.name}</h5>
            <p class="card-text">{item.description}</p>
            <h3 className='text-info'> ${item.price} USD </h3>
            <a href="#" class="btn btn-primary">Ver mas</a>
        </div>
    </div>
  )
}

export default Item