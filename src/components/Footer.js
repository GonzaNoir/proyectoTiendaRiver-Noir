import logoTiendaFooter from "../img/logoTienda-Footer.png";
import iconInstagram from "../img/iconInstagram.png";
import iconFacebook from "../img/iconFacebook.png";
import iconYoutube from "../img/iconYoutube.png";

import '../css/footer.css'

export default function Footer(){
    return(
        <section className="styleFooter">
            <div className="container paddingFooter">
                <div className='row'>
                    <img src={logoTiendaFooter} className="col-lg-3 sizeLogoFooter"/>
                    <h3 className="col-lg-6 copyStyle">© 2021, Gonzalo Ezequiel Noir</h3>
                    <div className="col-lg-3 flexRedes">
                        <h3 className="fontSize">SEGUINOS EN:</h3>
                        <div>
                            <img src={iconFacebook} className="img-fluid sizeIcons"/>
                            <img src={iconInstagram} className="img-fluid sizeIcons"/>
                            <img src={iconYoutube} className="img-fluid sizeIcons"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}