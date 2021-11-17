import logoTienda from '../img/logoTienda.png';
import CartWidget from './CartWidget';
import '../css/header.css';

export default function NavBar() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 responsiveHeader">
                    <img src={logoTienda} alt="logo de la tienda de River" className="logoTienda" />
                </div>
                <div className="col-lg-4 responsiveHeader">
                    <h2 className=""><strong><em>Tienda River</em></strong></h2>
                </div>
                <div className="col-lg-4 responsiveHeaderOnline">
                    <h3>Login</h3>
                    <CartWidget />
                </div>
            </div>
            <div className="row">
            <div className="col-lg-12 responsiveHeaderLista">
                    <ul className="listaNavBar">
                        <li>Hombre</li>
                        <li>Mujeres</li>
                        <li>Niños</li>
                        <li>Accesorios</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}