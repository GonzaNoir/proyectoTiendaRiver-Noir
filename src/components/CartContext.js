import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) =>{

    const [listaCarrito, setListaCarrito] = useState([]);

    const agregarAlCarrito = (item, qty) =>{
        let found = listaCarrito.find(product => product.idItem === item.id);
        if ( found === undefined ){
            setListaCarrito([
                ...listaCarrito,
                {
                    idItem: item.id,
                    imgItem: item.imagen,
                    nameItem: item.tittle,
                    costItem: item.cost,
                    qtyItem: qty,
                }
            ])
        } else {
            found.qtyItem += qty;
        }
    }

    const vaciarCarrito = () =>{
        setListaCarrito([]);
    }

    const borrarItem = (id) =>{
        let result = listaCarrito.filter(item => item.idItem != id);
        setListaCarrito(result);
    }

    return(
        <CartContext.Provider value={{listaCarrito, agregarAlCarrito, vaciarCarrito, borrarItem}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;