import React from 'react';

export default function ContactSection() {
  return (
    <section className="relative bg-[#F7F3F0] py-20 px-8 lg:px-32">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Contact Us
      </h2>

      {/* Contact Information & Form Container */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        {/* Contact Information */}
        <div className="flex flex-col items-start lg:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
          <p className="text-gray-600">
            We'd love to hear from you! Please fill out the form or contact us
            directly.
          </p>
          <div className="space-y-2">
            <p className="text-lg text-gray-800 font-medium">
              Email: <span className="text-gray-600">info@honeyshop.com</span>
            </p>
            <p className="text-lg text-gray-800 font-medium">
              Phone: <span className="text-gray-600">+123 456 7890</span>
            </p>
            <p className="text-lg text-gray-800 font-medium">
              Address: <span className="text-gray-600">123 Honey St, Sweet City</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-3 rounded-md font-semibold hover:bg-yellow-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
