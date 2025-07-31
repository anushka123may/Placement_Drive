import React, { useState } from 'react';
import { Code, CheckCircle, ExternalLink } from 'lucide-react';

const Aptitude = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [completedProblems, setCompletedProblems] = useState({});

    const categories = [
        { id: 'numbers', name: 'Numbers', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/numbers/' },
        { id: 'percentages', name: 'Percentages', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/percentage/' },
        { id: 'profit_loss', name: 'Profit and Loss', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/profit-and-loss/' },
        { id: 'time_work', name: 'Time and Work', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/time-and-work/' },
        { id: 'time_speed_distance', name: 'Time, Speed, and Distance', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/time-and-distance/' },
        { id: 'ratio_proportion', name: 'Ratio and Proportion', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/ratio-and-proportion/' },
        { id: 'simple_compound_interest', name: 'Simple and Compound Interest', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/compound-interest/' },
        { id: 'permutations_combinations', name: 'Permutations and Combinations', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/permutation-and-combination/' },
        { id: 'probability', name: 'Probability', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/probability/' },
        { id: 'logarithms', name: 'Logarithms', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/logarithm/' },
        { id: 'averages', name: 'Averages', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/average/' },
        { id: 'algebra', name: 'Algebra', icon: <Code className="h-5 w-5" />, link: 'https://www.geeksforgeeks.org/category/algebra/' },
        { id: 'geometry_mensuration', name: 'Geometry and Mensuration', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/area/' },
        { id: 'trigonometry', name: 'Trigonometry', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/aptitude/height-and-distance/' },
        { id: 'data_interpretation', name: 'Data Interpretation', icon: <Code className="h-5 w-5" />, link: 'https://www.indiabix.com/data-interpretation/questions-and-answers/' },
    ];
    

    

    const problems = {
        numbers: [
            { id: 1, title: 'Find LCM and GCD', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/numbers/' },
            { id: 2, title: 'Check Prime Number', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/prime-numbers/' },
        ],
        percentages: [
            { id: 1, title: 'Convert Fractions to Percentages', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/percentage/' },
            { id: 2, title: 'Percentage Increase/Decrease', difficulty: 'Medium', link: 'https://www.testbook.com/aptitude-questions/' },
        ],
        profit_loss: [
            { id: 1, title: 'Find Selling Price and Cost Price', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/profit-and-loss/' },
            { id: 2, title: 'Calculate Profit Percentage', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/profit-and-loss-formulas/' },
        ],
        time_work: [
            { id: 1, title: 'Work Done by Two People', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/time-and-work/' },
            { id: 2, title: 'Pipes and Cisterns Problem', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/pipes-and-cisterns-formulas/' },
        ],
        probability: [
            { id: 1, title: 'Drawing a Card from a Deck', difficulty: 'Easy', link: 'https://www.indiabix.com/aptitude/probability/' },
            { id: 2, title: 'Rolling a Sum of 7 with Two Dice', difficulty: 'Medium', link: 'https://www.geeksforgeeks.org/probability-formulas-and-rules/' },
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
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Aptitude Practice</h1>
                {selectedCategory ? (
                    <div>
                        <button onClick={() => setSelectedCategory(null)} className="mb-4 text-indigo-600 hover:text-indigo-800">
                            Back to Categories
                        </button>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {categories.find(cat => cat.id === selectedCategory)?.name} Problems
                        </h2>
                        <div className="space-y-4">
                            {problems[selectedCategory]?.map(problem => (
                                <div key={problem.id} className="bg-white rounded-lg shadow-lg p-6">
                                    <h3 className="text-xl font-semibold text-gray-900">{problem.title}</h3>
                                    <p className="text-gray-600">Difficulty: {problem.difficulty}</p>
                                    <div className="mt-4 flex items-center space-x-4">
                                        <a href={problem.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                                            <ExternalLink className="h-5 w-5 mr-1" /> Practice Here
                                        </a>
                                        <button onClick={() => handleComplete(selectedCategory, problem.id)} className="text-green-600 hover:text-green-800 flex items-center">
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

export default Aptitude;