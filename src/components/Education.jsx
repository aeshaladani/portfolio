import React from 'react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Indian Institute of Information Technology Vadodara',
      period: '2023 - 2027',
      details: [
        {
          name: 'CGPA',
          description: '8.62'
        },
        {
          name: 'Relevant Coursework',
          description: 'Data Structures and Algorithms, Object Oriented Programming, Database Management Systems, Software Engineering and Design, Machine Learning, Data Analysis.'
        },
        
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-normal text-gray-900">Education</h2>
      {education.map((edu, idx) => (
        <div key={idx} className="space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
            </div>
            <span className="text-sm text-gray-600 italic">{edu.period}</span>
          </div>
          {edu.details.map((detail, didx) => (
            <div key={didx} className="ml-4">
              <p className="text-gray-800">
                <span className="font-medium">{detail.name}: </span>{detail.description}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Education;