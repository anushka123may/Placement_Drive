import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CppDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Technical Skills
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">C++ Programming</h1>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              C++ is a powerful, versatile programming language used for a wide range of applications.
              It's known for its performance and control over hardware, making it suitable for system programming, game development, and high-performance computing.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn C++ from Scratch</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Start with the Basics:</strong> Understand fundamental concepts like variables, data types, operators, and control structures.</li>
              <li><strong>Learn Object-Oriented Programming (OOP):</strong> Grasp the principles of classes, objects, inheritance, and polymorphism.</li>
              <li><strong>Explore the Standard Template Library (STL):</strong> Familiarize yourself with containers, algorithms, and iterators.</li>
              <li><strong>Practice Regularly:</strong> Solve coding problems on platforms like LeetCode, HackerRank, and Codeforces.</li>
              <li><strong>Build Projects:</strong> Apply your knowledge by creating small projects to solidify your understanding.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
            <p className="text-gray-700 mb-6">
              <a href="https://link_to_handwritten_notes" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                Access Handwritten Notes
              </a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
            <p className="text-gray-700 mb-6">
              <a href="https://link_to_print_notes" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                Access Print Notes
              </a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li><a href="https://leetcode.com/problems/hello-world/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Write a program to print "Hello, World!"</a></li>
                  <li><a href="https://www.hackerrank.com/challenges/simple-array-sum/problem" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Calculate the sum of an array</a></li>
                  <li><a href="https://www.codechef.com/problems/START01" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Find the largest of three numbers</a></li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li><a href="https://www.geeksforgeeks.org/data-structures/linked-list/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement a linked list</a></li>
                  <li><a href="https://www.hackerrank.com/challenges/reverse-a-string/problem" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Reverse a string</a></li>
                  <li><a href="https://www.codechef.com/problems/BINARYSEARCH" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Implement binary search</a></li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li><a href="https://www.hackerrank.com/challenges/graph-theory-dfs/problem" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Graph traversal algorithm</a></li>
                  <li><a href="https://www.codechef.com/problems/QUEENS" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Solve the N-Queens problem</a></li>
                  <li><a href="https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">Dynamic programming knapsack problem</a></li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Beginner C++</h3>
                <a href="https://www.youtube.com/playlist?list=PLlrATfN6J98dudJu067O50m-2en3b3e0O" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                  FreeCodeCamp C++ Tutorial
                </a>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced C++</h3>
                <a href="https://www.youtube.com/playlist?list=PLs3IF090600000000000000000000000" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                  The Cherno C++ Playlist
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Topics to Learn</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Introduction to C++</li>
              <li>Data Types and Variables</li>
              <li>Control Structures (if, switch, loops)</li>
              <li>Functions and Recursion</li>
              <li>Object-Oriented Programming (OOP) Concepts</li>
              <li>Inheritance, Polymorphism, and Abstraction</li>
              <li>Standard Template Library (STL)</li>
              <li>File Handling</li>
              <li>Exception Handling</li>
              <li>Algorithms and Data Structures in C++</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CppDetails;