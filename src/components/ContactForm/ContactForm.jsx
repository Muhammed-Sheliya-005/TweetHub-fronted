"use client";

import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); 
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("⚠️ Please fill all fields.");
      return false;
    }
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setStatus("⚠️ Please enter a valid email.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) return;

    setLoading(true);
    try {
      const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";
      const res = await axios.post(`${base}/api/contact`, formData, { timeout: 10000 });
      if (res?.data?.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error("Contact error:", err);
      setStatus("❌ Failed to send message. Check your backend or CORS.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100 w-full max-w-lg"
    >
      <h2 className="text-2xl font-bold text-cyan-500 text-center mb-4">
        Send us a Message
      </h2>

      {/* Name */}
      <div>
        <label className="block mb-2 text-blue-900 font-medium">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 text-blue-900 font-medium">Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 text-blue-900 font-medium">Message</label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message..."
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full px-6 py-3 rounded-lg text-white font-semibold shadow-md transition-all duration-300 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400"
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {/* Status Message */}
      {status && (
        <p
          className={`mt-3 text-center font-medium ${
            status.includes("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
