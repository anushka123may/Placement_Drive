import React from "react";
import { Calendar, MapPin, Building } from 'lucide-react';

const PlacementDrives: React.FC  = () => {

   const companies = [    
    {
      id: 1,
      name: "Flipkart",
      logo: "https://www.atun.in/wp-content/uploads/2020/07/Flipkart-Logo.png",
      location: "Bangalore, India (Hybrid)",
      package: "10-18 LPA",
      requirements: [
        "B.Tech/M.Tech in Computer Science or equivalent",
        "Experience in software development, data analysis, or product management",
        "Proficiency in Java, Python, SQL, and cloud technologies"
      ],
      previousYearPapers: [
        { "year": 2024, link: "https://www.a2zinterviews.com/Interview/placement-papers/flipkart-model-questions.php?m=5" },
        { "year": 2023, link: "https://www.freshersnow.com/flipkart-placement-papers/" },
      ],
      paperPattern: "https://www.a2zinterviews.com/Interview/placement-papers/flipkart-model-questions.php?m=2",
      applynow: "https://www.flipkartcareers.com/#!/"
    },
    {
    id: 2,
    name: "TCS",
    logo: "https://i0.wp.com/winzons.com/wp-content/uploads/2024/04/TCS-LOGO-770x433-1.jpg",
    location: "Pune, India",
    package: "6-10 LPA",
    requirements: [
      "B.Tech/B.E. in any discipline",
      "Minimum 6.5 CGPA",
      "Good communication skills",
      "Experience in programming languages like Java, C++",
    ],
    previousYearPapers: [
      { year: 2024, link: "https://www.scribd.com/document/415284672/Tcs-Codevita-Mock-Test-converted" },
      { year: 2023, link: "https://www.scribd.com/document/557200901/TCS-CodeVita-Sheet-by-Arsh" },
    ],
    paperPattern: "https://placement.freshersworld.com/tcs-placement-papers/whole-testpaper/33136860",
    applynow:"https://grs.tcs.com/partners/pages/plcmntLogin.jsf",
  },
  {
    id: 3,
    name: "Cognizant",
    logo: "https://cognizant.scene7.com/is/image/cognizant/CognizantLogo400-6",
    location: "Hyderabad, India",
    package: "5-12 LPA",
    requirements: [
      "B.E/B.Tech/MCA graduates",
      "Minimum 6.0 CGPA",
      "Strong communication skills",
    ],
    paperPattern: "https://www.a2zinterviews.com/Interview/placement-papers/cognizant-model-questions.php?m=2",
    applynow: "https://careers.cognizant.com/global/en"
  },
  {
    id: 4,
    name: 'Infosys',
    logo: 'https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1712133731/1712133730.jpg',
    location: 'Bangalore, India',
    package: '7-12 LPA',
    requirements: [
      'B.Tech in Computer Science or related field',
      'Minimum 7.0 CGPA',
      'Strong problem-solving ability',
      'Knowledge of Java, Python, and databases',
    ],
    previousYearPapers: [
      { year: 2023, link: 'https://example.com/infosys-2023-paper' },
      { year: 2022, link: 'https://example.com/infosys-2022-paper' },
    ],
    paperPattern: 'https://placement.freshersworld.com/infosys-placement-papers/whole-testpaper/33136858',
    applynow:'https://intapidm.infosysapps.com/auth/realms/careersite/protocol/openid-connect/auth?client_id=careersite&redirect_uri=https%3A%2F%2Fcareer.infosys.com%2Fjobs%2Fprivacy-consent&state=dc643a81-837b-48bc-8c1e-f4b9ec84de71&response_mode=fragment&response_type=code&scope=openid&nonce=4b4b1e1a-0202-4a5d-83a4-c293fb682ddf',
  },
  {
    id: 5,
    name: 'Google',
    logo: 'https://neilpatel.com/wp-content/uploads/2019/08/google.jpg',
    location: 'Mountain View, USA',
    package: '30-40 LPA',
    requirements: [
      'B.Tech/M.Tech in Computer Science',
      'Proficiency in algorithms and data structures',
      'Strong programming skills in C++, Python, or Java',
    ],
    previousYearPapers: [
      { year: 2024, link: 'https://www.indiabix.com/placement-papers/google/#google_vignette' },
      { year: 2023, link: 'https://www.freshersnow.com/google-placement-papers/' },
    ],
    paperPattern: 'https://www.a2zinterviews.com/Interview/placement-papers/wipro-model-questions.php?m=5',
    applynow:'https://www.google.com/about/careers/applications/jobs/results',
  },
  {
    id: 6,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    location: "Hyderabad, India",
    package: "20-40 LPA",
    requirements: [
      "B.Tech/M.Tech in Computer Science",
      "Expertise in cloud computing, AI/ML, and system design",
    ],
    paperPattern: "https://cpt.hitbullseye.com/Microsoft-Test-Pattern.php?utm_source=chatgpt.com",
    applynow: "https://careers.microsoft.com/"
  },
  {
    id: 7,
    name: 'Wipro',
    logo: 'https://www.sealpath.com/wp-content/uploads/2022/10/wipro_primary-logo_color_rgb.png',
    location: 'Bangalore, India',
    package: '6-10 LPA',
    requirements: [
      'B.Tech in any discipline',
      'Minimum 6.5 CGPA',
      'Good communication and problem-solving skills',
    ],
    previousYearPapers: [
      { year: 2024, link: 'https://www.geeksforgeeks.org/tag/wipro-placement-papers/' },
      { year: 2023, link: 'https://www.geeksforgeeks.org/tag/wipro-placement-papers/' },
    ],
    paperPattern: 'https://prepinsta.com/wipro/',
    applynow:'https://careers.wipro.com/',
  },
  {
    id: 8,
    name: 'Accenture',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQOVBcGHjjS1rUdDZLNAZfC1c3SJJ4mwPSg&s',
    location: 'Chennai, India',
    package: '7-12 LPA',
    requirements: [
      'B.Tech in any discipline',
      'Minimum 7.0 CGPA',
      'Proficiency in Java, C++',
    ],
    previousYearPapers: [
      { year: 2023, link: 'https://example.com/accenture-2023-paper' },
      { year: 2022, link: 'https://example.com/accenture-2022-paper' },
    ],
    paperPattern: 'https://example.com/accenture-paper-pattern',
    applynow:'https://www.accenture.com/in-en/careers',
  },
  {
    id: 9,
    name: 'Amazon',
    logo: 'https://www.shutterstock.com/image-photo/haifa-israel-1-30-2023-600nw-2365769169.jpg',
    location: 'Hyderabad, India',
    package: '20-30 LPA',
    requirements: [
      'B.Tech in Computer Science or related field',
      'Minimum 8.5 CGPA',
      'Strong problem-solving and analytical skills',
      'Experience in programming languages like Java, Python, C++',
    ],
    previousYearPapers: [
      { year: 2024, link: 'https://www.geeksforgeeks.org/amazon-interview-questions/' },
      { year: 2023, link: 'https://www.geeksforgeeks.org/amazons-most-frequently-asked-interview-questions-set-2/' },
    ],
    paperPattern: 'https://miro.medium.com/v2/resize:fit:800/0*KbalNwM5P7FbqRRu.png',
    applynow:'https://amazon.jobs/en/',
  },
  {
    id: 10,
    name: 'Mahindra',
    logo: 'https://images.moneycontrol.com/static-mcnews/2023/10/Tech-Mahindra-770x431.jpg?impolicy=website&width=1600&height=900',
    location: 'Mumbai, India',
    package: '8-15 LPA',
    requirements: [
      'B.Tech in Computer Science or related field',
      'Minimum 7.0 CGPA',
      'Good knowledge of business processes and programming languages',
    ],
    previousYearPapers: [
      { year: 2023, link: 'https://example.com/mahindra-2023-paper' },
      { year: 2022, link: 'https://example.com/mahindra-2022-paper' },
    ],
    paperPattern: 'https://www.a2zinterviews.com/Interview/placement-papers/techmahindra-model-questions.php?m=2',
    applynow:'https://jobs.mahindracareers.com/',
  },
  {
    id: 11,
    name: 'IBM',
    logo: 'https://www.zdnet.com/a/img/2015/09/03/a214ff93-6574-4e1e-aa63-477b715d7c9a/ibm-logo-3.jpg',
    location: 'Remote',
    package: '15-22 LPA',
    requirements: [
      'B.Tech/M.Tech in Computer Science or equivalent',
      'Experience in AI/ML technologies',
      'Proficiency in Python, Java, and cloud platforms',
    ],
    previousYearPapers: [
      { year: 2023, link: 'https://www.siftforanswers.com/web?adid=735066117081&agid=172601764941&campaignid=22286935629&clid=amg-siftforanswers&ct=10754&gad_source=5&gclid=EAIaIQobChMI7uW5ne3wiwMVdziDAx3t8zIaEAAYAiAAEgIwD_D_BwE&kwid=kwd-377557209726&o=1673989&q=ibm+online+assessment+test&rch=ch1&utm_medium=gcpc&utm_source=g&qo=semQuery&an=google_s&tt=rmd&ad=semA&akid=1_22286935629_172601764941_kwd-377557209726_s_9300181' },
      { year: 2022, link: 'https://example.com/ibm-2022-paper' },
    ],
    paperPattern: 'https://www.freshersnow.com/ibm-placement-papers/',
    applynow:'https://www.ibm.com/in-en/careers',
  },
  
  {
    id: 12,
    name: "Larsen & Toubro (L&T)",
    logo: "https://cdn.slidesharecdn.com/ss_thumbnails/larsenandtoubroltd23-151111080518-lva1-app6892-thumbnail.jpg?width=640&height=640&fit=bounds",
    location: "Mumbai, India",
    package: "6-15 LPA",
    requirements: [
      "B.Tech/M.Tech in Civil, Mechanical, Electrical Engineering",
      "Experience in project management and construction"
    ],
    paperPattern: "https://example.com/lt-paper-pattern",
    applynow: "https://www.larsentoubro.com/corporate/careers/"
  },
  {
    id: 13,
    name: "BHEL",
    logo: "https://s3-symbol-logo.tradingview.com/bharat-heavy-electricals--600.png",
    location: "Delhi, India",
    package: "7-14 LPA",
    requirements: [
      "B.Tech/B.E. in Electrical, Mechanical, Electronics & Instrumentation",
      "Minimum 7.0 CGPA"
    ],
    paperPattern: "https://example.com/bhel-paper-pattern",
    applynow: "https://www.bhel.com/careers"
  },
  {
    id: 14,
    name: "Hyundai",
    logo: "https://dealerimages.dealereprocess.com/image/upload/2026576.jpg",
    location: "Chennai, India",
    package: "8-16 LPA",
    requirements: [
      "B.Tech in Automobile/Mechanical Engineering",
      "Knowledge of automotive design and manufacturing"
    ],
    paperPattern: "https://www.indiabix.com/placement-papers/hyundai/#google_vignette",
    applynow: "https://www.hyundai.com/worldwide/en/company/careers"
  },
  {
    id: 15,
    name: "Deloitte",
    logo: "https://makerworld.bblmw.com/makerworld/model/US113a4bbd841bd4/design/2023-12-02_c39cabfee208c.jpg",
    location: "Bangalore, India",
    package: "12-20 LPA",
    requirements: [
      "MBA, B.Tech, or related fields",
      "Experience in consulting, analytics, or risk management"
    ],
    paperPattern: "https://www.a2zinterviews.com/Interview/placement-papers/deloitte-model-questions.php?m=2",
    applynow: "https://www2.deloitte.com/global/en/careers.html"
  },
  {
    id: 16,
    name: "KPMG",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleEYqQONNDL5pKaTOd11j2upI1IFJEaE9qg&s",
    location: "Mumbai, India",
    package: "10-18 LPA",
    requirements: [
      "CA, MBA, or relevant qualifications",
      "Experience in auditing, risk consulting, or financial analysis"
    ],
    paperPattern: "https://cpt.hitbullseye.com/KPMG/KPMG-Test-Pattern.php",
    applynow: "https://home.kpmg/xx/en/home/careers.html"
  }
  ];
return (
  <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Placement Drives</h1>
      <div className="space-y-6">
        {companies.map(company => (
          <div key={company.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <img src={company.logo} alt={company.name} className="h-16 w-16 rounded-full object-cover" />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900">{company.name}</h2>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {company.location}
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      {company.package}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {company.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>
              {company.previousYearPapers && company.previousYearPapers.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Previous Year Papers</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {company.previousYearPapers.map((paper, index) => (
                      <li key={index}>
                        <a href={paper.link} className="text-indigo-600 hover:text-indigo-800" target="_blank" rel="noopener noreferrer">
                          {paper.year} Paper
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Paper Pattern</h3>
                <a href={company.paperPattern} target="_blank" className="text-indigo-600 hover:text-indigo-800">
                  View Paper Pattern
                </a>
              </div>
              <div className="mt-6">
                <a href={company.applynow} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 ease-in-out transform hover:scale-105">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};  
 export default PlacementDrives;
