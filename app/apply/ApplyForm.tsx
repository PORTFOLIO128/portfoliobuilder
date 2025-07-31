'use client';

import { useState } from 'react';

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '', // Changed from 'contact' to 'number' to match backend
    career: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.number || !formData.career) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      // For local development - use your local backend
      const response = await fetch('https://portfoliobackend-nh3xjva6d-bhuvaneshs-projects-37345e6a.vercel.app/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        alert(`Failed to submit: ${errorData.error || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-user-add-line text-white text-2xl w-8 h-8"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Start Your Journey</h2>
          <p className="text-gray-600">Fill in your details and we'll get back to you soon</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="Your full name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-mail Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="your.email@example.com"
              required
            />
          </div>

          {/* Contact - Changed name to 'number' */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={(e) => handleInputChange('number', e.target.value)}
              className="w-full px-4 py-3 border rounded-lg"
              placeholder="+91 9876543210"
              required
            />
          </div>

          {/* Career */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Career</label>
            <select
              name="career"
              value={formData.career}
              onChange={(e) => handleInputChange('career', e.target.value)}
              className="w-full px-4 py-3 border rounded-lg"
              required
            >
              <option value="">Select your career path *</option>
              <option>Software Developer</option>
              <option>Data Analyst</option>
              <option>Cloud Engineer</option>
              <option>Cybersecurity Specialist</option>
              <option>AI/ML Engineer</option>
              <option>UI/UX Designer</option>
              <option>QA Engineer</option>
              <option>Business Analyst</option>
              <option>Intern</option>
              <option>Other</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg"
          >
            <i className="ri-send-plane-line mr-2"></i>
            Submit Application
          </button>
        </form>

        {isSubmitted && (
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-white text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Application Submitted!</h3>
            <p className="text-gray-700 mb-6">
              We will reach you soon as we're getting many requests. Or contact us directly!
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <i className="ri-phone-line text-blue-600"></i>
                <a href="tel:+919342344427" className="font-bold text-blue-600">+91-9342344427</a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <i className="ri-mail-line text-blue-600"></i>
                <a href="mailto:portfoliobuilderservice@gmail.com" className="font-bold text-blue-600">portfoliobuilderservice@gmail.com</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
