import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';


function ItemDetailContainer({title}) {
  const [data, setData] = useState({});
  const { productoId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", productoId);
    getDoc (queryDoc)
      .then(res => setData({id: res.id, ...res.data()}))
  }, [productoId] );
  
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