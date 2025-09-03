export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white px-6">
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
        Welcome to <span className="text-yellow-400">TextSpace</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8">
        A simple, distraction-free text-based platform where ideas come alive.  
        Share your thoughts, read meaningful content, and connect with others.
      </p>
      <div className="flex gap-4">
        <a
          href="/signup"
          className="px-6 py-3 rounded-lg bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-300 transition"
        >
          Get Started
        </a>
        <a
          href="/about"
          className="px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
