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
                    imgItem: item.imagen[0],
                    nameItem: item.tittle,
                    costItem: item.cost,
                    // stockItem: item.stock,
                    qtyItem: qty,
                }
            ])
        } else {
            found.qtyItem += qty;
            setListaCarrito([...listaCarrito]);
        }
    }

    const vaciarCarrito = () =>{
        setListaCarrito([]);
    }

    const borrarItem = (id) =>{
        let result = listaCarrito.filter(item => item.idItem != id);
        setListaCarrito(result);
    }

    const calcTotalPorItem = (idItem) => {
        let index = listaCarrito.map(item => item.idItem).indexOf(idItem);
        return listaCarrito[index].costItem * listaCarrito[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPorItem = listaCarrito.map(item => calcTotalPorItem(item.idItem));
        return totalPorItem.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let qtys = listaCarrito.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return(
        <CartContext.Provider value={{
            listaCarrito, 
            agregarAlCarrito, 
            vaciarCarrito, 
            borrarItem,
            calcTotalPorItem,
            calcSubTotal,
            calcItemsQty,
            calcTotal
            }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;