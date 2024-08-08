"use client";
import '../assets/css/App.css';


export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-6 ">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Contact Me</h2>
        <div className="bg-grey-100 rounded-md p-8 shadow-[0_35px_70px_-10px_rgba(0,0,0,0.3)] item">
          <h3 className="text-2xl font-semibold mb-6 text-start text-black">Get in Touch</h3>
          <form className="flex flex-col gap-6">
            {/* Flex Container */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Column */}
              <div className="flex-1">
                {/* Name */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1">
                {/* Subject */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Subject of Your Message"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Send Message Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white py-1.5 px-4 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm"
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
