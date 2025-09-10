export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900 px-6 py-16 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>

      <div className="relative max-w-5xl text-center space-y-10">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-6 text-wight-500 drop-shadow-md">
          About <span className="text-wight-400">Our Platform</span>
        </h1>

        {/* Long, unique paragraph */}
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-purple-500">TweetHub</span>, a new kind of social media platform built entirely around the 
          <span className="font-semibold text-pink-500"> power of words</span>. In a digital world filled with endless images, videos, and 
          distractions, we bring the focus back to what truly matters — clear, meaningful, and expressive text. 
          This is a space designed for thinkers, creators, learners, and everyday people who want to share 
          their thoughts without the clutter of unnecessary features.  
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          Our platform is built on the principle of <span className="italic text-purple-500">simplicity with impact</span>. Every post you create is 
          about expressing your ideas, connecting through words, and engaging in conversations that matter. 
          We have removed all the noise so that your voice stands out. Whether you want to share knowledge, 
          opinions, updates, or just simple expressions, this platform provides a clean and distraction-free 
          environment for it.  
        </p>

        <p className="text-md text-gray-500 leading-relaxed">
          <span className="font-semibold">Textly</span> is not just another app — it’s an attempt to 
          redefine how online communication should feel. By keeping everything text-based, we highlight clarity, 
          creativity, and authenticity. Our vision is to make this a go-to platform where words build connections, 
          inspire ideas, and create meaningful digital interactions. 🚀
        </p>
      </div>
    </main>
  );
}
