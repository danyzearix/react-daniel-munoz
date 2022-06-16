import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
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
          
          <ItemListContainer greeting = "CATÁLOGO" />
          <ItemCount initial={0} stock={7} onAdd={onAdd}/>

    </div>
  );
}

export default App;


