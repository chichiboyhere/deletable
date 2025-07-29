"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LoaderSpinner from "./LoaderSpinner";
import { handleApiError } from "@/lib/handleApiError";
function CommentForm({ postId }: { postId: string }) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch(`/api/blog/${postId}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, comment }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to post comment");
      }

      setSuccess("Comment posted!");
      setName("");
      setEmail("");
      setComment("");
      router.refresh(); // Refresh page to re-fetch blog data
    } catch (error) {
      return handleApiError(error, "POST /api/blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 border-t pt-6">
      <h3 className="text-lg font-semibold mb-4 text-blue-900 dark:text-white">
        Leave a Comment
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
          required
        />
        <textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border p-2 rounded h-24 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
          required
        />
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 dark:bg-blue-400"
        >
          {loading && <LoaderSpinner size={16} />}
          {loading ? "Posting..." : "Post Comment"}
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
