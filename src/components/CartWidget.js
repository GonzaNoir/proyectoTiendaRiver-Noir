import carritoCompras from "../img/carritoCompras2.png"
import { CartContext } from "./CartContext"
import { useContext } from 'react';

import '../css/header.css'

export default function CartWidget(){

    const context = useContext(CartContext);

    return (
        <>
            <img src={carritoCompras} alt="carrito de compras de la tienda" className="carritoCompras"/>
            {
                context.listaCarrito.length > 0 ?
                <h5 className="itemsCarrito">{context.calcItemsQty()}</h5>
                : <h5></h5>
            }
        </>
    )
}
