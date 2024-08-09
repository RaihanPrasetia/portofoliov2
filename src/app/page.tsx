
import './assets/css/App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';



export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer /> 
    </div>
  );
}
