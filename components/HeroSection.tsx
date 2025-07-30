'use client';

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20technology%20workspace%20with%20laptops%2C%20coding%20screens%2C%20and%20creative%20design%20elements%20in%20bright%20office%20environment%20with%20natural%20lighting%2C%20professional%20atmosphere%2C%20clean%20minimalist%20setup%2C%20inspiring%20productivity%20vibes%2C%20soft%20shadows%20and%20contemporary%20furniture&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`
        }}
      ></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Your Dream Job Starts with the{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Right Portfolio
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Stand out from thousands of applicants. Get noticed by top IT MNCs. 
              Your portfolio is your gateway to success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all whitespace-nowrap cursor-pointer">
               <Link href="/apply" className="block">
                  Build My Portfolio Now
               </Link>
              </button>
              <button className="border-2 border-gray-300 bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
                See Examples
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-500">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-500">Already Used</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">24hr</div>
                <div className="text-sm text-gray-500">Quick Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20young%20diverse%20students%20and%20job%20seekers%20working%20on%20laptops%20in%20modern%20coworking%20space%2C%20bright%20natural%20lighting%2C%20collaborative%20atmosphere%2C%20technology%20and%20creativity%2C%20inspiring%20workspace%20with%20plants%20and%20modern%20furniture%2C%20success%20and%20achievement%20vibes&width=600&height=800&seq=hero-img-001&orientation=portrait"
                alt="Students building portfolios"
                className="w-full h-96 lg:h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <i className="ri-check-line text-green-600 text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Portfolio Ready!</div>
                  <div className="text-sm text-gray-500">Land your dream job</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">₹200</div>
                <div className="text-sm">Only</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}