import { useState } from 'react';
import '../css/body.css';

export default function ItemCount(props){

    const [cantProductos, setCantProductos] = useState(1);

    const sumarProductos = () =>{
        if (cantProductos < props.stock){
            setCantProductos(cantProductos + 1);
        }
        
    }

    const agregarCarrito = () =>{
        console.log(`Se agrego al carrito ${cantProductos} productos.`);
    }

    const restarProductos = () =>{
        if(cantProductos > props.initial){
            setCantProductos(cantProductos - 1);
        }
        
    }

    return(
        <div className="col-lg-4 contenedorContador">
            <div className="contadorItems">
                <button type="button" className="btn btn-outline-dark" onClick={restarProductos}>-</button>
                <span className="spanContador">{cantProductos}</span>
                <button type="button" className="btn btn-outline-dark" onClick={sumarProductos}>+</button>
            </div>
            <button type="button" className="btn btn-outline-dark" onClick={agregarCarrito}>Agregar Carrito</button>
        </div>
    )
}