import React, {useState} from 'react'
export const CartContext = React.createContext([])





const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, newCount) => {
        const newCarrito = cart.filter(item => item.id !== item.id);
        newCarrito.push({...item, count: newCount});
        setCart(newCarrito)
    }

    console.log("cart:", cart)

    const flushCart = () => {setCart([])};

    const findinCart = (id) => (cart.find(item => item.id === id) ? true : false ) ;

    const deleteProduct = (id) => { setCart (cart.filter(item => item.id !== id)) };




    return (
        <CartContext.Provider value={{
            addToCart,
            flushCart,
            findinCart,
            deleteProduct,
        }}>
            {children}
        </CartContext.Provider>
    )}

export default CartProvider