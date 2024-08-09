"use client";
import '../assets/css/Contact.css';


export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container mx-auto p-6">
        <h2 className="text-4xl font-bold text-center pt-12 pb-6 text-tf"><i className="fa-solid fa-envelope mr-3 text-yellow-500"></i>Contact Me</h2>
        <div className="bg-grey-100 rounded-md px-8 pb-8 item">
          <form className="flex flex-col gap-6">
            {/* Flex Container */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left Column */}
              <div className="flex-1">
                {/* Name */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col mb-4 dm:mb-0">
                  <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm "
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1">
                {/* Subject */}
                <div className="flex flex-col mb-4 dm:mt-0">
                  <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Subject of Your Message"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col mb-4">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                className="bg-gradient-to-l from-blue-500 to-black text-white py-1.5 px-6 rounded-lg shadow-sm  hover:from-blue-700 hover:to-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-lg font-bold text-send"
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
