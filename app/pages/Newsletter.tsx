import React from 'react';

const Newsletter = () => {
  return (
    <div>
      {/* Newsletter Section */}
      <section className="py-16 px-8 bg-yellow-100 text-center">
        <h2 className="text-4xl font-bold mb-4 text-yellow-800">NEWSLETTER SIGNUP</h2>
        <p className="mb-8 text-lg text-gray-700">
          Sign up to receive updates about our honey products and promotions.
        </p>
        
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 w-full sm:w-auto border border-gray-400 rounded-md focus:outline-none focus:border-yellow-500 transition-all duration-200"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300">
            Subscribe
          </button>
        </form>
      </section>

      {/* News Section */}
      <section className="py-12 px-8 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Latest News</h2>
        
        <div className="max-w-xl mx-auto">
          <div className="border-b border-gray-300 py-4">
            <div className="flex justify-between">
              <span className="text-gray-500 font-medium">1. October 20, 2024</span>
              <p className="text-gray-800">Sweet Honey Packs Fresh Raw and Unfiltered</p>
            </div>
          </div>
          <div className="border-b border-gray-300 py-4">
            <div className="flex justify-between">
              <span className="text-gray-500 font-medium">2. October 15, 2024</span>
              <p className="text-gray-800">Raw Bee Honey Products And Beekeeping</p>
            </div>
          </div>
          <div className="border-b border-gray-300 py-4">
            <div className="flex justify-between">
              <span className="text-gray-500 font-medium">3. October 10, 2024</span>
              <p className="text-gray-800">Bees – Honey Bees and Beekeeping Online Guide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
