
const Contact = () => (
  <>
    <main className="bg-gray-900 text-white p-8 min-h-screen">
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-8">Get In Touch</h2>
        <p className="text-lg text-gray-300 mb-8">
          I’d love to hear from you! Whether it's for a project collaboration, freelance opportunity, or just to connect.
        </p>

        {/* Contact Form */}
        <form className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col">
            <label className="text-left text-sm mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="flex flex-col">
            <label className="text-left text-sm mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-left text-sm mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-3 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>

        {/* Direct Email Section */}
        <div className="mt-10">
          <p className="text-gray-300 text-lg">
            Or reach me directly at:{" "}
            <a href="mailto:jabraheemkhan557@gmail.com" className="text-blue-400 hover:underline">
              jabraheemkhan557@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  </>
);

export default Contact;

