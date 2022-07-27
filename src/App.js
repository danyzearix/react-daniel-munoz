import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
//Componente global
function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element=  {<ItemListContainer/>} />
            <Route path='/categorias/:categoryId' element={<ItemListContainer/>} />
            <Route path='/producto/:productoId' element={<ItemDetailContainer/>} />
            <Route path='/carrito' element={<Cart/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;


