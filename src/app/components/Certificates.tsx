import Image from 'next/image';
import '../assets/css/Certificate.css';
import Certificate1 from '../assets/images/Certificate1.jpg';
import Certificate2 from '../assets/images/Certificate2.jpg';
import Certificate3 from '../assets/images/Certificate3.jpg';

const certificates = [
  { id: 1, title: 'Certificate Peserta - Vetencode', image: Certificate1 },
  { id: 2, title: 'Certificate MSIB 6 - Kampus Merdeka', image: Certificate2 },
  { id: 3, title: 'Pemprograman Web Dasar - Dicoding', image: Certificate3 },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section py-16 bg-gray-100">
      <div className="container mx-auto px-4 pt-20 pb-0">
        <h2 className="text-4xl font-bold text-center mb-8 text-white text-cert text-tf">
          <i className="fa-solid fa-certificate mr-3 text-yellow-500"></i>
            Certificates
        </h2>
        <div className="flex flex-wrap -mx-4 ">
          {certificates.map(certificate => (
            <div key={certificate.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8 ">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full bg-gradient-to-r from-blue-700 to-black item">
                <div className="p-4">
                  <h2 className="text-xl font-bold text-center text-white text-ft">{certificate.title}</h2>
                </div>
                <div className="flex justify-center items-center px-4 pb-4">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-auto object-cover rounded"
                    width={300}
                    height={150}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
