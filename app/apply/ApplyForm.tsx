
"use client";
import React, { useState } from "react";

export default function ApplyForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '', // Changed from 'contact' to 'number' to match backend
    career: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Enhanced validation
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validatePhone(formData.number)) {
      setError('Please enter a valid phone number');
      return;
    }

    if (!formData.career) {
      setError('Please select your career path');
      return;
    }

    setIsSubmitting(true);

    try {
      // Use environment variable for backend API URL (Next.js exposes NEXT_PUBLIC_ vars)
      const apiUrl = (process.env.NEXT_PUBLIC_API_URL || "https://portfoliobuilder-backend.vercel.app").replace(/\/$/, "");
      const response = await fetch(`${apiUrl}/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', number: '', career: '' }); // Reset form
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: typeof formData) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (error) setError('');
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

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your full name"
              required
              disabled={isSubmitting || isSubmitted}
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
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="your.email@example.com"
              required
              disabled={isSubmitting || isSubmitted}
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
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+91 9876543210"
              required
              disabled={isSubmitting || isSubmitted}
            />
          </div>

          {/* Career */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Career</label>
            <select
              name="career"
              value={formData.career}
              onChange={(e) => handleInputChange('career', e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              disabled={isSubmitting || isSubmitted}
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
            disabled={isSubmitting || isSubmitted}
            className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              isSubmitting || isSubmitted
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
            } text-white`}
          >
            {isSubmitting ? (
              <>
                <i className="ri-loader-4-line animate-spin mr-2"></i>
                Submitting...
              </>
            ) : isSubmitted ? (
              <>
                <i className="ri-check-line mr-2"></i>
                Submitted Successfully
              </>
            ) : (
              <>
                <i className="ri-send-plane-line mr-2"></i>
                Submit Application
              </>
            )}
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
                <a href="tel:+919342344427" className="font-bold text-blue-600 hover:text-blue-700">+91-9342344427</a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <i className="ri-mail-line text-blue-600"></i>
                <a href="mailto:portfoliobuilderservice@gmail.com" className="font-bold text-blue-600 hover:text-blue-700">portfoliobuilderservice@gmail.com</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
