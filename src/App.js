import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Question from './components/Question';
import Works from './components/Works';

function App() {
  return (
    <div className='' >
      <Header />
      <About />
      <Portfolio />
      <Works />
      <Pricing />
      <Question />
      <Contact />
      <Footer /> 
    </div>
  );
}

export default App;
