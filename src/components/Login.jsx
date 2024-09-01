// Login.jsx
import React, { useState } from 'react';
import SignUpForm from './Signup'; // Import your Signup component

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to switch forms

  const handleSignUp = () => {
    setIsSignUp(true); // Show the SignUpForm
  };

  const handleLogin = () => {
    setIsSignUp(false); // Show the LoginForm
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative bg-gray-900 text-white p-12 rounded-lg shadow-lg max-w-md w-full h-[550px] ">
        {isSignUp ? (
          <SignUpForm onBack={handleLogin} /> // Pass back handler to SignUpForm
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
              >
                Continue
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">Or continue with</p>
              <div className="flex justify-center space-x-4 mt-4">
                <button className="p-2 bg-blue-600 text-white rounded-full">Facebook</button>
                <button className="p-2 bg-red-600 text-white rounded-full">Google</button>
                <button className="p-2 bg-gray-800 text-white rounded-full">X</button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Don't have an account?{' '}
                <button
                  onClick={handleSignUp}
                  className="text-blue-500 hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
