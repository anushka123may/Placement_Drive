import React, { useState, useEffect } from 'react';
import { Code, Brain, Filter, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Practice = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProblems = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase
          .from('problems')
          .select('*');

        if (error) {
          setError(error.message);
        } else {
          setProblems(data || []);
        }
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred.');
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, []);

  const categories = [
    { id: 'all', name: 'All Problems', icon: <Code className="h-5 w-5" /> },
    { id: 'arrays', name: 'Arrays', icon: <Code className="h-5 w-5" /> },
    { id: 'trees', name: 'Trees', icon: <Code className="h-5 w-5" /> },
    { id: 'sorting', name: 'Sorting', icon: <Code className="h-5 w-5" /> },
    { id: 'aptitude', name: 'Aptitude', icon: <Brain className="h-5 w-5" /> },
    { id: 'linked-lists', name: 'Linked Lists', icon: <Code className="h-5 w-5" /> },
    { id: 'stacks', name: 'Stacks', icon: <Code className="h-5 w-5" /> },
    { id: 'graphs', name: 'Graphs', icon: <Code className="h-5 w-5" /> },
    { id: 'queues', name: 'Queues', icon: <Code className="h-5 w-5" /> },
    { id: 'dynamic-programming', name: 'Dynamic Programming', icon: <Code className="h-5 w-5" /> },
    { id: 'hash-tables', name: 'Hash Tables', icon: <Code className="h-5 w-5" /> },
  ];

  const difficulties = ['all', 'easy', 'medium', 'hard'];

  const filteredProblems = problems.filter(problem => {
    if (selectedCategory !== 'all' && problem.category !== selectedCategory) return false;
    if (selectedDifficulty !== 'all' && problem.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const handleSolveNowClick = (problem) => {
    const leetCodeUrl = `https://leetcode.com/problemset/all/?search=${problem.title}`;
    window.open(leetCodeUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">
          <Loader className="h-6 w-6 animate-spin text-indigo-600 mx-auto mb-2" />
          <p className="text-gray-600">Loading problems...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Practice Problems</h1>
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-500" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center space-x-2 px-4 py-2 rounded-md ${
                      selectedCategory === category.id
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            {filteredProblems.map(problem => (
              <div key={problem.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
                    <p className="text-gray-600 mb-4">{problem.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {problem.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                    {problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
                  </span>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => handleSolveNowClick(problem)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Solve Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practice;
