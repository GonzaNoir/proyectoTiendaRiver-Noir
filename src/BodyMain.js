import logo from './logo.svg';
import ItemListContainer from './components/ItemListContainer';

export default function BodyMain(){
    return(
        <>
            <ItemListContainer/>
            {/* <p className="App">Esta es mi pagina del Curso React. Aqui podras encontrar mi E-commerce.</p> */}
            <img src={logo}/>
        </>
    );
}