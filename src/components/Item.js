// import getItem from "../utils/getItem.js";
// import { useEffect, useState } from 'react';

const Items = ({id, tittle, stock, imagen, cost}) =>{
    console.log(id);

    return(
        <>
            
            <div className="col-lg-4"> 
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{tittle}</h4>
                        <img src={imagen} alt={tittle} className="img-fluid"/>
                        <p className="card-text">Stock: {stock}</p>
                        <p className="card-text">${cost}</p>
                        <button type="button" className="btn btn-outline-dark">Ver Detalles</button>
                    </div>
                </div>
            </div> 
            
        </>
    )
}

// module.exports = {
//     Items,
// }


export default Items;