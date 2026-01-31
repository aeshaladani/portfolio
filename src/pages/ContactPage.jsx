import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, Copy, Check, ExternalLink, Loader2 } from 'lucide-react';
import { ProfileCard } from '../components';

const ContactPage = () => {
  const [copied, setCopied] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  const contactInfo = [
    {
      type: 'Email',
      value: 'ashaladani11@gmail.com',
      icon: Mail,
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=ashaladani11@gmail.com',
      color: '#EA4335',
      description: 'Send me an email'
    },
    {
      type: 'Phone',
      value: '+91 7984899713',
      icon: Phone,
      link: 'https://wa.me/917984899713',
      color: '#34A853',
      description: 'WhatsApp or call me'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/aesha-ladani-66b902278',
      icon: Linkedin,
      link: 'https://linkedin.com/in/aesha-ladani-66b902278',
      color: '#0A66C2',
      description: 'Connect on LinkedIn'
    }
  ];

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendMessage = async () => {
    const { name, email, subject, message } = formData;
    
    if (!name || !email || !subject || !message) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS credentials not found in environment variables');
      setStatus('config-error');
      setTimeout(() => setStatus(''), 5000);
      return;
    }

    setSending(true);
    setStatus('');

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'ashaladani11@gmail.com'
          }
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setStatus('error');
    } finally {
      setSending(false);
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="flex gap-8">
      <div className="flex-1">
        <div className="space-y-8 max-w-4xl">
          <div>
            <h1 className="text-2xl text-gray-900 mb-2">Contact Aesha Ladani</h1>
          </div>

          <div className="space-y-4">
            {contactInfo.map((contact, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: contact.color + '15' }}
                  >
                    <contact.icon
                      className="w-6 h-6"
                      style={{ color: contact.color }}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {contact.type}
                      </h3>
                      <button
                        onClick={() => handleCopy(contact.value, contact.type)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        title="Copy to clipboard"
                      >
                        {copied === contact.type ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-500" />
                        )}
                      </button>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">
                      {contact.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 font-medium">{contact.value}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ashaladani11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white p-4 rounded-lg hover:shadow-md transition-all border border-gray-200"
              >
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium text-gray-700">Send Email</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aesha-ladani-66b902278/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white p-4 rounded-lg hover:shadow-md transition-all border border-gray-200"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">LinkedIn Profile</span>
              </a>

              <a
                href="https://wa.me/917984899713"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white p-4 rounded-lg hover:shadow-md transition-all border border-gray-200"
              >
                <Phone className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Send a Message Directly</h3>
            
            {status === 'success' && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm font-medium">✓ Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}
            
            {status === 'error' && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm font-medium">⚠ Please fill in all fields or try again later.</p>
              </div>
            )}

            {status === 'config-error' && (
              <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800 text-sm font-medium">⚠ EmailJS not configured. Please add environment variables.</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={sending}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:bg-gray-100"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={sending}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:bg-gray-100"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={sending}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:bg-gray-100"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={sending}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none disabled:bg-gray-100"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                onClick={handleSendMessage}
                disabled={sending}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
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

export default ContactPage;