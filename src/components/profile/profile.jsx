"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const [tweets, setTweets] = useState([]); // always array
  const [newTweet, setNewTweet] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // ✅ Fetch logged-in user tweets
  const fetchMyTweets = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/api/tweets/mytweets`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      
      setTweets(res.data?.tweets || []);
    } catch (err) {
      console.error("Error fetching tweets:", err);
      setTweets([]);
    }
  };

  useEffect(() => {
    fetchMyTweets();
  }, []);

  // ✅ Create new tweet
  const handleCreate = async () => {
    if (!newTweet.trim()) return;
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${API_URL}/api/tweets/create`,
        { content: newTweet },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTweets([res.data.tweet, ...tweets]);
      setNewTweet("");
    } catch (err) {
      console.error("Error creating tweet:", err.response?.data || err.message);
    }
  };

  // ✅ Delete tweet
  const deleteTweet = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/api/tweets/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTweets((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Error deleting tweet:", err);
    }
  };

  // ✅ Update tweet
  const updateTweet = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${API_URL}/api/tweets/update/${id}`,
        { content: editContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTweets((prev) =>
        prev.map((t) => (t._id === id ? { ...t, content: editContent } : t))
      );
      setEditingId(null);
      setEditContent("");
    } catch (err) {
      console.error("Error updating tweet:", err);
    }
  };

  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center p-6">
  <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6">
    <h1 className="text-4xl font-extrabold mb-6 text-center text-green-900 drop-shadow-lg">
      My Profile
    </h1>

    {/* ✅ New Tweet Box */}
    <div className="bg-white/80 backdrop-blur-sm shadow rounded-2xl p-4 mb-6">
      <textarea
        className="w-full border rounded-xl p-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
        rows={3}
        placeholder="What's happening?"
        value={newTweet}
        onChange={(e) => setNewTweet(e.target.value)}
      />
      <button
        onClick={handleCreate}
        className="mt-2 bg-green-600 text-white font-semibold px-4 py-2 rounded-xl hover:bg-green-700 transition"
      >
        Tweet
      </button>
    </div>

    {/* Tweets List */}
    <div className="space-y-4">
      {Array.isArray(tweets) && tweets.length === 0 ? (
        <p className="text-gray-700 text-center">No tweets yet...</p>
      ) : (
        tweets.map((tweet) => (
              <div
                key={tweet._id}
                className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-4 flex flex-col 
                           transition hover:scale-[1.02] hover:shadow-2xl"
              >
            {editingId === tweet._id ? (
              <>
                <textarea
                  className="w-full border rounded-lg p-2"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <div className="flex gap-2 mt-2">
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                    onClick={() => updateTweet(tweet._id)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-900">{tweet.content}</p>
                <div className="flex gap-2 mt-3">
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                    onClick={() => {
                      setEditingId(tweet._id);
                      setEditContent(tweet.content);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => deleteTweet(tweet._id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  </div>
</main>
  );
}
