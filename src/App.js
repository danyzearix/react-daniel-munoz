import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Lista de productos"}/>} />
          <Route path='/categorias/:categoryId' element={<ItemListContainer/>} />
          <Route path='/producto/:productoId' element={<ItemDetailContainer/>} />
        </Routes>
          
          
      </BrowserRouter>
    </>
  );
}

export default App;


