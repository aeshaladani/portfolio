import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    { question: "What achievements Aesha have?", answer: "• Highest rating of 1462 on LeetCode which is a leading platform for competitive programming. •3 star rating on Geeks For Geeks with highest rating of 1647. •Received AWS AI & ML Scholarship from AWS, awarded to the top 2000 students out of 50000+ applicants. •Runner Up in Hack The Future 2025 for developing Sign Master. " },
    { question: "What skills Aesha have?", answer: "Languages: C++, C, Python, Java, JavaScript, HTML5, CSS, Dart.•Frameworks: ReactJs, Django, Flask.•Databases: Flutter, Firebase, MySQL, MongoDB, Redis.•Tools: VSCode, Android Studio, Git, Linux, Matlab" }
  ];

  return (
    <div className="space-y-2">
      <h3 className="text-xl font-normal text-gray-900 mb-4">People also ask:</h3>
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-gray-300 rounded">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full px-4 py-3 text-left flex justify-between items-center hover:bg-gray-50"
          >
            <span className="text-gray-800">{faq.question}</span>
            <span className="text-gray-500 text-xl">{openIndex === idx ? '−' : '+'}</span>
          </button>
          {openIndex === idx && (
            <div className="px-4 py-3 border-t border-gray-300 bg-gray-50">
              <p className="text-gray-700 whitespace-pre-line">
                {faq.answer.split('•').filter(Boolean).map((point, i) => (
                  <span key={i}>
                    {i > 0 && <br />}• {point.trim()}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;