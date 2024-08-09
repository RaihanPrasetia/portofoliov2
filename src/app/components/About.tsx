import Image from 'next/image';
import foto from '../assets/images/logoUnama.png';
import '../assets/css/App.css';
import '../assets/css/About.css';


export default function About() {
  return (
    <section id="about" className="section p-0">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        {/* Teks di sebelah kiri */}
        <div className="w-full md:w-1/2 px-4 pb-4 text-center item responsive-image">
          <Image 
            src={foto}
            alt="Profile"
            className="mx-auto"
                width={340}
                height={340}
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
        <h1 className="text-4xl font-bold my-4 text-get">About Me</h1>
          <p className="text-lg text-justify text-center pr-4 item">
              I am Raihan Prasetia, an active student in the 6th semester of the Informatics Engineering study program from Dinamika Bangsa University Jambi City. I have an interest in IT and technology, and I am eager to develop my skills, especially in Web Development and Mobile Development.
          </p>
        </div>
        {/* Gambar di sebelah kanan */}
      </div>
    </section>
  );
}