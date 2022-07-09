import React, {useState} from 'react'
export const CartContext = React.createContext([])

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, newCount) => {
        if (findinCart(item.id)){
            setCart(cart.map(product => {
                return  product.id === item.id ? {...product, count: product.count + newCount} : product}));
        } else {
            setCart([...cart, {...item, count: newCount}]);
        }
        console.log(cart)
    }

   const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.count * act.price, 0);
    }

    const totalProducts = () => { cart.reduce((acc, actualProduct) => acc + actualProduct.count, 0) 
    }

    const flushCart = () => {setCart([])};

    const findinCart = (id) => (cart.find(item => item.id === id) ? true : false ) ;

    const deleteProduct = (id) => { setCart (cart.filter(item => item.id !== id)) };




    return (
        <CartContext.Provider value={{
            addToCart,
            flushCart,
            findinCart,
            deleteProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )}

export default CartProvider