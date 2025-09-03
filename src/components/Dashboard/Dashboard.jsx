"use client";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Dashboard() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL;


//   // ✅ Axios instance with auth token
//   // const api = axios.create({
//   //   baseURL: "http://localhost:5000/api/tweets", // adjust to your backend
//   //   headers: {
//   //     Authorization: `Bearer ${localStorage.getItem("token")}`, // token from login
//   //   },
//   // });

  // // ✅ Fetch my tweets
  // const fetchTweets = async () => {
  //   try {
      
  //     const res = await axios.get(`${API_URL}/api/tweets`);
  //     setTweets(res.data);
  //   } catch (err) {
  //     console.error("Error fetching tweets:", err);
  //   }
  // };

  const fetchTweets = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("⚠️ No token found. Please login first.");
      return;
    }

    const res = await axios.get(`${API_URL}/api/tweets`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setTweets(res.data);
  } catch (err) {
    console.error(
      "Error fetching tweets:",
      err.response?.data || err.message
    );
  }
};

  // ✅ Create tweet
  const handleCreate = async () => {
  if (!newTweet.trim()) return;

  try {
    const token = localStorage.getItem("token"); // ✅ token lo
    const res = await axios.post(
      `${API_URL}/api/tweets/create`,
      { content: newTweet },
      {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ bhejo
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
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `${API_URL}/api/tweets/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ bhejo
          },
        }
      );
      setTweets(tweets.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Error deleting tweet:", err);
    }
  };

  // ✅ Update tweet
  const handleUpdate = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${API_URL}/api/tweets/update/${id}`,
        { content: editContent },
        {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ bhejo
        },
      }
      );
      setTweets(
        tweets.map((t) => (t._id === id ? res.data.tweet : t))
      );
      setEditingId(null);
      setEditContent("");
    } catch (err) {
      console.error("Error updating tweet:", err);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* New Tweet Box */}
      <div className="bg-white shadow rounded-2xl p-4 mb-6">
        <textarea
          className="w-full border rounded-xl p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="What's happening?"
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
        />
        <button
          onClick={handleCreate}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
        >
          Tweet
        </button>
      </div>

      {/* Tweets List */}
      <div className="space-y-4">
        {tweets.map((tweet) => (
          <div
            key={tweet._id}
            className="bg-white shadow rounded-2xl p-4 flex flex-col"
          >
          <p><strong>{tweet.user?.username}</strong></p>   {/* ✅ Username show hoga */}
  
            {editingId === tweet._id ? (
              <>
                <textarea
                  className="w-full border rounded-xl p-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows={2}
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={() => handleUpdate(tweet._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-xl hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-300 px-3 py-1 rounded-xl hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-800">{tweet.content}</p>
                <div className="mt-3 flex gap-3 text-sm">
                  <button
                    onClick={() => {
                      setEditingId(tweet._id);
                      setEditContent(tweet.content);
                    }}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(tweet._id)}
                    className="text-red-500 hover:underline"
                  >
                    
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

