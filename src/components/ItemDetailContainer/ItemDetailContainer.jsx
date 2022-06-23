import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { bodega } from '../../data/products'
import { useParams } from 'react-router-dom';

const productos = bodega

function ItemDetailContainer({title}) {
  const [data, setData] = useState({});
  const { productoId } = useParams();

  useEffect(() => {
    const getItem =  new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(bodega);
      }, 2000);
    });
    getItem.then(res => setData(res.find(producto => producto.id === parseInt (productoId))));
  
  },[])
  
  
    return (
      <div className='container-fluid mx-auto'>
        <div>
        <h1 className="text-primary mb-2 mt-2 text-center">{title}</h1>
      </div>
        <ItemDetail data={data} />
      </div>
    
  );
}

export default ItemDetailContainer