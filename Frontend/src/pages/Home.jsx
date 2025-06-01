import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to MERN Stack Application
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A full-stack application built with MongoDB, Express, React, and Node.js
        </p>
      </div>

      {!user && (
        <div className="flex justify-center space-x-4 mb-12">
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="bg-white text-indigo-600 px-6 py-3 rounded-md border border-indigo-600 hover:bg-indigo-50 transition-colors"
          >
            Register
          </Link>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Authentication</h2>
          <p className="text-gray-600">
            Secure user authentication with JWT tokens and role-based access control.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Profile Management</h2>
          <p className="text-gray-600">
            Update your profile information and manage your account settings.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Admin Features</h2>
          <p className="text-gray-600">
            Advanced admin panel for user management and system administration.
          </p>
        </div>
      </div>

      {user && (
        <div className="mt-12 text-center">
          <Link
            to="/dashboard"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Go to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home; 