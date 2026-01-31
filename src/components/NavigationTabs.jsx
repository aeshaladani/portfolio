import React from 'react';
import { Search, Phone, MapPin } from 'lucide-react';

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'About', icon: Search },
    { id: 'skills', label: 'Skills', icon: null },
    { id: 'projects', label: 'Projects', icon: null },
    { id: 'contact', label: 'Contact', icon: Phone },
    { id: 'map', label: 'Map', icon: MapPin }
  ];

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="flex gap-8 px-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 py-3 border-b-2 transition-colors ${
              activeTab === tab.id 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.icon && <tab.icon className="w-4 h-4" />}
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationTabs;