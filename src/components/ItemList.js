import { useEffect, useState } from "react";
// const { Items } = require('./Item');
import getItem from "../utils/getItem.js";

export default function ItemList(){

    // const productosPromise = () =>{
    //     return new Promise ((resolve, reject) =>{
    //         if(Items.length > 0){
    //             setTimeout(() => {
    //                 resolve(Items);
    //             }, 2000);
    //         }else{
    //             reject();
    //         }
    //     })
    // }
    
    const [datos, setDatos] = useState([]);
    const [error, setError] = useState({
        isError: false,
        errorMessage: ""
    })
    
    useEffect(()=>{
        getItem()
            .then(result => setDatos(result))
            // .then(() => console.log(Items[props.item]))
            .catch(err => setError({
                isError: true,
                errorMessage: err
            }))
    },[])

    return(
        // <div className="col-lg-4">
        //     {/* <div className="card">
        //         <div className="card-body">
        //             <h4 className="card-title">{Items[props.item].name}</h4>
        //             <img src={Items[props.item].imagen} alt={Items[props.item].name} className="img-fluid"/>
        //             <p className="card-text">Stock: {Items[props.item].stock}</p>
        //             <p className="card-text">${Items[props.item].cost}</p>
        //         </div>
        //     </div> */}
        //     <div className="card">
        //         <div className="card-body">
                    
        //             {/* <h4 className="card-title">{datos.map((dato)=>dato.name)}</h4>
        //             <img src={datos[props.item].imagen} alt={datos[props.item].name} className="img-fluid"/>
        //             <p className="card-text">Stock: {datos[props.item].stock}</p>
        //             <p className="card-text">${datos[props.item].cost}</p> */}
        //         </div>
        //     </div>
        // </div>
        <>
        {
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
        }
        </>
    )
    
}