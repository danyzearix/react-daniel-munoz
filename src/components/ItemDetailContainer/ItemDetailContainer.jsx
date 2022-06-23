import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { bodega } from '../../data/products'

const productoSolo = bodega[1]
console.log(productoSolo)
function ItemDetailContainer() {
  const [data, setData] = useState({});

  useEffect(() => {
    const getItem =  new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productoSolo);
      }, 1);
    });
    getItem.then(res => setData(res));
  },[])
  
  
    return (
      <div className='container-fluid mx-auto'>
        <ItemDetail data={data} />
      </div>
    
  );
}

export default ItemDetailContainer