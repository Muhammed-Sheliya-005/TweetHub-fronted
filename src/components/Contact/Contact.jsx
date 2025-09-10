// export default function Contact() {
//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 text-gray-900 px-6 py-12">
      
//       <div className="max-w-4xl w-full space-y-10">
//         {/* Heading */}
//         <div className="text-center space-y-4">
//           <h1 className="text-6xl font-extrabold text-blue-700">
//             Contact <span className="text-cyan-400">Us</span>
//           </h1>
//           <p className="text-blue-800 max-w-2xl mx-auto">
//             Have feedback, questions, or ideas? We’d love to hear from you.  
//             Fill out the form below or reach out directly through our contact details.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-10">
//           {/* Contact Form */}
//           <form className="bg-white/40 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-6">
//             <div>
//               <label className="block text-left mb-2 text-blue-900 font-medium">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//               />
//             </div>

//             <div>
//               <label className="block text-left mb-2 text-blue-900 font-medium">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//               />
//             </div>

//             <div>
//               <label className="block text-left mb-2 text-blue-900 font-medium">
//                 Message
//               </label>
//               <textarea
//                 rows={4}
//                 placeholder="Write your message..."
//                 className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full px-6 py-3 bg-cyan-400 text-blue-900 font-semibold rounded-lg hover:bg-cyan-300 transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>

//           {/* Extra Info */}
//           <div className="flex flex-col justify-center bg-white/40 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-6">
//             <h2 className="text-2xl font-semibold text-cyan-400">Other Ways to Reach Us</h2>
//             <p className="text-blue-900">
//               📧 <span className="font-medium">Email:</span> support@sheliya.com
//             </p>
//             <p className="text-blue-900">
//               📍 <span className="font-medium">Address:</span> 123 Minimalist Street, Text City
//             </p>
//             <p className="text-blue-900">
//               ☎️ <span className="font-medium">Phone:</span> +91 98765 43210
//             </p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-sky-200 to-white text-gray-900 px-6 py-12">
      
      <div className="max-w-4xl w-full space-y-10">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold text-blue-700">
            Contact <span className="text-cyan-400">Us</span>
          </h1>
          <p className="text-blue-800 max-w-2xl mx-auto">
            Have feedback, questions, or ideas? We’d love to hear from you.  
            Fill out the form below or reach out directly through our contact details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-6">
            <div>
              <label className="block text-left mb-2 text-blue-900 font-medium">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-left mb-2 text-blue-900 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-left mb-2 text-blue-900 font-medium">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-cyan-400 text-blue-900 font-semibold rounded-lg hover:bg-cyan-300 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Extra Info */}
          <div className="flex flex-col justify-center bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-cyan-400">Other Ways to Reach Us</h2>
            <p className="text-blue-900">
              📧 <span className="font-medium">Email:</span> support@sheliya.com
            </p>
            <p className="text-blue-900">
              📍 <span className="font-medium">Address:</span> 123 Minimalist Street, Text City
            </p>
            <p className="text-blue-900">
              ☎️ <span className="font-medium">Phone:</span> +91 98765 43210
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
