import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer';

export default function BodyMain(){
    return(
        <>
            <ItemListContainer/>
            <ItemDetailContainer />
            {/* <p className="App">Esta es mi pagina del Curso React. Aqui podras encontrar mi E-commerce.</p> */}
            {/* <img src={logo} alt=""/> */}
        </>
    );
}