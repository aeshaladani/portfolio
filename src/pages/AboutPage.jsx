import React from 'react';
import { ProfileCard, WorkExperience, FAQSection, Education } from '../components';

const AboutPage = () => {
  return (
    <div className="flex gap-8">
      <div className="flex-1 space-y-8">
        <div>
          <h1 className="text-2xl text-blue-600 mb-2">Aesha Ladani</h1>
          <p className="text-gray-700 mb-6">
            Specialized in creating impactful web applications using Python, Nodejs, React, and modern databases, with a focus on solving real-world problems through technology.
          </p>
        </div>
        <Education />
        <WorkExperience />
        <FAQSection />
      </div>
      
      <aside className="w-80 flex-shrink-0">
        <ProfileCard />
      </aside>
    </div>
  );
};

export default AboutPage;