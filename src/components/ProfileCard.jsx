import React from 'react';
import { Mail, Phone } from 'lucide-react';



const ProfileCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col items-center text-center mb-6">
        <img
          src="/abcd.jpeg"
          alt="Profile"
          className="w-48 h-48 rounded-lg mb-4 object-cover"
        />
        <p className="text-gray-700 leading-relaxed max-w-md text-sm">
          A passionate Computer Science Engineering student at IIIT Vadodara with hands-on experience in full-stack development and a strong foundation in data structures and algorithms. Worked as a Software Engineering Intern at Computelib, where she build scalable backend services and optimize system performance.
        </p>
      </div>
      
      <div className="space-y-3">
        <a href="https://drive.google.com/file/d/18DXkp7CeQo8rFq1X2XHSiPc5E9eypr-V/view?usp=sharing" className="flex items-center gap-3 text-blue-600 hover:underline" target="_blank"
  rel="noopener noreferrer">
          <span className="text-sm font-medium">Aesha's Resume</span>
        </a>
        
        <div className="flex items-center gap-3 text-gray-700">
          <Mail className="w-4 h-4" />
          <a href="mailto:ashaladani11@gmail.com" className="text-sm hover:underline break-words">
            ashaladani11@gmail.com
          </a>
        </div>
        
        <div className="flex items-center gap-3 text-gray-700">
          <Phone className="w-4 h-4" />
          <span className="text-sm">7984899713</span>
        </div>
        
        <div className="pt-3 space-y-2">
          <a href="https://www.linkedin.com/in/aesha-ladani-66b902278/" target="_blank"
  rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
className="block text-blue-600 hover:underline text-sm">Linkedin Profile</a>
          <a href="https://github.com/aeshaladani" target="_blank"
  rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
className="block text-blue-600 hover:underline text-sm">Github Profile</a>
          <a href="https://leetcode.com/u/aesha24/" target="_blank"
  rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
className="block text-blue-600 hover:underline text-sm">Leetcode profile</a>
          <a href="https://www.geeksforgeeks.org/user/ashaladcfsu/" target="_blank"
  rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
className="block text-blue-600 hover:underline text-sm">GeekforGeeks Profile</a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;