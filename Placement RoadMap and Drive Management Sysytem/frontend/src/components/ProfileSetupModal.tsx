// src/components/ProfileSetupModal.tsx
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

interface ProfileSetupModalProps {
  onComplete: () => void;
  initialData?: {
    name: string;
    year: string;
    branch: string;
    gpa: string;
    skills: string;
    resume: string;
    avatar: string;
  };
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const ProfileSetupModal: React.FC<ProfileSetupModalProps> = ({ onComplete, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [year, setYear] = useState(initialData?.year || '');
  const [branch, setBranch] = useState(initialData?.branch || '');
  const [gpa, setGpa] = useState(initialData?.gpa || '');
  const [skills, setSkills] = useState(initialData?.skills || '');
  const [resume, setResume] = useState(initialData?.resume || '');
  const [avatar, setAvatar] = useState(initialData?.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80');
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUserId(user?.id || null);
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setYear(initialData.year || '');
      setBranch(initialData.branch || '');
      setGpa(initialData.gpa || '');
      setSkills(initialData.skills || '');
      setResume(initialData.resume || '');
      setAvatar(initialData.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80');
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId) {
      console.error('User ID not available.');
      return;
    }

    const profileData = {
      name,
      year,
      branch,
      gpa,
      skills,
      resume,
      avatar,
      user_id: userId,
    };

    try {
      const { error } = await supabase
        .from('profiles')
        .upsert([profileData], { onConflict: 'user_id' });

      if (error) {
        console.error('Error saving profile:', error);
      } else {
        localStorage.setItem('profileData', JSON.stringify(profileData));
        onComplete();
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <select
              id="year"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            >
              <option value="">Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>
          <div>
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
              Branch of Engineering
            </label>
            <input
              type="text"
              id="branch"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="gpa" className="block text-sm font-medium text-gray-700">
              GPA
            </label>
            <input
              type="number"
              id="gpa"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              step="0.01"
              min="0"
              max="10"
            />
          </div>
          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
              Skills
            </label>
            <input
              type="text"
              id="skills"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Resume URL
            </label>
            <input
              type="url"
              id="resume"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={resume}
              onChange={(e) => setResume(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetupModal;
