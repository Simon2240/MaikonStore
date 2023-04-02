import { createContext, useContext, useState } from 'react';

const CartContext = createContext( [] )

export const useCartContext = () => useContext(CartContext)



export const CartContextProvider = ( { children } ) => {

    const [cartList, setCartList] = useState([])

    const agregarCarrito = (product) => {
        const idx = cartList.findIndex(prod => prod.id === product.id)

        if (idx !== -1) {
            cartList[idx].count += product.count
            setCartList([...cartList])
        }else{
            setCartList([...cartList, product])
        }
    }

    const totalPrice = () => cartList.reduce((contador, producto) => contador += (producto.price * producto.count) , 0)
    const totalCount = () => cartList.reduce((contador, producto) => contador += producto.count , 0)

    const emptyCart = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id ))
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            emptyCart,
            totalPrice,
            totalCount,
            deleteItem
        }}>
            { children }
        </CartContext.Provider>
    )
}