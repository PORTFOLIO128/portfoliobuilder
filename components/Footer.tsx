'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="font-pacifico text-2xl text-blue-400 mb-4 inline-block">
              PortfolioBuilder
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering students and job seekers to land their dream jobs with professional portfolios. 
              Your success is our mission.
            </p>
            <div className="flex space-x-4">
              
              <a href="https://www.instagram.com/portfoliobuilders128/" target="_blank" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a href="https://wa.me/919342344427" target="_blank" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <i className="ri-whatsapp-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="#problem" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Why Portfolio?
              </Link>
              <Link href="#solution" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Our Service
              </Link>
              <Link href="#pricing" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-blue-400 w-5 h-5 flex items-center justify-center"></i>
                <span className="text-gray-300">+91-9342344427</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-blue-400 w-5 h-5 flex items-center justify-center"></i>
                <span className="text-gray-300">portfoliobuilderservice@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-blue-400 w-5 h-5 flex items-center justify-center mt-0.5"></i>
                <span className="text-gray-300">
                  Chennai,Tamilnadu<br />
                  India - 600078
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              2024 PortfolioBuilder. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-300 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund-policy" className="text-gray-300 hover:text-blue-400 transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-6">
            <h5 className="text-xl font-bold text-blue-400 mb-2">
              Ready to Transform Your Career?
            </h5>
            
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all whitespace-nowrap cursor-pointer">
              <Link href="/apply" className="block">
                Start Building Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
