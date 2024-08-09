// src/app/page.tsx
import './assets/css/App.css'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Navbar from './components/Navbar';



export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="main-content w-100">
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
