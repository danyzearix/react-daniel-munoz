import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail({data}) {
  return (
    <div className='container-sm d-flex flex-column justify-content-center'>

            <img className='img-fluid mx-auto' src={data.img} alt="" width={400} height={600}/>
        
        <div className='d-flex flex-column justify-content-center text-center'>
        <p className='fs-2 fw-bold text-info'>${data.price} USD</p>
          <h1>{data.name}</h1>
          <h6>Sobre este producto: <br /> {data.description}</h6>
          <p className='fw-bolder'>STOCK:</p>
          <p>{data.stock}</p>
          <ItemCount initial={1} stock={data.stock}/>
        </div>

    </div>
  )
}

export default ItemDetail