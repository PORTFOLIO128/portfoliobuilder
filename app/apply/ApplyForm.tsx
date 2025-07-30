'use client';

import { useState } from 'react';

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    career: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const careerOptions = [
    'Software Developer',
    'Data Analyst', 
    'Cloud Engineer',
    'QA Engineer',
    'Cybersecurity',
    'AI/ML Engineer',
    'UI/UX Designer',
    'Web Developer',
    'Business Analyst',
    'Intern',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.contact && formData.career) {
      setIsSubmitted(true);
    } else {
      // Show validation message or alert
      alert('Please fill in all required fields');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const selectCareer = (career: string) => {
    setFormData(prev => ({
      ...prev,
      career
    }));
    setIsDropdownOpen(false);
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="ri-user-add-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Start Your Journey</h2>
          <p className="text-gray-600">Fill in your details and we'll get back to you soon</p>
        </div>

        <form 
  action="https://formsubmit.co/portfoliobuilderservice@gmail.com" 
  method="POST" 
  className="space-y-6"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_subject" value="New Portfolio Application!" />
  <input type="hidden" name="_template" value="box" />
  <input type="hidden" name="" value="https://yourwebsite.com/thank-you" />

  {/* Name */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Enter your Name
    </label>
    <input
      type="text"
      name="name"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
      placeholder="Your full name"
      required
      minLength={2}
    />
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      E-mail Address
    </label>
    <input
      type="email"
      name="email"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
      placeholder="your.email@example.com"
      required
    />
  </div>

  {/* Contact */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Contact Number
    </label>
    <input
      type="tel"
      name="contact"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
      placeholder="+91 9876543210"
      required
    />
  </div>

  {/* Career */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Career
    </label>
    <select
      name="career"
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
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
    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
  >
    <i className="ri-send-plane-line mr-2 w-5 h-5 inline-flex items-center justify-center"></i>
    Submit Application
  </button>
</form>

        {isSubmitted && (
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-check-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Application Submitted!</h3>
              <p className="text-gray-700 mb-6">
                We will reach you soon as we're getting many requests. Or contact us directly!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <i className="ri-phone-line text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                  <a href="tel:+919342344427" className="font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                    +91-9342344427
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <i className="ri-mail-line text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                                <a href="mailto:portfoliobuilderservice@gmail.com" className="font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
                portfoliobuilderservice@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-center mt-8">
       
      </div>
    </div>
  );
}