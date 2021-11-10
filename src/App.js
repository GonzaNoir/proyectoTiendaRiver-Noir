
import './App.css';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import BodyMain from './components/BodyMain.js';


function App() {
  return (
    
    // Crear componentes sobre la Ropa de river.

    <>
      <section className="fondoHeader">
        <Header />
        
      </section>
        
      <BodyMain />

      <Footer />
    </>
  );
}

export default App;
