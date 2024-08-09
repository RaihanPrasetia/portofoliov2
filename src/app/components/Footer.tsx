"use client";

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white p-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Left */}
        <div className="footer-left text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-4xl font-bold">
            My<span className="text-blue-400">Portfolio</span>
          </h2>
        </div>

        {/* Footer Center */}
        <div className="footer-center text-center mb-6 md:mb-0">
          <h3 className="text-3xl font-semibold mb-4">Media Sosial</h3>
          <div className="social-icons flex justify-center md:justify-start space-x-10">
            <a href="https://www.facebook.com/share/1Ter3eECZctGeDX8/?mibextid=LQQJ4d " target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 text-2xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/prasetia_raihan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="http://linkedin.com/in/raihan-prasetia-4761832a2" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 text-2xl">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/raihanprasetia?igsh=MXkwd3I1ZXM4eGRmdQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Footer Right */}
        <div className="footer-right text-center md:text-right font-bold">
          <ul className="flex flex-col items-center md:items-end space-y-2">
            <li>
              <a href="#home" className="hover:text-blue-400 text-xl">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 text-xl">About</a>
            </li>
            <li>
              <a href="#certificates" className="hover:text-blue-400 text-xl">Certificates</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 text-xl">Projects</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400 text-xl">Skills</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 text-xl">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
