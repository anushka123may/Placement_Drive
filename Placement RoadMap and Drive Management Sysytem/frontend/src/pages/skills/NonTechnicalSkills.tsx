// import React from 'react';
import { Brain, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const NonTechnicalSkills = () => {
  const skills = [
    {
      title: 'Aptitude and Reasoning',
      icon: <Brain className="h-6 w-6" />,
      sections: [
        {
          category: 'Quantitative Aptitude',
          topics: [
            'Number System',
            'Percentages',
            'Profit and Loss',
            'Time and Work',
            'Probability',
            'Statistics',
          ],
          detailsLink: '/skills/non-technical/quantitative-aptitude',
        },
        {
          category: 'Logical Reasoning',
          topics: [
            'Verbal Reasoning',
            'Non-verbal Reasoning',
            'Data Interpretation',
            'Coding-Decoding',
            'Blood Relations',
          ],
          detailsLink: '/skills/non-technical/logical-reasoning',
        },
      ],
    },
    {
      title: 'Communication Skills',
      icon: <MessageSquare className="h-6 w-6" />,
      sections: [
        {
          category: 'Verbal Communication',
          topics: [
            'Grammar and Vocabulary',
            'Public Speaking',
            'Group Discussions',
            'Interview Skills',
            'Email Writing',
          ],
          detailsLink: '/skills/non-technical/verbal-communication',
        },
        {
          category: 'Non-verbal Communication',
          topics: [
            'Body Language',
            'Presentation Skills',
            'Active Listening',
            'Professional Etiquette',
          ],
          detailsLink: '/skills/non-technical/non-verbal-communication',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Non-Technical Skills</h1>
        
        <div className="space-y-12">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  {skill.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">{skill.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skill.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">
                      {section.category}
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

export default NonTechnicalSkills;