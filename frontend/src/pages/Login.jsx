import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-amber-100 py-16 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-6">Login</h2>
        
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-amber-800 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-amber-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-amber-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-amber-800 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-amber-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-amber-500"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition"
          >
            Log In
          </button>
        </form>

        {/* Links */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-amber-700 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
