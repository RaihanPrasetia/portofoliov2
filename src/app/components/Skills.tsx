"use client";
import Image from "next/image";
import logo1 from '../assets/images/logos/mysql.png';
import logo2 from '../assets/images/logos/php.png';
import logo3 from '../assets/images/logos/laravel.png';
import logo4 from '../assets/images/logos/js.png';
import logo5 from '../assets/images/logos/react.png';
import logo6 from '../assets/images/logos/nextjs.png';



export default function Skills() {
  const skills = [
    { id: 1, title: 'Mysql', image: logo1 },
    { id: 2, title: 'PHP', image: logo2 },
    { id: 3, title: 'Laravel', image: logo3 },
    { id: 4, title: 'Javascript', image: logo4 },
    { id: 5, title: 'React.js', image: logo5 },
    { id: 6, title: 'Next.Js', image: logo6 },
    // Tambahkan skill lainnya di sini
  ];

  return (
  <section id="skills" className="section">
      <div className="container mx-auto px-4 pt-20 pb-6">
        <h2 className="text-4xl font-bold text-center text-white text-cert text-tf"><i className="fa-solid fa-code-branch mr-3 text-yellow-500"></i>Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-6">
          {skills.map(skill => (
            <div key={skill.id} className="bg-gradient-to-r from-blue-900 to-black shadow-lg rounded-lg p-6 flex flex-col items-center justify-center min-h-[250px]  item">
              <div className="flex-grow flex items-center justify-center">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={150}
                  height={150}
                  className="object-contain "
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white text-center text-i">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
