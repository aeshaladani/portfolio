import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Computelib',
      period: '10/2025 - 12/2025',
      projects: [
        {
          name:'',
        description: 'Built scalable backend services and APIs for smooth communication between components and external platforms. Successfully reduced API response time by 25 percent, leading to a significantly enhanced user experience and improved customer satisfaction. Received positive feedback from end-users on enhanced system performance which raised the perception of the brand. Demonstrated exceptional leadership qualities by mentoring junior developers, providing guidance and assistance that elevated their technical skills, productivity and overall performance. Enhanced the website’s UI for improved usability, accessibility and consistent user experience.'
        }
      ]
    },
    // {
    //   title: 'Software Engineer',
    //   company: 'LTIMindtree',
    //   period: '03/2021 - 04/2023',
    //   projects: [
    //     {
    //       name: 'DHRE RealConnect',
    //       description: 'Developed a web application for Dubai Holding Real Estate from scratch as a frontend developer. Technologies used: React Js, Redux-thunk, Tailwind CSS, Axios, React-hook-form and Yup.'
    //     },
    //     {
    //       name: 'Informa Pharma Intelligence',
    //       description: 'Responsible for the logical part of frontend development such as API integration, Implementation of new features, Reusable components, and Bug fixes. Technologies used: React Js, Redux-saga, Redux-toolkit, Sass, Material Ui, Axios, Ag-grid-react, Formik and Yup.'
    //     }
    //   ]
    // }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-normal text-gray-900">Work Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
              <p className="text-gray-700">{exp.company}</p>
            </div>
            <span className="text-sm text-gray-600 italic">{exp.period}</span>
          </div>
          {exp.projects.map((project, pidx) => (
            <div key={pidx} className="ml-4">
              <p className="text-gray-800">
                <span className="font-medium">{project.name}</span> {project.description}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;