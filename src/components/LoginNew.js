import React, { useState, useEffect } from 'react';
import { Users, Lock } from 'lucide-react';

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const users = [
    { username: 'admin', password: 'admin123', role: 'Administrator' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* 3D Interactive Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 animate-pulse transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(147, 197, 253, 0.1) 50%, transparent 100%)',
            left: `${mousePosition.x * 0.02}%`,
            top: `${mousePosition.y * 0.02}%`,
            transform: `translate(-50%, -50%) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full blur-2xl opacity-20 animate-pulse delay-500 transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, rgba(196, 181, 253, 0.1) 50%, transparent 100%)',
            right: `${(100 - mousePosition.x) * 0.03}%`,
            bottom: `${(100 - mousePosition.y) * 0.03}%`,
            transform: `translate(50%, 50%) rotateX(${-mousePosition.y * 0.1}deg) rotateY(${-mousePosition.x * 0.1}deg)`,
          }}
        />
        {/* Floating 3D Elements */}
        {/* <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 rounded-full opacity-40 animate-bounce bg-white"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
                transform: `translateZ(${i * 10}px) rotateY(${mousePosition.x * 0.05}deg)`,
              }}
            />
          ))}
        </div> */}
      </div>
      
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-md relative z-10 border border-white/20 transition-all duration-300 hover:scale-105">
        <div className="text-center mb-8">
          <div 
            className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg transform hover:scale-110 transition-transform duration-300"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg) scale(1.1)`,
            }}
          >
            <Users size={36} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            NGO Management
          </h1>
          <p className="text-slate-600 mt-2">
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">
              Username
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm hover:bg-white/90"
              placeholder="Enter username"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">
              Password
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm hover:bg-white/90"
              placeholder="Enter password"
              required
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm backdrop-blur-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center font-semibold hover:scale-105 transform"
          >
            <Lock size={20} className="mr-3" />
            Sign In
          </button>
        </form>

        <div className="mt-8 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
          <p className="text-sm text-slate-700 font-semibold mb-3">
            Demo Accounts:
          </p>
          <div className="text-xs space-y-2">
            <div className="p-2 bg-white/60 rounded-lg text-slate-600">
              admin / admin123 (Administrator)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;