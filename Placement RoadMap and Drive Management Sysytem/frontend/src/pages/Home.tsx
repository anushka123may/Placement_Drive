import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code, Users, UserCheck } from 'lucide-react';
import ProfileSetupModal from '../components/ProfileSetupModal';

const Home = () => {
  const [showProfileSetup, setShowProfileSetup] = useState(false);
  const [hasCompletedProfile, setHasCompletedProfile] = useState(false);

  useEffect(() => {
    const hasCompleted = localStorage.getItem('profileSetupComplete');
    setHasCompletedProfile(!!hasCompleted);

    const token = localStorage.getItem('supabase.auth.token');
    if (token && !hasCompleted) {
      setShowProfileSetup(true);
    }
  }, []);

  const handleProfileSetupComplete = () => {
    setShowProfileSetup(false);
    setHasCompletedProfile(true);
    localStorage.setItem('profileSetupComplete', 'true');
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Hero Section */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Ace Your Campus Placements!
            </h1>
            <p className="mt-4 text-xl text-indigo-100">
              Your one-stop platform for placement preparation
            </p>
            <div className="mt-8">
              <Link
                to="/login"
                className="inline-block bg-white py-3 px-8 rounded-full font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Technical Skills</h3>
            <p className="mt-2 text-gray-600">
              Master programming, DSA, and web development with structured learning paths.
            </p>
            <Link
              to="/skills/technical"
              className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
            >
              Learn more →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Practice Problems</h3>
            <p className="mt-2 text-gray-600">
              Sharpen your skills with curated practice problems and mock tests.
            </p>
            <Link
              to="/practice"
              className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
            >
              Start practicing →
            </Link>
          </div>

           <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <UserCheck className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Mock Interviews</h3>
            <p className="mt-2 text-gray-600">
              Simulate interview scenarios and practice your responses.
            </p>
            <Link
              to="/mock-interviews"
              className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
            >
              Start mock interview →
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Placement Drives</h3>
            <p className="mt-2 text-gray-600">
              Stay updated with upcoming placement drives and company-specific preparation.
            </p>
            <Link
              to="/placement-drives"
              className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
            >
              View drives →
            </Link>
          </div>
        </div>
      </div>
      {showProfileSetup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ProfileSetupModal onComplete={handleProfileSetupComplete} />
        </div>
      )}
    </div>
  );
};

export default Home;


