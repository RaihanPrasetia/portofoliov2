"use client";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import foto from '../assets/images/foto.jpg';
import '../assets/css/Home.css';

const texts = ["Web Developer", "Mobile Developer"];

function TypingEffect() {
  const [text, setText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

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
            setCurrentTextIndex((prev) => (prev + 1) % texts.length); // Move to next text
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

  return <span className="text-blue-500 font-bold text-2xl">{text}</span>;
}

export default function Home() {
  return (
    <section id="home" className="section">
      <div className="flex flex-col md:flex-row items-center md:justify-between pt-8 px-10">
        {/* Teks di sebelah kiri */}
        <div className="w-full md:w-1/2 p-4 text-center md:text-justify">
          <h1 className="text-4xl font-bold mb-4 pt-10 text-white">
            Welcome to My <span className="text-blue-500">Portfolio</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center min-h-[70px]">
            <h2 className="text-2xl text-white mr-2">
              Hello! I am a
            </h2>
            <TypingEffect />
          </div>
          <p className="text-lg mt-4 text-gray-300 text-ft">
            Driven by a deep passion for crafting seamless and responsive web experiences, I specialize in both frontend and backend development. My skills also extend to creating intuitive mobile applications using Flutter. Dive into my portfolio to discover the innovative solutions I have built across multiple platforms.
          </p>
          {/* Button Download CV untuk tampilan mobile */}
          <a
            className="btn-home block lg:hidden mt-4 text-sm bg-gradient-to-l from-blue-600 to-slate-700 text-white py-2 px-4 rounded custom-white-shadow"
            href="https://drive.google.com/file/d/1O6ER2QzyxMPu8uFfaNmf5fjFKkgO7rMY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
        {/* Gambar di sebelah kanan */}
        <div className="w-full md:w-1/2 p-4 text-center">
          <Image
            src={foto}
            alt="Profile Picture of Raihan Prasetia"
            className="rounded-full mx-auto"
            width={380}
            height={380}
          />
        </div>
      </div>
    </section>
  );
}