import React from 'react';
import { MapPin, Globe, Clock, Navigation, Phone, Mail } from 'lucide-react';
import { ProfileCard } from '../components';

const MapPage = () => {
  // Location information
  const locationInfo = {
    country: 'India',
    state: 'Gujarat',
    timezone: 'IST (UTC+5:30)',
    availability: 'Available for remote work worldwide'
  };

  // Work preferences
  const workPreferences = [
    { icon: Globe, label: 'Remote Work', value: 'Preferred', color: '#4285F4' },
    { icon: Clock, label: 'Availability', value: 'Full-time / Part-time', color: '#34A853' },
    { icon: Navigation, label: 'Relocation', value: 'Open to opportunities', color: '#FBBC04' },
    { icon: MapPin, label: 'Time Zone', value: 'IST (UTC+5:30)', color: '#EA4335' }
  ];

  // Cities/regions open to work
  const openToWork = [
    { city: 'Remote', country: 'Worldwide', type: 'Preferred' },
    { city: 'Bangalore', country: 'India', type: 'Open' },
    { city: 'Mumbai', country: 'India', type: 'Open' },
    { city: 'Hyderabad', country: 'India', type: 'Open' },
    { city: 'Pune', country: 'India', type: 'Open' },
    { city: 'Delhi NCR', country: 'India', type: 'Open' }
  ];

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <div className="space-y-8 max-w-4xl">
          {/* HEADER */}
          <div>
            <h1 className="text-2xl text-gray-900 mb-2"></h1>
            <p className="text-sm text-gray-600">
              {/* Find out where I'm located and my work preferences */}
            </p>
          </div>

          {/* MAP PLACEHOLDER - Large visual card */}
          {/* <div className="bg-gradient-to-br from-blue-100 via-green-50 to-yellow-50 rounded-lg border-2 border-gray-200 overflow-hidden">
            <div className="relative h-80 flex items-center justify-center">
              {/* India Map Icon/Representation }
              <div className="text-ce
              nter">
                <div className="text-8xl mb-4">🇮🇳</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">India</h2>
                <p className="text-lg text-gray-600">Gujarat</p>
                <div className="mt-4 inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span className="font-medium text-gray-700">Currently based in Gujarat, India</span>
                </div>
              </div> */}
              
              {/* Decorative pins */}
              {/* <div className="absolute top-10 left-10 animate-bounce">
                <MapPin className="w-8 h-8 text-red-500" />
              </div>
              <div className="absolute bottom-10 right-10 animate-pulse">
                <Globe className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </div> */}

          {/* WORK PREFERENCES GRID */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workPreferences.map((pref, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: pref.color + '20' }}
                  >
                    <pref.icon
                      className="w-6 h-6"
                      style={{ color: pref.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-1">
                      {pref.label}
                    </h3>
                    <p className="text-lg font-semibold text-gray-900">
                      {pref.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          {/* LOCATION DETAILS CARD */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              Current Location
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Country</span>
                <span className="font-semibold text-gray-900">{locationInfo.country}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">State</span>
                <span className="font-semibold text-gray-900">{locationInfo.state}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Time Zone</span>
                <span className="font-semibold text-gray-900">{locationInfo.timezone}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Current Time</span>
                <span className="font-semibold text-gray-900">
                  {new Date().toLocaleTimeString('en-IN', { 
                    timeZone: 'Asia/Kolkata',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* OPEN TO WORK IN - Cities list */}
          {/* <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-blue-600" />
              Open to Work In
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {openToWork.map((location, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                    location.type === 'Preferred'
                      ? 'bg-blue-50 border-blue-300'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{location.city}</h4>
                      <p className="text-sm text-gray-600">{location.country}</p>
                    </div>
                    {location.type === 'Preferred' && (
                      <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-medium">
                        Preferred
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* AVAILABILITY NOTICE */}
          {/* <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Currently Available
                </h3>
                <p className="text-gray-700 mb-3">
                  I'm actively looking for new opportunities and available to start immediately.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                    ✅ Full-time roles
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                    ✅ Contract work
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                    ✅ Remote projects
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                    ✅ Freelance opportunities
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          {/* CONTACT QUICK ACCESS */}
          {/* <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:ashaladani11@gmail.com"
                className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-700">ashaladani11@gmail.com</span>
              </a>
              <a
                href="tel:+917984899713"
                className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">+91 7984899713</span>
              </a>
            </div>
          </div> */}

          {/* RELATED SEARCHES */}
          {/* <div className="pt-8 border-t border-gray-200">
            <h3 className="text-xl font-normal text-gray-900 mb-4">Related:</h3>
            <div className="flex flex-wrap gap-3">
              {['Remote Jobs in India', 'Software Developer India', 'Tech Jobs Gujarat', 'Hire Developer'].map((term, idx) => (
                <button
                  key={idx}
                  className="px-5 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* SIDEBAR - Profile card */}
      <aside className="w-80 flex-shrink-0">
        <ProfileCard />
      </aside>
    </div>
  );
};

export default MapPage;