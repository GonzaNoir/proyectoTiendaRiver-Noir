// import { useEffect } from "react/cjs/react.development";
// import getItem from "../utils/getItem";
import ItemCount from "./ItemCount";
import '../css/body.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import Cargando from "../utils/Cargando";

const ItemDetail = ({ item }) =>{

    const [compra, setCompra] = useState(false);
    const btnAgregar = (props) =>{
        alert ("Has seleccionado " + props + " productos.");
        setCompra(true);
        // onAdd(item.id, item.tittle, item.cost, item.imagen, props.unidades);
    }

    return (
        <>
            {
                item && item.imagen
                ?
                <div className="row paddingDetail">
                    <div className="col-lg-4">
                        <img src={item.imagen} alt={item.tittle} className="img-fluid"/>
                    </div>
                    <div className="col-lg-8">
                        <h2>{item.tittle}</h2>
                        <p>Stock: {item.stock}</p>
                        <p>Precio: <strong>${item.cost}</strong></p>
                        <div>
                            <p>Descripcion:</p>
                            <p>{item.desc}</p>
                        </div>
                        {
                            !compra 
                            ? (<ItemCount stock={item.stock} initial={1} onAdd={btnAgregar}/>)
                            : (<Link to="/cart"><button type="button" className="btn btn-outline-dark">Terminar Compra</button></Link>)
                        }
                    </div>
                </div>
                : <div className="centerCargando"><Cargando /></div>
                
            }
            
            
            
        </>
    );

}

export default ItemDetail;