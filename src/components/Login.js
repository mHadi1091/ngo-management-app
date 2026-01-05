import React, { useState } from 'react';
import { Users, Lock } from 'lucide-react';

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const users = [
    { username: 'admin', password: 'admin123', role: 'Administrator' },
    // { username: 'manager', password: 'manager123', role: 'Manager' },
    // { username: 'staff', password: 'staff123', role: 'Staff' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(u => u.username === credentials.username && u.password === credentials.password);
    
    if (user) {
      onLogin(user);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Users size={32} className="text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800">NGO Management</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition flex items-center justify-center"
          >
            <Lock size={20} className="mr-2" />
            Sign In
          </button>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <p className="text-sm text-gray-600 font-medium mb-2">Demo Accounts:</p>
          <div className="text-xs text-gray-500 space-y-1">
            <div>admin / admin123 (Administrator)</div>
            {/* <div>manager / manager123 (Manager)</div>
            <div>staff / staff123 (Staff)</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;