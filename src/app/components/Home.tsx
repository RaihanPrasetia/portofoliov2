"use client";
import { useState, useEffect, useRef } from 'react';
import '../assets/css/Home.css';
import '../assets/css/App.css';
import Image from 'next/image';
import foto from '../assets/images/foto.jpg';

const texts = ["Web Developer", "Mobile Developer"];

function TypingEffect() {
  const [text, setText] = useState("");
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  useEffect(() => {
    const typeText = () => {
      typingIntervalRef.current = setInterval(() => {
        const currentText = texts[currentTextIndex];

        if (currentCharIndex < currentText.length) {
          setText(prev => prev + currentText[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        } else {
          clearInterval(typingIntervalRef.current!);
          typingIntervalRef.current = null;
          setTimeout(() => {
            setText('');  // Clear text
            setCurrentCharIndex(0); // Reset char index
            setCurrentTextIndex(prev => (prev + 1) % texts.length); // Move to next text
            typeText(); // Start typing the next text
          }, 1000); // Pause before typing the next text
        }
      }, 100); // Typing speed
    };

    typeText();

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, [currentTextIndex, currentCharIndex]);

  return <span className="text-primary">{text}</span>;
}

export default function Home() {
  return (
    <section id="home" className="section">
      <div className="flex flex-col md:flex-row items-center md:justify-between pt-8">
        {/* Teks di sebelah kiri */}
        <div className="w-full md:w-1/2 p-4 text-cen">
          <h1 className="text-4xl font-bold mb-4 pt-10 text-wc">Welcome to My <span className="text-blue-500">Portfolio</span></h1>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-2 min-h-[70px]">
           <h2 className="text-2xl text-hello md:mb-0 text-hl">
              Hello! I am a
           </h2>
           <span className="text-blue-500 font-bold text-2xl text-hl">
            <TypingEffect />
            </span>
          </div>
          <p className="text-lg text-justify item mt-2 text-p text-cen text-ft">
          Driven by a deep passion for crafting seamless and responsive web experiences, I specialize in both frontend and backend development. My skills also extend to creating intuitive mobile applications using Flutter. Dive into my portfolio to discover the innovative solutions I've built across multiple platforms.
          </p>
          {/* Button Download CV untuk tampilan mobile */}
          <a className="btn-home block lg:hidden mt-4 text-sm item" href="https://drive.google.com/file/d/1O6ER2QzyxMPu8uFfaNmf5fjFKkgO7rMY/view?usp=sharing" target="_blank">
            Download CV
          </a>
        </div>
        {/* Gambar di sebelah kanan */}
        <div className="w-full md:w-1/2 p-4 text-center item image-foto">
          <Image 
            src={foto}
            alt="Profile"
            className="rounded-full mx-auto"
            width={380}
            height={380}
          />
        </div>
      </div>
    </section>
  );
}
