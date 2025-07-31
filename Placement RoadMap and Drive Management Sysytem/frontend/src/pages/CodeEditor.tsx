import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CodeEditor = () => {
  const { problemId } = useParams();
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [questionDetails, setQuestionDetails] = useState({ title: '', hint: '', exampleOutput: '' });

  const problems = {
    1: {
      title: 'Two Sum',
      description: 'Find two numbers in an array that add up to a target sum.',
      hint: 'Use a hash table to store numbers and their indices.',
      exampleOutput: 'Input: nums = [2,7,11,15], target = 9; Output: [0,1]',
    },
    2: {
      title: 'Binary Tree Level Order Traversal',
      description: 'Given a binary tree, return the level order traversal of its nodes values.',
      hint: 'Use a queue to perform a level-order traversal.',
      exampleOutput: 'Input: [3,9,20,null,null,15,7]; Output: [[3],[9,20],[15,7]]',
    },
    3: {
      title: 'Number System Conversion',
      description: 'Convert numbers between different number systems.',
      hint: 'Use base conversion algorithms.',
      exampleOutput: 'Input: 10 (decimal), Output: 1010 (binary)',
    },
    4: {
      title: 'Merge Sort Implementation',
      description: 'Implement the merge sort algorithm.',
      hint: 'Use a divide and conquer approach.',
      exampleOutput: 'Input: [5,2,8,1,9,4]; Output: [1,2,4,5,8,9]',
    },
    5: {
      title: 'Reverse a Linked List',
      description: 'Reverse a singly linked list.',
      hint: 'Use iterative or recursive approach.',
      exampleOutput: 'Input: 1->2->3->4->5; Output: 5->4->3->2->1',
    },
    6: {
      title: 'Valid Parentheses',
      description: 'Determine if a string containing parentheses is valid.',
      hint: 'Use a stack to keep track of opening parentheses.',
      exampleOutput: 'Input: "()[]{}" Output: true',
    },
    7: {
      title: 'Graph Traversal (BFS)',
      description: 'Implement Breadth-First Search on a graph.',
      hint: 'Use a queue to explore nodes level by level.',
      exampleOutput: 'Input: Graph with nodes A,B,C,D; Output: A,B,C,D',
    },
    8: {
      title: 'Quick Sort Implementation',
      description: 'Implement the quick sort algorithm.',
      hint: 'Use a pivot element to partition the array.',
      exampleOutput: 'Input: [5,2,8,1,9,4]; Output: [1,2,4,5,8,9]',
    },
    9: {
      title: 'Find the Missing Number',
      description: 'Find the missing number in an array of consecutive numbers.',
      hint: 'Use the sum of numbers formula or XOR operation.',
      exampleOutput: 'Input: [3,0,1]; Output: 2',
    },
    10: {
      title: 'Implement a Queue',
      description: 'Implement a queue using an array or linked list.',
      hint: 'Use a first-in-first-out (FIFO) approach.',
      exampleOutput: 'Input: enqueue(1), enqueue(2), dequeue(); Output: 1',
    },
    11: {
      title: 'Time and Distance Problems',
      description: 'Solve problems related to time, speed, and distance.',
      hint: 'Use the formula: distance = speed * time.',
      exampleOutput: 'Input: speed = 60 km/h, time = 2 hours; Output: distance = 120 km',
    },
    12: {
      title: 'Dynamic Programming - Fibonacci',
      description: 'Implement the Fibonacci sequence using dynamic programming.',
      hint: 'Use memoization or tabulation to avoid redundant calculations.',
      exampleOutput: 'Input: n = 5; Output: 5',
    },
    13: {
      title: 'Implement a Trie',
      description: 'Implement a Trie (prefix tree) data structure.',
      hint: 'Use a tree-like structure to store words.',
      exampleOutput: 'Input: insert("apple"), search("app"); Output: true',
    },
    14: {
      title: 'Longest Common Subsequence',
      description: 'Find the longest common subsequence of two strings.',
      hint: 'Use dynamic programming to find the longest common subsequence.',
      exampleOutput: 'Input: "abcde", "ace"; Output: "ace"',
    },
    15: {
      title: 'Profit and Loss Problems',
      description: 'Solve problems related to profit and loss calculations.',
      hint: 'Use the formulas for profit, loss, and percentage calculations.',
      exampleOutput: 'Input: cost price = 100, selling price = 120; Output: profit = 20',
    },
    16: {
      title: 'Implement a Hash Table',
      description: 'Implement a hash table with basic operations.',
      hint: 'Use a hash function to map keys to indices.',
      exampleOutput: 'Input: insert("apple", 1), get("apple"); Output: 1',
    },
  };

  useEffect(() => {
    const currentProblem = problems[parseInt(problemId || '0', 10)];
    if (currentProblem) {
      setQuestionDetails({
        title: currentProblem.title,
        hint: currentProblem.hint,
        exampleOutput: currentProblem.exampleOutput,
      });
    }
  }, [problemId]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = () => {
    // Placeholder for code submission
    setOutput('Code submitted. (No compilation or execution in this version)');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <Link to="/practice" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Practice Problems
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Code Editor</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Question Details */}
          <div className="lg:col-span-1">
            {questionDetails.title && (
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Solving: {questionDetails.title}
              </h2>
            )}
            {questionDetails.hint && (
              <p className="text-gray-600 mb-4">
                <strong>Hint:</strong> {questionDetails.hint}
              </p>
            )}
            {questionDetails.exampleOutput && (
              <p className="text-gray-600 mb-4">
                <strong>Example Output:</strong> {questionDetails.exampleOutput}
              </p>
            )}
          </div>

          {/* Right Side - Code Editor and Output */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="mb-4">
              <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                Code
              </label>
              <textarea
                id="code"
                rows={15}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm flex-1 resize-none"
                value={code}
                onChange={handleCodeChange}
                placeholder="Enter your code here"
              />
            </div>

            <div className="mb-4">
              <button
                onClick={handleSubmit}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Code
              </button>
            </div>

            {output && (
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Output</h3>
                <p className="text-gray-700">{output}</p>
              </div>
            )}
            <p className="text-gray-500 mt-4">
              Note: This code editor is for input only. Compilation and execution are not supported in this version.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
