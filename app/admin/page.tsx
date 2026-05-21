'use client';

import { useEffect, useState } from 'react';
import { Mail, Trash2, RefreshCw } from 'lucide-react';

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [adminSecret, setAdminSecret] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [secretInput, setSecretInput] = useState('');

  const handleAuth = () => {
    if (secretInput) {
      setIsAuthenticated(true);
      setAdminSecret(secretInput);
      fetchMessages(secretInput);
    } else {
      alert('Please enter admin secret');
    }
  };

  const fetchMessages = async (secret: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${secret}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(data.messages || []);
      } else {
        alert('Failed to fetch messages');
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
      alert('Error fetching messages');
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${adminSecret}`,
        },
      });

      if (response.ok) {
        setMessages(messages.filter((msg) => msg._id !== id));
        setSelectedMessage(null);
        alert('Message deleted');
      } else {
        alert('Failed to delete message');
      }
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-slate-800 p-8 rounded-lg shadow-xl max-w-md w-full border border-slate-700">
          <h1 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Mail className="w-6 h-6 text-blue-400" />
            Admin Access
          </h1>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Admin Secret
            </label>
            <input
              type="password"
              value={secretInput}
              onChange={(e) => setSecretInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAuth()}
              className="w-full px-4 py-2 bg-slate-700 text-white border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
              placeholder="Enter admin secret"
            />
            <button
              onClick={handleAuth}
              className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Access Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Mail className="w-8 h-6 text-blue-400" />
            <h1 className="text-3xl font-bold text-white">Messages Dashboard</h1>
          </div>
          <button
            onClick={() => fetchMessages(adminSecret)}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <p className="text-gray-400 text-sm">Total Messages</p>
            <p className="text-2xl font-bold text-white">{messages.length}</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <p className="text-gray-400 text-sm">Unread</p>
            <p className="text-2xl font-bold text-blue-400">{messages.filter((m) => !m.read).length}</p>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <p className="text-gray-400 text-sm">Read</p>
            <p className="text-2xl font-bold text-green-400">{messages.filter((m) => m.read).length}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-1 bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
            <div className="p-4 border-b border-slate-700">
              <h2 className="text-lg font-semibold text-white">Messages</h2>
            </div>
            <div className="divide-y divide-slate-700 max-h-[600px] overflow-y-auto">
              {messages.length === 0 ? (
                <p className="p-4 text-gray-400 text-sm">No messages yet</p>
              ) : (
                messages.map((msg) => (
                  <button
                    key={msg._id}
                    onClick={() => setSelectedMessage(msg)}
                    className={`w-full p-4 text-left hover:bg-slate-700 transition ${
                      selectedMessage?._id === msg._id ? 'bg-slate-700' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white truncate">{msg.name}</p>
                        <p className="text-sm text-gray-400 truncate">{msg.subject}</p>
                      </div>
                      {!msg.read && <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1" />}
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-2 bg-slate-800 rounded-lg border border-slate-700 p-6">
            {selectedMessage ? (
              <>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedMessage.subject}</h2>
                    <p className="text-gray-400 text-sm mt-1">From: {selectedMessage.name}</p>
                    <p className="text-gray-400 text-sm">{selectedMessage.email}</p>
                    <p className="text-gray-500 text-xs mt-2">
                      {new Date(selectedMessage.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteMessage(selectedMessage._id)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>

                <div className="bg-slate-700 p-4 rounded-lg">
                  <p className="text-white whitespace-pre-wrap break-words">{selectedMessage.message}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-700">
                  <a
                    href={`mailto:${selectedMessage.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <Mail className="w-4 h-4" />
                    Reply to {selectedMessage.name}
                  </a>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-96">
                <p className="text-gray-400">Select a message to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
