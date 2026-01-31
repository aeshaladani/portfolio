import React from 'react';
import { ProfileCard } from '../components';

const SkillsPage = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'C++', color: '#00599C', icon: '⚡' },
        { name: 'C', color: '#A8B9CC', icon: '💻' },
        { name: 'Python', color: '#3776AB', icon: '🐍' },
        { name: 'Java', color: '#007396', icon: '☕' },
        { name: 'JavaScript', color: '#F7DF1E', icon: '⚡' },
        { name: 'HTML5', color: '#E34F26', icon: '🌐' },
        { name: 'CSS', color: '#1572B6', icon: '🎨' },
        { name: 'Dart', color: '#0175C2', icon: '🎯' }
      ]
    },
    {
      category: 'Frameworks',
      skills: [
        { name: 'ReactJs', color: '#61DAFB', icon: '⚛️' },
        { name: 'Django', color: '#092E20', icon: '🎸' },
        { name: 'Flask', color: '#000000', icon: '🌶️' }
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'Flutter', color: '#02569B', icon: '📱' },
        { name: 'Firebase', color: '#FFCA28', icon: '🔥' },
        { name: 'MySQL', color: '#4479A1', icon: '🐬' },
        { name: 'MongoDB', color: '#47A248', icon: '🍃' },
        { name: 'Redis', color: '#DC382D', icon: '⚡' }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'VSCode', color: '#007ACC', icon: '💻' },
        { name: 'Android Studio', color: '#3DDC84', icon: '🤖' },
        { name: 'Git', color: '#F05032', icon: '📦' },
        { name: 'Linux', color: '#FCC624', icon: '🐧' },
        { name: 'Matlab', color: '#0076A8', icon: '📊' }
      ]
    },
    {
      category: 'Relevant Coursework',
      skills: [
        { name: 'Data Structures', color: '#8B5CF6', icon: '🌳' },
        { name: 'Algorithms', color: '#EC4899', icon: '🧮' },
        { name: 'OOP', color: '#F59E0B', icon: '🎯' },
        { name: 'DBMS', color: '#10B981', icon: '💾' },
        { name: 'Software Engineering', color: '#3B82F6', icon: '⚙️' },
        { name: 'Machine Learning', color: '#6366F1', icon: '🤖' },
        { name: 'Data Analysis', color: '#14B8A6', icon: '📈' }
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(skill => ({ ...skill, category: cat.category }))
  );

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-2xl text-gray-900 mb-2">Technical Skills</h1>
            <p className="text-sm text-gray-600">
              About {allSkills.length} results
            </p>
          </div>

          {/* Google Images Style Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allSkills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
                style={{ height: '180px' }}
              >
                {/* Skill Card */}
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center p-4"
                  style={{ backgroundColor: skill.color + '15' }}
                >
                  {/* Icon */}
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  
                  {/* Skill Name */}
                  <h3 
                    className="text-base font-semibold text-center mb-1"
                    style={{ color: skill.color }}
                  >
                    {skill.name}
                  </h3>
                  
                  {/* Category Badge */}
                  <span className="text-xs text-gray-600 bg-white px-2 py-1 rounded-full">
                    {skill.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200"></div>
              </div>
            ))}
          </div>

          {/* Category-wise breakdown */}
          <div className="mt-12 space-y-6">
            <h2 className="text-xl font-normal text-gray-900 border-b pb-2">Skills by Category</h2>
            
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-4 py-2 rounded-full border-2 hover:shadow-md transition-all cursor-pointer"
                      style={{ 
                        borderColor: skill.color,
                        backgroundColor: skill.color + '10'
                      }}
                    >
                      <span className="text-sm font-medium flex items-center gap-2">
                        <span>{skill.icon}</span>
                        <span style={{ color: skill.color }}>{skill.name}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Related Search */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-normal text-gray-900 mb-4">Related:</h3>
            <div className="flex flex-wrap gap-3">
              {['Web Development', 'Backend Development', 'Mobile Development', 'Database Design', 'Full Stack'].map((term, idx) => (
                <button
                  key={idx}
                  className="px-5 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <aside className="w-80 flex-shrink-0">
        <ProfileCard />
      </aside>
    </div>
  );
};

export default SkillsPage;