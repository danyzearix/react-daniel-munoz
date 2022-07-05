import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Contacto from './components/Contacto/Contacto';
import CartProvider from './context/CartContext';


//Componente global
function App() {
  //Funcion que agregar al carrito por console.log
  const onAdd = (cantidad) =>{
    console.log(`Seleccionaste ${cantidad} de unidades`)
  }
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Lista de productos"}/>} />
            <Route path='/categorias/:categoryId' element={<ItemListContainer/>} />
            <Route path='/producto/:productoId' element={<ItemDetailContainer/>} />
            <Route path='/carrito' element={<CartWidget/>} />
            <Route path='/contacto' element={<Contacto/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;


