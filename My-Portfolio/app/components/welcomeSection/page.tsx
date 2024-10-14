
const WelcomeSection = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-center py-10">
        <h1 className="text-5xl text-white font-bold animate-fade-in-down">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-200 mt-4 max-w-2xl mx-auto animate-fade-in-up">
          Explore my projects and skills in web development and SEO
        </p>
      </section>

      <div className="container mx-auto py-10 text-center">
        
        <h1 className="text-5xl font-extrabold text-blue-400 mb-3 animate-fade-in-right">
          Hi, I'm Muhammad Ibrahim
        </h1>
        <p className="text-lg text-gray-300 animate-fade-in-left">
          Web Developer | YouTube SEO Expert | Prompt Engineer
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
