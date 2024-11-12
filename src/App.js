import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/services" Component={Services} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
