"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


export default function Skills() {
  const skills = [
    { id: 1, title: 'Mysql', image: '/assets/images/logos/mysql.png' },
    { id: 2, title: 'PHP', image: '/assets/images/logos/php.png' },
    { id: 3, title: 'HTML', image: '/assets/images/logos/html.png' },
    { id: 4, title: 'Javascript', image: '/assets/images/logos/js.png' },
    { id: 5, title: 'CSS', image: '/assets/images/logos/logocss.png' },
    { id: 6, title: 'Github', image: '/assets/images/logos/github.png' },
    { id: 7, title: 'Dart', image: '/assets/images/logos/dart.png' },
    { id: 8, title: 'Flutter', image: '/assets/images/logos/flutter.png' },
    { id: 9, title: 'Laravel', image: '/assets/images/logos/laravel.png' },
    { id: 10, title: 'CodeIgniter', image: '/assets/images/logos/codei.png' },
    { id: 11, title: 'React.js', image: '/assets/images/logos/react.png' },
    { id: 12, title: 'Next.Js', image: '/assets/images/logos/logonextjs.png' },
    { id: 13, title: 'Node.Js', image: '/assets/images/logos/nodejs2.png' },
    { id: 14, title: 'Bootstrap', image: '/assets/images/logos/bootstrap.png' },
    { id: 15, title: 'Tailwind', image: '/assets/images/logos/tailwind.png' },
    { id: 16, title: 'Golang', image: '/assets/images/logos/golang.png' },
  ];

  const [visibleSkills, setVisibleSkills] = useState(new Array(skills.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      
      // Add a null check to avoid errors
      if (!section) return; // Exit if section is not found

      const sectionPosition = section.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      // Check if the section is in the viewport
      if (sectionPosition < viewportHeight && sectionPosition > 0) {
        skills.forEach((_, index) => {
          // Delay the visibility change for each skill item
          setTimeout(() => {
            setVisibleSkills((prev) => {
              const updated = [...prev];
              updated[index] = true; // Set the current index to true
              return updated; // Return the updated array
            });
          }, index * 100); // 100ms delay between each skill
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4 pt-20 pb-6">
        <h2 className="text-4xl font-bold text-center text-white text-cert text-tf">
          <i className="fa-solid fa-code-branch mr-3 text-yellow-500"></i>Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-20">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`item ${visibleSkills[index] ? 'visible' : ''} bg-gradient-to-t from-slate-600 to-grey custom-white-shadow rounded-lg p-6 flex flex-col items-center justify-center min-h-[250px]`}
            >
              <div className="flex-grow flex items-center justify-center">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={150}
                  height={150}
                  className="object-contain"
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
