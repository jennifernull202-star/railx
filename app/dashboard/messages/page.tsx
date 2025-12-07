"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MessagesInbox() {
  const [threads, setThreads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchThreads() {
      try {
        const res = await fetch("/api/messages/inbox");
        const data = await res.json();
        setThreads(data.threads || []);
      } catch (error) {
        console.error("Failed to fetch threads:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchThreads();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600">Loading messages...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-railBlue">Messages</h1>
        <p className="text-gray-600 mt-2">Manage your conversations with buyers and sellers.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        {threads.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-6xl mb-4">💬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No messages yet</h3>
            <p className="text-gray-600">
              Messages from buyers and inquiries will appear here.
            </p>
          </div>
        ) : (
          <div>
            {threads.map((thread) => (
              <Link
                key={thread._id}
                href={`/dashboard/messages/${thread._id}`}
                className="block p-6 border-b last:border-b-0 hover:bg-gray-50 transition"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 mb-1">
                      {thread.lastMessage || "No messages yet"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(thread.updatedAt).toLocaleString()}
                    </p>
                  </div>
                  {thread.unread && (
                    <span className="ml-4 w-2.5 h-2.5 bg-railBlue rounded-full"></span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
