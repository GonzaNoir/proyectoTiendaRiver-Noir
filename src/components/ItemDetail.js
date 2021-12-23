import ItemCount from "./ItemCount";
import '../css/body.css';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cargando from "../utils/Cargando";
import { CartContext } from "./CartContext";

const ItemDetail = ({ item }) =>{

    const [compra, setCompra] = useState(0);

    const context = useContext(CartContext);

    const btnAgregar = (qty) =>{
        alert ("Has seleccionado " + qty + " productos.");
        setCompra(qty);
        context.agregarAlCarrito(item, qty);
    }

    return (
        <>
            {
                item && item.imagen
                ?
                <div className="row paddingDetail fontStyle">
                    <div className="col-lg-4">
                        <img src={item.imagen} alt={item.tittle} className="img-fluid imgStyle"/>
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
                            compra === 0
                            ? (<ItemCount stock={item.stock} initial={compra} onAdd={btnAgregar}/>)
                            : (<Link to="/cart"><button type="button" className="btn btn-outline-dark paddingBtnBuy">Terminar Compra</button></Link>)
                        }
                    </div>
                </div>
                : <div className="centerCargandoDetail"><Cargando /></div>
                
            }
        </>
    );

}

export default ItemDetail;