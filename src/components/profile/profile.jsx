"use client";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const [tweets, setTweets] = useState([]); // always array
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

      // ensure fallback to empty array
      setTweets(res.data?.tweets || []);
    } catch (err) {
      console.error("Error fetching tweets:", err);
      setTweets([]); // fallback to empty list
    }
  };

  useEffect(() => {
    fetchMyTweets();
  }, []);

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
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>

        {/* Tweets List */}
        <div className="space-y-4">
          {Array.isArray(tweets) && tweets.length === 0 ? (
            <p className="text-gray-600">No tweets yet...</p>
          ) : (
            tweets.map((tweet) => (
              <div
                key={tweet._id}
                className="bg-white shadow rounded-xl p-4 flex flex-col"
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
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => updateTweet(tweet._id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                        onClick={() => setEditingId(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-gray-800">{tweet.content}</p>
                    <div className="flex gap-2 mt-3">
                      <button
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => {
                          setEditingId(tweet._id);
                          setEditContent(tweet.content);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
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
