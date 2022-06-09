import React from 'react'
import "./ItemListContainer.css"

function ItemListContainer(props) {
  return (

        <div className='containerProduct'>
            <h1 className='title'>
            {props.greeting}
            </h1>
        </div>
  );
}

export default ItemListContainer;