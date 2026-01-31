import React, { useState, useEffect } from 'react';
import { Header, NavigationTabs, Footer } from './components';
import { AboutPage, ProjectsPage, SkillsPage, ContactPage, MapPage} from './pages';

function App() {
  const [searchQuery, setSearchQuery] = useState('Aesha Ladani');
  const [activeTab, setActiveTab] = useState('about');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const renderPage = () => {
    switch (activeTab) {
      case 'about':
        return <AboutPage setActiveTab={setActiveTab} />;
      case 'projects':
        return <ProjectsPage setActiveTab={setActiveTab} />;
      case 'skills':
        return <SkillsPage setActiveTab={setActiveTab} />;
      case 'contact':
        return <ContactPage setActiveTab={setActiveTab} />;
      case 'map':
        return <MapPage setActiveTab={setActiveTab} />;
      default:
        return <AboutPage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;