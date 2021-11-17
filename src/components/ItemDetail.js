import { useState, useEffect } from "react/cjs/react.development";
import getItem from "../utils/getItem";
import ItemCount from "./ItemCount";

const ItemDetail = () =>{
    
    const [buy, setBuy] = useState(false);
    const [datos, setDatos] = useState([]);
    const [error, setError] = useState({
        isError: false,
        errorMessage: ""
    })
    
    const botonAgregar = (props) => {
        setBuy(true);
        // onAdd({ id, nombre, precio }, props.unidades);
    };

    useEffect(()=>{
        getItem()
            .then(result => setDatos(result))
            // .then(() => console.log(Items[props.item]))
            .catch(err => setError({
                isError: true,
                errorMessage: err
            }))
    },[])
    
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
            {
                datos.map((dato) => <div className="row">
                                        <div className="col-lg-4">
                                            <img src={dato.imagen} alt={dato.name} className="img-fluid"/>
                                        </div>
                                        <div className="col-lg-8">
                                            <h2>{dato.name}</h2>
                                            <p>Stock: {dato.stock}</p>
                                            <p>Precio: <strong>${dato.cost}</strong></p>
                                            <div>
                                                <p>Descripcion:</p>
                                                <p>{dato.desc}</p>
                                            </div>
                                            {!buy ? (
                                                <ItemCount stock={10} initial={1} onAdd={botonAgregar} />
                                            ) : (
                                                <button type="button" className="btn btn-outline-dark">Terminar Compra</button>
                                            )}
                                        </div>
                                    </div>)
            }
            
        </>
    );

}

export default ItemDetail;