const AlgorithmsDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex">
      <div className="max-w-7xl mx-auto flex-grow">
        <div className="mb-8">
          <Link to="/skills/technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Technical Skills
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Algorithms</h1>
        
        {selectedSubtopic ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{selectedSubtopic}</h2>
            <p className="text-gray-700">(Placeholder for algorithm details)</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Algorithms are step-by-step procedures for solving problems. They are essential for efficient computation and are used in all areas of computer science.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Algorithms</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Start with the Basics:</strong> Learn sorting, searching, and graph traversal.</li>
              <li><strong>Learn Design Techniques:</strong> Understand divide and conquer, dynamic programming, and greedy algorithms.</li>
              <li><strong>Practice Regularly:</strong> Solve problems on LeetCode, HackerRank, and Codeforces.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Implement linear search</li>
                  <li>Implement bubble sort</li>
                  <li>Implement insertion sort</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Implement binary search</li>
                  <li>Implement merge sort</li>
                  <li>Implement quicksort</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Implement Dijkstra's algorithm</li>
                  <li>Implement dynamic programming for knapsack problem</li>
                  <li>Implement a graph coloring algorithm</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="w-1/4 ml-8 p-6 bg-gray-100 rounded-lg shadow-md h-fit">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Java Algorithm Topics</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {Object.keys(subtopicData).map((category) => (
            <li key={category}>
              <button onClick={() => setSelectedCategory(category)} className="text-blue-600 hover:underline">
                {category}
              </button>
              {selectedCategory === category && (
                <ul className="list-disc list-inside ml-4 text-gray-600">
                  {Object.keys(subtopicData[category]).map((subtopic) => (
                    <li key={subtopic}>
                      <button onClick={() => setSelectedSubtopic(subtopic)} className="text-blue-600 hover:underline">
                        {subtopic}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlgorithmsDetails;