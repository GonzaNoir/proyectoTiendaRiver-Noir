// import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header.js';
import BodyMain from './BodyMain';


function App() {
  return (
    
    // Crear componentes sobre la Ropa de river.

    <>
      <section className="fondoHeader">
        <Header />
        <hr/>
      </section>
        
      <BodyMain />

      <Footer />
    </>
  );
}

export default App;
