"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import '../assets/css/Navbar.css';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['home', 'about', 'skills', 'certificates', 'projects', 'contact'];

  const handleScroll = () => {
    let currentSection = 'home';
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
    }
    setActiveSection(currentSection);
  };

 useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const menu = document.querySelector('.navbar-menu');
    const toggler = document.querySelector('.block button');
    
    if (menu && toggler && !menu.contains(event.target as Node) && !toggler.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('click', handleClickOutside);
  handleScroll(); // Set initial state

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('click', handleClickOutside);
  };
}, [handleScroll]);


  const handleClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      element.classList.add('visible');
    }
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="navbar">
      <div className="container mx-auto flex items-center justify-between p-4 relative">
        <a className="navbar-brand text-tf" href="#home">My<span className="text-blue-500">Portfolio</span></a>

        {/* Button Toggler */}
        <div className="block lg:hidden">
          <button 
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Menu Navigasi */}
        <div className={`navbar-menu pb-6 bg-transparent ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {sections.map(section => (
              <li key={section} className={`nav-item ${activeSection === section ? 'active' : ''}`}>
                <Link 
                  href={`#${section}`}
                  className="nav-link"
                  onClick={() => handleClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn-gradient bg-gradient-to-r from-blue-600 to-slate-700 font-bold btn-navbar ml-3 hidden lg:inline-block " href="https://drive.google.com/file/d/1O6ER2QzyxMPu8uFfaNmf5fjFKkgO7rMY/view?usp=sharing" target="_blank">
          Download CV
        </a>
      </div>
    </nav>
  );
}