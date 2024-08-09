"use client";

export default function Footer() {
  return (
    <footer className="footer text-white p-6">
      <div className="container bg-grey mx-auto flex flex-col md:flex-row justify-between items-center min-w-[100px]">
        {/* Footer Left */}
        <div className="footer-left text-center md:text-left mb-6 md:mb-0  min-w-[250px]">
          <h2 className="text-4xl font-bold text-tf">
            My<span className="text-blue-500">Portfolio</span>
          </h2>
        </div>

        {/* Footer Center */}
        <div className="footer-center text-center pb-4 md:mb-0 m-0 p-0  min-h-[50px]">
          <h3 className="text-3xl font-semibold text-med ">Media Sosial</h3>
          <div className="social-icons pt-4 flex justify-center md:justify-start space-x-10">
            <a
              href="https://www.facebook.com/share/1Ter3eECZctGeDX8/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 text-2xl text-i"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/prasetia_raihan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-2xl text-i"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="http://linkedin.com/in/raihan-prasetia-4761832a2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 text-2xl text-i"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/raihanprasetia?igsh=MXkwd3I1ZXM4eGRmdQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 text-2xl text-i"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Footer Right */}
        <div className="footer-right text-center md:text-right ">
          <ul className="flex flex-col items-center md:items-end space-y-2 min-w-[250px]">
            <li>
              <a href="#home" className="hover:text-blue-400 text-xl text-ft">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 text-xl text-ft">About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400 text-xl text-ft">Skills</a>
            </li>
            <li>
              <a href="#certificates" className="hover:text-blue-400 text-xl text-ft">Certificates</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 text-xl text-ft">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 text-xl text-ft">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Garis Pemisah */}
      <hr className="border-t border-gray-500 my-6" />

      {/* Text Copyright */}
      <div className="text-center text-copy">
        <p className="text-gray-400">
          &copy; Copyright 2024 MyPortfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
