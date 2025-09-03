// const About = async () => {
//     return <h1>Hello About</h1>;
// };

// export default About;
   
export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-200 via-orange-100 to-yellow-100 text-gray-900 px-6 py-12">
      
      <div className="max-w-4xl text-center space-y-6">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-6 text-orange-700">
          About <span className="text-yellow-400">Simple Text-Based Platform</span>
        </h1>

        {/* Paragraphs */}
        <p className="text-lg text-gray-800 leading-relaxed">
          Welcome to <span className="font-semibold text-yellow-600">Chatting App</span>,  
          a simple text-based platform designed to keep things minimal yet powerful.  
          Our mission is to create a clean and distraction-free space where ideas,  
          stories, and knowledge can be shared easily.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          We believe that sometimes <span className="italic text-yellow-500">less is more</span>.  
          By focusing on text, we aim to highlight the importance of clarity,  
          simplicity, and meaningful content — without unnecessary noise.
        </p>

        <p className="text-md text-gray-600 leading-relaxed">
          This project is continuously evolving, and our vision is to make it a  
          go-to place for people who value minimalism in technology. 🚀
        </p>
      </div>
    </main>
  );
}
