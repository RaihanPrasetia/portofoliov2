"use client";

import { useState } from 'react';
import Image from "next/image";
import '../assets/css/Project.css';

import logo1 from '../assets/images/logos/mysql.png';
// import logo2 from '../assets/images/logos/php.png';
import logo3 from '../assets/images/logos/laravel.png';
import logo4 from '../assets/images/logos/bootstrap.png';
import image1 from '../assets/images/sentrawarga.png';
// import image2 from '../assets/images/Certificate2.jpg';

export default function Projects() {

  const [showFullDescription, setShowFullDescription] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Sentra Warga",
      deskripsi: "Sentra Warga adalah Platform e-commerce yang bertujuan untuk memberikan pengalaman berbelanja digital bagi masyarakat yang inovatif dan menarik untuk dikunjungi, website Sentra warga dikhusukan untuk penjual dalam mengelolah pesanan, produk, stok barang, dan profile toko, dengan Design yang menarik dan user friendly",
      logos: [{ src: logo1, name: "MySQL" }, { src: logo3, name: "Laravel" }, { src: logo4, name: "Bootstrap" }],
      image: image1,
      website: "https://sentrawarga.com"
    }
  ];

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section id="projects" className="section py-20">
      <div className="container mx-auto px-4 pt-20 pb-6">
        <h2 className="text-4xl font-bold text-center text-white text-cert text-tf pt-4">
          <i className="fa-solid fa-briefcase mr-3 text-yellow-500"></i>
          Project
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-16 item">
          {projects.map(project => (
            <div key={project.id} className="bg-gradient-to-t from-slate-600 to-grey custom-white-shadow rounded-lg p-6 flex flex-col justify-between min-h-[400px]">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                min-height={500}
                className="object-contain mb-4 mx-auto"
              />
              <h3 className="text-3xl font-semibold text-white text-center mb-4 text-tf">
                {project.title}
              </h3>
              <div className="mb-4 text-left flex ">
                {project.logos.map((logo, index) => (
                  <div key={index} className="flex items-center space-x-2 mr-2 bg-gradient-to-l from-blue-800 to-slate-300 rounded-full px-2 py-1 custom-white-shadow">
                    <Image src={logo.src} alt={logo.name} width={20} height={10} className="size-logo"/>
                    <span className="text-white text-xs text-logo p-0">{logo.name}</span>
                  </div>
                ))}
              </div>
              <p className={`text-white mb-4 text-justify  ${showFullDescription ? '' : 'line-clamp-4'}`}>
                {project.deskripsi}
              </p>
              <button
                onClick={toggleDescription}
                className="text-yellow-500 font-semibold hover:underline mb-4 text-left text-ft"
              >
                {showFullDescription ? 'Tampilkan Lebih Sedikit' : 'Baca Selengkapnya'}
              </button>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-gradient-to-l from-blue-700 to-slate-700 text-white text-[10px] align-center text-center py-2 rounded-full hover:bg-blue-700 font-bold w-[140px]"
              >
                Kunjungi Website
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
