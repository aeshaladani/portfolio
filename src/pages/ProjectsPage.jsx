import React from 'react';
import { Search, Github } from 'lucide-react';
import { ProfileCard } from '../components';

const ProjectsPage = ({ setActiveTab }) => {
  const projects = [
    {
      title: 'Bus Management System',
      subtitle: 'React, Node.js, Express, MongoDB, JWT',
      date: 'Dec 2025 - Jan 2026',
      description: 'A comprehensive MERN stack application for managing bus transportation services at the institution level. Streamlines bus bookings, driver assignments, route management, and real-time notifications.',
      highlights: [
        'Built a smart booking system that allows students to book bus seats only on operating days with real-time seat availability',
        'Implemented auto-notifications using Node-cron that sends departure alerts to passengers 5 minutes before the bus leaves',
        'Designed role-based dashboards for Students, Drivers, and Admins with JWT authentication and secure access control',
        'Built demand analysis feature that auto-suggests additional buses when occupancy exceeds 85%',
        'Integrated complaint management system where students can file, track complaints and admins can respond',
        'Configured operating days per bus and targeted notifications so only today\'s passengers are notified'
      ],
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="90"%3E%3Crect fill="%231D4ED8" width="160" height="90"/%3E%3Crect fill="%233B82F6" x="10" y="10" width="140" height="70" rx="4"/%3E%3Ctext x="80" y="50" font-size="30" text-anchor="middle" fill="white"%3E🚌%3C/text%3E%3C/svg%3E',
      githubLink: ''
    },
    {
      title: 'Sign Master',
      subtitle: 'Django, OpenCV',
      date: 'March 2025 - April 2025',
      description: 'Developed an interactive learning platform empowering deaf and mute community to learn American Sign Language.',
      highlights: [
        'Designed an efficient image processing pipeline using OpenCV, reducing inference time',
        'Implemented caching and optimized ORM queries to speed up content loading',
        'Achieved high performance with optimized database schema (SQLite), enabling smooth user experience',
        'Integrated Django\'s authentication and session management, ensuring secure user profiles and progress tracking'
      ],
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="90"%3E%3Crect fill="%234F46E5" width="160" height="90"/%3E%3Crect fill="%236366F1" x="10" y="10" width="140" height="70" rx="4"/%3E%3Ctext x="80" y="50" font-size="24" text-anchor="middle" fill="white"%3E👋%3C/text%3E%3C/svg%3E',
      githubLink: ''
    },
    {
      title: 'SheCares',
      subtitle: 'Django, MySQL, Tailwind CSS, JavaScript, HTML',
      date: 'Feb 2025 - April 2025',
      description: 'Developed a digital platform connecting women with gynecologists and designed role-specific dashboards for both patients and gynecologists.',
      highlights: [
        'Designed RESTful APIs and optimized 100+ complex SQL queries, improving response time',
        'Streamlined data management with a MySQL database',
        'Implemented database indexing and normalization for fast data retrieval'
      ],
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="90"%3E%3Crect fill="%23EC4899" width="160" height="90"/%3E%3Crect fill="%23F472B6" x="10" y="10" width="140" height="70" rx="4"/%3E%3Ctext x="80" y="50" font-size="24" text-anchor="middle" fill="white"%3E💖%3C/text%3E%3C/svg%3E',
      githubLink: ''
    },
    {
      title: 'ResolveHub',
      subtitle: 'Django, PyQt5, SQLite',
      date: 'Feb 2025 - Mar 2025',
      description: 'Built a complaint management system for hostel residents using agile methodology, enabling users to file, track, and upvote complaints seamlessly and increases efficiency by 30%.',
      highlights: [
        'Practiced MVC architecture which helps separate frontend and backend and maintain clean code',
        'Implemented unit and integration tests using PyTest to ensure reliability and stability',
        'Enhanced user experience with a modern PyQt5 interface',
        'Secured user authentication and role-based access control with Django REST Framework'
      ],
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="90"%3E%3Crect fill="%2310B981" width="160" height="90"/%3E%3Crect fill="%2334D399" x="10" y="10" width="140" height="70" rx="4"/%3E%3Ctext x="80" y="50" font-size="24" text-anchor="middle" fill="white"%3E📝%3C/text%3E%3C/svg%3E',
      githubLink: ''
    },
    {
      title: 'Resume Builder',
      subtitle: 'Flask, MongoDB, React.js',
      date: 'Jan 2025 - Mar 2025',
      description: 'Developed a real-time platform to suggest personalized career paths, real-time job tracking and enhance interview readiness empowering users to build impactful, job aligned profiles.',
      highlights: [
        'Designed scalable MongoDB schema with optimized indexing to support fast profile and job-query retrieval',
        'Integrated Google Gemini API for AI-powered career suggestions',
        'Implemented MediaPipe for interview practice features'
      ],
      thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="160" height="90"%3E%3Crect fill="%23F59E0B" width="160" height="90"/%3E%3Crect fill="%23FBBF24" x="10" y="10" width="140" height="70" rx="4"/%3E%3Ctext x="80" y="50" font-size="24" text-anchor="middle" fill="white"%3E📄%3C/text%3E%3C/svg%3E',
      githubLink: ''
    }
  ];

  // Tab names match your activeTab values in App.jsx
  const relatedSearch = [
    { label: "Aesha's Skills", tab: 'skills' },
    { label: "Aesha's Experience", tab: 'about' },
    { label: "Contact Aesha", tab: 'contact' },
    { label: "Aesha's Education", tab: 'about' }
  ];

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <div className="space-y-6 max-w-4xl">
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group">
                <div className="flex gap-4 hover:bg-gray-50 p-4 rounded-lg transition-colors cursor-pointer">
                  <div className="w-40 h-24 bg-gray-900 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-normal text-blue-600 hover:underline mb-1 flex items-center gap-2">
                      {project.title}
                      <span className="text-green-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </h3>

                    <p className="text-sm text-gray-700 mb-2 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="font-medium">{project.subtitle}</span>
                      <span>·</span>
                      <span>{project.date}</span>
                    </div>

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-2 text-sm text-blue-600 hover:underline"
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>

                <details className="ml-44 mt-2">
                  <summary className="cursor-pointer text-sm text-gray-700 hover:bg-gray-100 px-4 py-2 rounded flex items-center gap-2">
                    <span className="text-gray-500">▶</span>
                    <span className="font-medium">Key highlights</span>
                  </summary>
                  <div className="mt-2 px-4 py-3 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                    <ul className="space-y-2">
                      {project.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </div>
            ))}
          </div>

          {/* Related Search - now navigates using setActiveTab */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-normal text-gray-900 mb-4">Related Search:</h3>
            <div className="grid grid-cols-2 gap-3">
              {relatedSearch.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(item.tab)}
                  className="px-5 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-left flex items-center gap-3 transition-colors"
                >
                  <Search className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-800 text-sm">{item.label}</span>
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

export default ProjectsPage;