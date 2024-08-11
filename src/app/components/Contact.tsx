"use client";
import { useState } from 'react';
import '../assets/css/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  
  console.log('Form Data:', formData); // Log the form data

  try {
    const response = await fetch('http://localhost:8080/create/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Message sent successfully');
      setFormData({ name: '', email: '', phone_number: '', subject: '', message: '' });
    } else {
      console.error('Failed to send message');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


  return (
    <section id="contact" className="section">
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-bold text-center pt-12 text-tf">
          <i className="fa-solid fa-envelope mr-3 text-yellow-500"></i>Contact Me
        </h2>
        <div className="bg-grey-100 rounded-md px-8 py-12 item">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex flex-col mb-4">
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="phone_number" className="block text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    id="phone_number"
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                    placeholder="Your Phone Number"
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                    placeholder="Subject of Your Message"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-l from-blue-600 to-slate-700 text-white py-1.5 px-6 rounded-lg shadow-sm hover:from-blue-700 hover:to-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-bold text-send custom-white-shadow"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
