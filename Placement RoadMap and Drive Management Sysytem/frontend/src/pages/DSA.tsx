import React, { useState } from 'react';
import { Code, Youtube, FileText, CheckCircle } from 'lucide-react';

const DSA = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [completedProblems, setCompletedProblems] = useState({});
    const [totalCount, setTotalCount] = useState(0);
    const categories = [
        { id: 'arrays', name: 'Arrays', icon: <Code className="h-5 w-5" /> },
        { id: 'strings', name: 'Strings', icon: <Code className="h-5 w-5" /> },
        { id: 'trees', name: 'Trees', icon: <Code className="h-5 w-5" /> },
        { id: 'stacks', name: 'Stacks', icon: <Code className="h-5 w-5" /> },
        { id: 'heaps', name: 'Heaps', icon: <Code className="h-5 w-5" /> },
        { id: 'graphs', name: 'Graphs', icon: <Code className="h-5 w-5" /> },
        { id: 'hashTables', name: 'Hash Tables', icon: <Code className="h-5 w-5" /> },
        { id: 'sorting', name: 'Sorting', icon: <Code className="h-5 w-5" /> },
        { id: 'dynamicProgramming', name: 'Dynamic Programming', icon: <Code className="h-5 w-5" /> },
        { id: 'linkedLists', name: 'Linked Lists', icon: <Code className="h-5 w-5" /> },
        { id: 'queues', name: 'Queues', icon: <Code className="h-5 w-5" /> },
        { id: 'recursion', name: 'Recursion', icon: <Code className="h-5 w-5" /> },
        { id: 'backtracking', name: 'Backtracking', icon: <Code className="h-5 w-5" /> },
        { id: 'greedy', name: 'Greedy', icon: <Code className="h-5 w-5" /> },


    ];

    const problems = {
        arrays: [
            { id: 1, title: 'Two Sum', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://leetcode.com/problems/two-sum/' },
            { id: 2, title: 'Maximum Subarray', difficulty: 'Medium', youtubeLink: 'http://youtube.com/arrays/2', articleLink: 'http://article.com/arrays/2', leetCodeLink: 'https://leetcode.com/problems/maximum-subarray/' },
            { id: 3, title: 'Merge Sorted Array', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/3', articleLink: 'http://article.com/arrays/3', revisionLink: 'http://revision.com/arrays/3' },
            { id: 4, title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', youtubeLink: 'http://youtube.com/arrays/4', articleLink: 'http://article.com/arrays/4', revisionLink: 'http://revision.com/arrays/4' },
            { id: 5, title: 'Reverse-an-array', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://www.geeksforgeeks.org/program-to-reverse-an-array/' },
            { id: 6, title: 'maximum-and-minimum-in-an-array', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/' },
            { id: 7, title: 'kth-smallest-element', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1' },
            { id: 8, title: 'Sort the array without using any sorting algo', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo'},
            { id: 9, title: 'Move all negative elements to one side of the array', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/' },
            { id: 10, title: 'Find the Union and Intersection of the two sorted arrays', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1'},
            { id: 11, title: 'Rotate Array by One', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1' },
            { id: 12, title: 'Kadanes Algorithm', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1' },
            { id: 13, title: 'Minimize the Heights II', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/minimize-the-heights3351/1' },
            { id: 14, title: 'Minimum Jumps', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1' },
            { id: 15, title: 'Find the Duplicate Number', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://leetcode.com/problems/find-the-duplicate-number/description/' },
            { id: 16, title: 'Merge two sorted arrays', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1' },
            { id: 17, title: 'Kadanes algorithm', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1' },
            { id: 18, title: 'Merge intervals', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://leetcode.com/problems/merge-intervals/description/' },
            { id: 19, title: 'Next permutation', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://leetcode.com/problems/next-permutation/description/' },
            { id: 20, title: 'Count pairs with given sum', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1' },
            { id: 21, title: 'Common elements', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/common-elements1132/1' },
            { id: 22, title: 'Rearrange array', difficulty: 'Easy', youtubeLink: 'http://youtube.com/arrays/1', articleLink: 'http://article.com/arrays/1', leetCodeLink: 'https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/' },
            { id: 23, title: 'Subarray with 0 sum', difficulty: 'Easy', youtubeLink: '', articleLink: '', leetCodeLink: 'https://www.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1' },

            


        ],
        strings: [
            { id: 3, title: 'Valid Anagram', difficulty: 'Easy', youtubeLink: 'http://youtube.com/strings/1', articleLink: 'http://article.com/strings/1', leetCodeLink: 'https://leetcode.com/problems/valid-anagram/' },
            { id: 6, title: 'Longest Palindromic Substring', difficulty: 'Medium', youtubeLink: 'http://youtube.com/strings/2', articleLink: 'http://article.com/strings/2',  leetCodeLink: 'https://leetcode.com/problems/longest-palindromic-substring/' },
            { id: 7, title: 'String to Integer (atoi)', difficulty: 'Medium', youtubeLink: 'http://youtube.com/strings/3', articleLink: 'http://article.com/strings/3', leetCodeLink: 'https://leetcode.com/problems/string-to-integer-atoi/' },
            { id: 8, title: 'Group Anagrams', difficulty: 'Medium', youtubeLink: 'http://youtube.com/strings/4', articleLink: 'http://article.com/strings/4', leetCodeLink: 'https://leetcode.com/problems/group-anagrams/' },

        ],

        trees: [
            { id: 1, title: 'Binary Tree Inorder Traversal', difficulty: 'Easy', youtubeLink: 'http://youtube.com/trees/1', articleLink: 'http://article.com/trees/1', leetCodeLink: 'https://leetcode.com/problems/binary-tree-inorder-traversal/' },
            { id: 2, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', youtubeLink: 'http://youtube.com/trees/2', articleLink: 'http://article.com/trees/2', revisionLink: 'http://revision.com/trees/2' },
          ],
          stacks: [
            { id: 1, title: 'Valid Parentheses', difficulty: 'Easy', youtubeLink: 'http://youtube.com/stacks/1', articleLink: 'http://article.com/stacks/1', leetCodeLink: 'https://leetcode.com/problems/valid-parentheses/' },
            { id: 2, title: 'Largest Rectangle in Histogram', difficulty: 'Hard', youtubeLink: 'http://youtube.com/stacks/2', articleLink: 'http://article.com/stacks/2', revisionLink: 'http://revision.com/stacks/2' },
          ],
          heaps: [
            { id: 1, title: 'Kth Largest Element in an Array', difficulty: 'Medium', youtubeLink: 'http://youtube.com/heaps/1', articleLink: 'http://article.com/heaps/1', leetCodeLink: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
          ],
          graphs: [
            { id: 1, title: 'Number of Islands', difficulty: 'Medium', youtubeLink: 'http://youtube.com/graphs/1', articleLink: 'http://article.com/graphs/1', leetCodeLink: 'https://leetcode.com/problems/number-of-islands/' },
          ],
          hashTables: [
            { id: 1, title: 'Two Sum', difficulty: 'Easy', youtubeLink: 'http://youtube.com/hashTables/1', articleLink: 'http://article.com/hashTables/1', leetCodeLink: 'https://leetcode.com/problems/two-sum/' },
          ],
          sorting: [
            { id: 1, title: 'Merge Sort', difficulty: 'Medium', youtubeLink: 'http://youtube.com/sorting/1', articleLink: 'http://article.com/sorting/1' },
          ],
          dynamicProgramming: [
            { id: 1, title: 'Climbing Stairs', difficulty: 'Easy', youtubeLink: 'http://youtube.com/dynamicProgramming/1', articleLink: 'http://article.com/dynamicProgramming/1', leetCodeLink: 'https://leetcode.com/problems/climbing-stairs/' },
          ],
          linkedLists: [
            { id: 1, title: 'Reverse Linked List', difficulty: 'Easy', youtubeLink: 'http://youtube.com/linkedLists/1', articleLink: 'http://article.com/linkedLists/1', leetCodeLink: 'https://leetcode.com/problems/reverse-linked-list/' },
          ],
          queues: [
            { id: 1, title: 'Implement Queue using Stacks', difficulty: 'Easy', youtubeLink: 'http://youtube.com/queues/1', articleLink: 'http://article.com/queues/1', leetCodeLink: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
          ],
          recursion: [
            { id: 1, title: 'Pow(x, n)', difficulty: 'Medium', youtubeLink: 'http://youtube.com/recursion/1', articleLink: 'http://article.com/recursion/1', leetCodeLink: 'https://leetcode.com/problems/powx-n/' },
          ],
          backtracking: [
            { id: 1, title: 'Combination Sum', difficulty: 'Medium', youtubeLink: 'http://youtube.com/backtracking/1', articleLink: 'http://article.com/backtracking/1', leetCodeLink: 'https://leetcode.com/problems/combination-sum/' },
          ],
          greedy: [
            { id: 1, title: 'Jump Game', difficulty: 'Medium', youtubeLink: 'http://youtube.com/greedy/1', articleLink: 'http://article.com/greedy/1', leetCodeLink: 'https://leetcode.com/problems/jump-game/' },
          ],
    };

    const handleComplete = (categoryId, problemId) => {
        setCompletedProblems(prev => ({
            ...prev,
            [categoryId]: {
                ...prev[categoryId],
                [problemId]: !prev[categoryId]?.[problemId],
            },
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">DSA Concepts</h1>

                {selectedCategory ? (
                    <div>
                        <button onClick={() => setSelectedCategory(null)} className="mb-4 text-indigo-600 hover:text-indigo-800">
                            Back to Categories
                        </button>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems - {categories.find(cat => cat.id === selectedCategory).name}</h2>
                        <div className="space-y-4">
                            {problems[selectedCategory].map(problem => (
                                <div key={problem.id} className="bg-white rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
                                    <p className="text-gray-600">Difficulty: {problem.difficulty}</p>
                                    <div className="mt-4 flex items-center space-x-4">
                                        <a href={problem.leetCodeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                                            Practice
                                        </a>
                                        {problem.youtubeLink && (
                                            <a href={problem.youtubeLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                                                <Youtube className="h-5 w-5 mr-1" /> YouTube
                                            </a>
                                        )}
                                        {problem.articleLink && (
                                            <a href={problem.articleLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 flex items-center">
                                                <FileText className="h-5 w-5 mr-1" /> Article
                                            </a>
                                        )}
                                        <button onClick={() => {handleComplete(selectedCategory, problem.id) 
                                            setTotalCount(totalCount + 1);
                                        }} className="text-green-600 hover:text-green-800 flex items-center">
                                            {completedProblems[selectedCategory]?.[problem.id] ? <CheckCircle className="h-5 w-5 mr-1" /> : <CheckCircle className="h-5 w-5 mr-1 text-gray-300" />}
                                            {completedProblems[selectedCategory]?.[problem.id] ? 'Completed' : 'Mark Complete'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {categories.map(category => (
                            <button key={category.id} onClick={() => setSelectedCategory(category.id)} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center justify-center mb-4">
                                    {category.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 text-center">{category.name}</h3>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DSA;