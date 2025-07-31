import React from 'react';
import { Code, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechnicalSkills = () => {
  const topics = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      sections: [
        {
          language: 'C++',
          topics: ['Basics', 'OOP', 'STL', 'Advanced Concepts'],
          detailsLink: '/skills/technical/cpp',
        },
        {
          language: 'Java',
          topics: ['Core Java', 'Collections', 'Multithreading', 'Spring Boot'],
          detailsLink: '/skills/technical/java',
        },
        {
          language: 'Python',
          topics: ['Fundamentals', 'Libraries', 'Web Frameworks', 'Data Science'],
          detailsLink: '/skills/technical/python',
        },
      ],
    },
    {
      title: 'Data Structures & Algorithms',
      icon: <Database className="h-6 w-6" />,
      sections: [
        {
          category: 'Basic Data Structures',
          topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs'],
          detailsLink: '/skills/technical/data-structures',
        },
        {
          category: 'Algorithms',
          topics: ['Sorting', 'Searching', 'Dynamic Programming', 'Greedy'],
          detailsLink: '/skills/technical/algorithms',
        },
      ],
    },
    {
      title: 'Web Development',
      icon: <Globe className="h-6 w-6" />,
      sections: [
        {
          category: 'Frontend',
          topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue.js'],
          detailsLink: '/skills/technical/frontend',
        },
        {
          category: 'Backend',
          topics: ['Node.js', 'Express', 'Django', 'Databases'],
          detailsLink: '/skills/technical/backend',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h1>
        
        <div className="space-y-12">
          {topics.map((topic, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  {topic.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">{topic.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topic.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {section.language || section.category}
                    </h3>
                    <ul className="space-y-2">
                      {section.topics.map((topic, topicIndex) => (
                        <li
                          key={topicIndex}
                          className="text-gray-600 hover:text-indigo-600 cursor-pointer flex items-center space-x-2"
                        >
                          <span className="h-1.5 w-1.5 bg-indigo-600 rounded-full"></span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    {section.detailsLink && (
                      <Link
                        to={section.detailsLink}
                        className="mt-4 inline-block text-indigo-600 hover:text-indigo-500"
                      >
                        Learn more →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;