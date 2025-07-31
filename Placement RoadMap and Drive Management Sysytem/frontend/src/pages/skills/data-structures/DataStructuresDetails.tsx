import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const DataStructuresDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Basic Data Structures</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-700 mb-6">
            Data structures are fundamental concepts in computer science that organize and store data efficiently.
            Understanding them is crucial for writing effective and optimized algorithms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Data Structures</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Start with the Basics:</strong> Understand fundamental data structures like arrays, linked lists, stacks, and queues.
            </li>
            <li>
              <strong>Learn Tree and Graph Structures:</strong> Grasp the concepts of binary trees, binary search trees, and graph representations.
            </li>
            <li>
              <strong>Implement Data Structures:</strong> Practice implementing these data structures from scratch to understand their inner workings.
            </li>
            <li>
              <strong>Practice Regularly:</strong> Solve coding problems on platforms like LeetCode, HackerRank, and Codeforces.
            </li>
            <li>
              <strong>Analyze Time and Space Complexity:</strong> Understand how different data structures affect the performance of your algorithms.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
          <p className="text-gray-700 mb-6">
            (Placeholder for handwritten notes - you can add links to images or PDFs here)
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
          <p className="text-gray-700 mb-6">
            (Placeholder for print notes - you can add links to PDFs or documents here)
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implement a basic array</li>
                <li>Implement a singly linked list</li>
                <li>Implement a stack using an array</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implement a doubly linked list</li>
                <li>Implement a queue using a linked list</li>
                <li>Implement a binary tree</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Implement a graph using adjacency list</li>
                <li>Implement a binary search tree</li>
                <li>Implement a priority queue</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Data Structures Basics</h3>
              <p className="text-gray-700">
                (Placeholder for beginner data structures playlist link)
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Data Structures</h3>
               <p className="text-gray-700">
                (Placeholder for advanced data structures playlist link)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataStructuresDetails;