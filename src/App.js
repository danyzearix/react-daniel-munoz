import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import { BrowserRouter , Route, Routes } from "react-router-dom"
//Componente global
function App() {
  //Funcion que agregar al carrito por console.log
  const onAdd = (cantidad) =>{
    console.log(`Seleccionaste ${cantidad} de unidades`)
  }
  return (
    <div>
        <NavBar/>
          <ItemDetailContainer/>
    </div>
  );
}

export default App;


