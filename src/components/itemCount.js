import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import '../css/body.css';

export default function ItemCount({stock = 0, initial = 1, onAdd}){

    const [cantProductos, setCantProductos] = useState(1);

    useEffect(() => {
        setCantProductos(initial);
    },[]);

    const sumarProductos = () =>{
        if (cantProductos < stock){
            setCantProductos(cantProductos + 1);
        }
        
    }

    const restarProductos = () =>{
        if(cantProductos > initial){
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
            <button type="button" className="btn btn-outline-dark" onClick={()=>onAdd(cantProductos)}>Agregar Carrito</button>
        </div>
    )
}