// import { useEffect } from "react/cjs/react.development";
// import getItem from "../utils/getItem";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) =>{

    return (
        <>
            {/* {
                datos.map((dato)=>  <div className="col-lg-4"> 
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">{dato.name}</h4>
                                                <img src={dato.imagen} alt={dato.name} className="img-fluid"/>
                                                <p className="card-text">Stock: {dato.stock}</p>
                                                <p className="card-text">${dato.cost}</p>
                                                <button type="button" className="btn btn-outline-dark">Ver Detalles</button>
                                            </div>
                                        </div>
                                    </div> )
            } */}
            
            <div className="row">
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
                    <ItemCount stock={10} initial={1} />
                    {/* {!buy ? (
                    ) : (
                        <button type="button" className="btn btn-outline-dark">Terminar Compra</button>
                    )} */}
                </div>
            </div>
            
            
        </>
    );

}

export default ItemDetail;