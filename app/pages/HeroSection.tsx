import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center px-8 py-16 space-y-8 md:space-y-0 bg-yellow-50">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-bold text-yellow-700">HONEY BEE</h1>
          <p className="my-4 text-gray-700 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full text-lg mt-4 transition-all duration-300">
            View More
          </button>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/honeyJar.png"
            width={400}  /* Adjusted for emphasis */
            height={300}
            alt="Honey Jar"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;


