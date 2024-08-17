"use client";

import Image from "next/image";
import logo1 from '../assets/images/logos/mysql.png';
import logo2 from '../assets/images/logos/php.png';
import logo3 from '../assets/images/logos/laravel.png';
import logo4 from '../assets/images/logos/js.png';
import logo5 from '../assets/images/logos/react.png';
import logo6 from '../assets/images/logos/logonextjs.png';
import logo7 from '../assets/images/logos/logocss.png';
import logo8 from '../assets/images/logos/bootstrap.png';
import logo9 from '../assets/images/logos/tailwind.png';
import logo10 from '../assets/images/logos/dart.png';
import logo11 from '../assets/images/logos/flutter.png';
import logo12 from '../assets/images/logos/golang.png';
import logo13 from '../assets/images/logos/github.png';
import logo14 from '../assets/images/logos/codei.png';
import logo15 from '../assets/images/logos/html.png';
import logo16 from '../assets/images/logos/nodejs.png';



export default function Skills() {
  const skills = [
    { id: 1, title: 'Mysql', image: logo1 },
    { id: 2, title: 'PHP', image: logo2 },
    { id: 3, title: 'html', image: logo15 },
    { id: 4, title: 'Javascript', image: logo4 },
    { id: 5, title: 'CSS', image: logo7 },
    { id: 6, title: 'Github', image: logo13 },
    { id: 7, title: 'Dart', image: logo10 },
    { id: 8, title: 'Flutter', image: logo11 },
    { id: 9, title: 'Laravel', image: logo3 },
    { id: 10, title: 'CodeIgniter', image: logo14 },
    { id: 11, title: 'React.js', image: logo5 },
    { id: 12, title: 'Next.Js', image: logo6 },
    { id: 13, title: 'Node.Js', image: logo16 },
    { id: 14, title: 'Bootstrap', image: logo8 },
    { id: 15, title: 'Tailwind', image: logo9 },
    { id: 16, title: 'Golang', image: logo12 },
    // Tambahkan skill lainnya di sini
  ];

  return (
  <section id="skills" className="section">
      <div className="container mx-auto px-4 pt-20 pb-6">
        <h2 className="text-4xl font-bold text-center text-white text-cert text-tf"><i className="fa-solid fa-code-branch mr-3 text-yellow-500"></i>Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-20">
          {skills.map(skill => (
            <div key={skill.id} className="bg-gradient-to-t from-slate-600 to-grey custom-white-shadow rounded-lg p-6 flex flex-col items-center justify-center min-h-[250px] item">
              <div className="flex-grow flex items-center justify-center">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={150}
                  height={150}
                  className="object-contain "
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white text-center text-i ">{skill.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
