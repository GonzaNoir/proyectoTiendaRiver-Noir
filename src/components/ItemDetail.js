// import { useEffect } from "react/cjs/react.development";
// import getItem from "../utils/getItem";
import ItemCount from "./ItemCount";
import '../css/body.css';

const ItemDetail = ({ item }) =>{

    const onAdd = (qty) =>{
        alert("Seleccionaste " + qty + " items.")
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
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                        {/* {!buy ? (
                        ) : (
                            <button type="button" className="btn btn-outline-dark">Terminar Compra</button>
                        )} */}
                    </div>
                </div>
                : <h1>Cargando...</h1>
            }
            
            
            
        </>
    );

}

export default ItemDetail;