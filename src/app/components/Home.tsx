// src/app/components/Home.tsx
"use client";
import { useState, useEffect, useRef } from 'react';
import '../assets/css/Home.css';
import '../assets/css/App.css';
import Image from 'next/image';
import foto from '../assets/images/foto.jpg';

const texts = ["Fullstack Developer", "Frontend Developer", "Backend Developer"];

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
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        {/* Teks di sebelah kiri */}
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4 text-wc">Welcome to My Portfolio</h1>
          <div className="block md:flex md:items-center md:space-x-4">
            <h2 className="text-2xl  text-hello md:mb-0 text-hl">
              Hello! I am a
            </h2>
            <span className="text-blue-500 font-bold text-2xl text-hl">
              <TypingEffect />
            </span>
          </div>
          <p className="text-lg text-justify item mt-4 text-p">
            With a passion for creating dynamic and responsive web applications. Explore my portfolio to see my projects and skills.
          </p>
        </div>
        {/* Gambar di sebelah kanan */}
        <div className="w-full md:w-1/2 p-4 text-center item responsive-image">
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
