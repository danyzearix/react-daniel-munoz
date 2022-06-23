import React, {useState, useEffect} from "react"
function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(parseInt(initial));
    const restar = () => {
        setCount(count - 1)
    }

    const sumar = () => {
        setCount(count + 1)
    }

    useEffect(()=> {
        setCount(parseInt(initial));
    },[initial])

    let min = 0;

  return (
    <div className="container-fluid d-flex flex-wrap justify-content-center mt-2 mb-2 ">
        <button disabled = {count <= min} onClick={restar} className="btn btn-primary"> - </button>
        <span className="ms-3 me-3"> {count} </span>
        <button disabled= {count >= stock} onClick={sumar} className="btn btn-primary"> + </button>
            <div className="container-fluid d-flex flex-wrap justify-content-center">
                <button disabled={stock<=0} onClick={() => onAdd(count)} className="btn btn-primary mt-1 "> Agregar al carrito</button>
            </div>
    </div>
  )
}

export default ItemCount