import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LogicalReasoningDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main content section */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <Link to="/skills/non-technical" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Non-Technical Skills
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Logical Reasoning</h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              Logical reasoning involves the ability to analyze and interpret information to draw logical conclusions.
              It's a crucial skill for problem-solving and decision-making in various contexts.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Learn Logical Reasoning</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Understand Basic Concepts:</strong> Familiarize yourself with different types of reasoning, such as deductive, inductive, and abductive reasoning.</li>
              <li><strong>Practice Regularly:</strong> Solve a variety of logical reasoning problems to improve your analytical skills.</li>
              <li><strong>Learn Different Question Types:</strong> Understand the different types of logical reasoning questions, such as verbal, non-verbal, and analytical reasoning.</li>
              <li><strong>Focus on Pattern Recognition:</strong> Develop your ability to identify patterns and relationships in data.</li>
              <li><strong>Analyze Your Mistakes:</strong> Identify your weak areas and focus on improving them.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Handwritten Notes</h2>
            <p className="text-gray-700 mb-6">
              <a href="URL_TO_HANDWRITTEN_NOTES" className="text-indigo-600 hover:text-indigo-500">Click here to access handwritten notes</a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Print Notes</h2>
            <p className="text-gray-700 mb-6">
              <a href="URL_TO_PRINT_NOTES" className="text-indigo-600 hover:text-indigo-500">Click here to access print notes</a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Practice Problems</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Easy</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li><a href="https://www.geeksforgeeks.org/analogy-problems-for-placement/" className="text-indigo-600 hover:text-indigo-500">Solve problems on analogies</a></li>
                  <li><a href="https://www.geeksforgeeks.org/series-completion-in-verbal-reasoning/" className="text-indigo-600 hover:text-indigo-500">Solve problems on series completion</a></li>
                  <li><a href="https://www.hackerrank.com/domains/tutorials/10-days-of-statistics" className="text-indigo-600 hover:text-indigo-500">Solve problems on coding-decoding</a></li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Medium</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li><a href="https://www.codechef.com/problems/ADJSTR" className="text-indigo-600 hover:text-indigo-500">Solve problems on blood relations</a></li>
                  <li><a href="https://www.geeksforgeeks.org/direction-sense-test/" className="text-indigo-600 hover:text-indigo-500">Solve problems on direction sense</a></li>
                  <li><a href="https://www.hackerrank.com/domains/tutorials/10-days-of-statistics" className="text-indigo-600 hover:text-indigo-500">Solve problems on syllogisms</a></li>
                </ul>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Hard</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li><a href="https://www.hackerrank.com/domains/tutorials/30-days-of-code" className="text-indigo-600 hover:text-indigo-500">Solve problems on data interpretation</a></li>
                  <li><a href="https://www.geeksforgeeks.org/non-verbal-reasoning/" className="text-indigo-600 hover:text-indigo-500">Solve problems on non-verbal reasoning</a></li>
                  <li><a href="https://www.hackerrank.com/domains/tutorials/10-days-of-statistics" className="text-indigo-600 hover:text-indigo-500">Solve complex analytical reasoning problems</a></li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">YouTube Playlists</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Logical Reasoning</h3>
                <p className="text-gray-700">
                  <a href="URL_TO_BASIC_LOGICAL_REASONING_YOUTUBE_PLAYLIST" className="text-indigo-600 hover:text-indigo-500">Click here for the playlist</a>
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Logical Reasoning</h3>
                <p className="text-gray-700">
                  <a href="URL_TO_ADVANCED_LOGICAL_REASONING_YOUTUBE_PLAYLIST" className="text-indigo-600 hover:text-indigo-500">Click here for the playlist</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar with topics list */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Topics to Learn</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Verbal Reasoning:</strong> Analogies, Coding-Decoding, Blood Relations, Series Completion</li>
            <li><strong>Non-Verbal Reasoning:</strong> Pattern Recognition, Puzzles</li>
            <li><strong>Analytical Reasoning:</strong> Logical Puzzles, Syllogisms, Directions Sense</li>
            <li><strong>Data Interpretation:</strong> Tables, Graphs, Data Analysis</li>
            <li><strong>Complex Analytical Reasoning:</strong> Advanced puzzles and reasoning problems</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default LogicalReasoningDetails;