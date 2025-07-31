import React, { useState, useEffect } from 'react';
import { User, Book, Trophy, Clock, Briefcase, ChevronRight, BookOpen, Code, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import ProfileSetupModal from '../components/ProfileSetupModal';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: '',
    year: '',
    branch: '',
    gpa: '',
    skills: '',
    resume: '',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80',
    progress: {
      technicalSkills: 0,
      nonTechnicalSkills: 0,
      practiceProblems: 0,
      quizScore: 0,
    },
    recentActivity: [],
  });
  const [userEmail, setUserEmail] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const storedProfile = localStorage.getItem('profileData');
    if (storedProfile) {
      setProfileData(JSON.parse(storedProfile));
    }
    const user = supabase.auth.currentUser;
    if (user) {
      setUserEmail(user.email || '');
    }
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('supabase.auth.token');
    localStorage.removeItem('profileData');
    navigate('/login');
  };

  const handleEditProfile = () => {
    setShowEditModal(true);
  };

  const handleProfileUpdate = (updatedProfile: any) => {
    setProfileData(updatedProfile);
    localStorage.setItem('profileData', JSON.stringify(updatedProfile));
    setShowEditModal(false);
  };

  const renderProgressBar = (percentage: number) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-indigo-600 h-2 rounded-full"
        style={{ width: `${percentage}%` }} 
      />
    </div>
  );
  

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="h-32 w-32 rounded-full object-cover"
                />
                <h2 className="mt-4 text-2xl font-bold text-gray-900">{profileData.name || 'User Name'}</h2>
                <p className="text-gray-500">{userEmail}</p>
              </div>
              
              <div className="mt-6 space-y-4">
                {profileData.branch && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Book className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Branch</span>
                    </div>
                    <span className="text-gray-900">{profileData.branch}</span>
                  </div>
                )}
                
                {profileData.year && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Year</span>
                    </div>
                    <span className="text-gray-900">{profileData.year}</span>
                  </div>
                )}
                
                {profileData.gpa && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">CGPA</span>
                    </div>
                    <span className="text-gray-900">{profileData.gpa}</span>
                  </div>
                )}
                {profileData.skills && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Skills</span>
                    </div>
                    <span className="text-gray-900">{profileData.skills}</span>
                  </div>
                )}
                {profileData.resume && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">Resume</span>
                    </div>
                    <a href={profileData.resume} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">View Resume</a>
                  </div>
                )}
              </div>

              <div className="mt-8 flex flex-col space-y-2">
                <button onClick={handleEditProfile} className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Learning Progress</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Technical Skills</span>
                    <span className="text-gray-900">{profileData.progress?.technicalSkills || 0}%</span>
                  </div>
                  {renderProgressBar(profileData.progress?.technicalSkills || 0)}
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Non-Technical Skills</span>
                    <span className="text-gray-900">{profileData.progress?.nonTechnicalSkills || 0}%</span>
                  </div>
                  {renderProgressBar(profileData.progress?.nonTechnicalSkills || 0)}
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Practice Problems</span>
                    <span className="text-gray-900">{profileData.progress?.practiceProblems || 0}%</span>
                  </div>
                  {renderProgressBar(profileData.progress?.practiceProblems || 0)}
                </div>
                 <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Quiz Score</span>
                    <span className="text-gray-900">{profileData.progress?.quizScore || 0}%</span>
                  </div>
                  {renderProgressBar(profileData.progress?.quizScore || 0)}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h3>
              
              <div className="space-y-4">
                {profileData.recentActivity?.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        {activity.icon && <activity.icon className="h-5 w-5 text-indigo-600" />}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                )) || <p className="text-gray-500">No recent activity.</p>}
              </div>

              <button className="mt-6 w-full text-indigo-600 hover:text-indigo-500 font-medium">
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </div>
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ProfileSetupModal onComplete={handleProfileUpdate} initialData={profileData} />
        </div>
      )}
    </div>
  );
};

export default Profile;