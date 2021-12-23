import logoTienda from '../img/logoTienda.png';
import CartWidget from './CartWidget';
import '../css/header.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <section className="fondoHeader">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 responsiveHeader">
                        <img src={logoTienda} alt="logo de la tienda de River" className="logoTienda" />
                    </div>
                    <div className="col-lg-4 responsiveHeader">
                        <h2 className="fontStyle"><strong>Tienda River</strong></h2>
                    </div>
                    <div className="col-lg-4 responsiveHeaderOnline">
                        <Link to='/cart' style={{textDecoration: "none"}} className='sizeCarrito'><CartWidget /></Link>
                    </div>
                </div>
                <div className="row">
                <div className="col-lg-12 responsiveHeaderLista">
                        <ul className="listaNavBar">
                            <li><Link to='/category/Camisetas'style={{textDecoration: "none", color: "black"}}>Camisetas</Link></li>
                            <li><Link to='/category/Abrigos'style={{textDecoration: "none", color: "black"}}>Abrigos</Link></li>
                            <li><Link to='/category/Shorts'style={{textDecoration: "none", color: "black"}}>Shorts</Link></li>
                            <li><Link to='/'style={{textDecoration: "none", color: "black"}}>Catálago</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}