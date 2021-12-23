import { Link } from 'react-router-dom';
import '../css/body.css';

const Items = ({id, tittle, stock, imagen, cost}) =>{

    return(
        <div className="col-lg-4 paddingCardItem"> 
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{tittle}</h4>
                    <img src={imagen} alt={tittle} className="img-fluid imgStyle"/>
                    <p className="card-text">Stock: {stock}</p>
                    <p className="card-text">${cost}</p>
                    <button type="button" className="btn btn-outline-dark">
                        <Link to={`/item/${id}`} style={{textDecoration: "none", color: "black"}}>Ver Más</Link>
                    </button>
                </div>
            </div>
        </div> 
    )
}

export default Items;