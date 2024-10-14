
const About = () => (
  <>
    <main className="bg-gray-900 text-white p-8 min-h-screen">
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-400 mb-6">About Me</h2>
        <p className="text-lg text-gray-300 mb-4">
          Hi, I am <span className="font-bold text-white">Muhammad Ibrahim</span>, a developer skilled in HTML, Tailwind CSS, TypeScript, and Next.js.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          I specialize in creating responsive web applications and have hands-on experience in building beautiful, user-friendly websites. With a strong passion for coding, I constantly learn new technologies to improve my skills and build cutting-edge projects.
        </p>

        
        <h3 className="text-3xl font-bold text-purple-500 mb-4">My Skills</h3>
        <div className="flex justify-center space-x-4 mb-8">
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <span className="text-xl font-bold">HTML</span>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <span className="text-xl font-bold">Tailwind CSS</span>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <span className="text-xl font-bold">TypeScript</span>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <span className="text-xl font-bold">Next.js</span>
          </div>
        </div>

       
        <div className="mt-8">
          <a
            href="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  </>
);

export default About;
