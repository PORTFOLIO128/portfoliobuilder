'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.jpg" 
                alt="Portfolio Builder" 
                width={180} 
                height={40} 
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#problem" className="text-gray-600 hover:text-blue-600 transition-colors">
              Why Portfolio?
            </Link>
            <Link href="#solution" className="text-gray-600 hover:text-blue-600 transition-colors">
              Our Service
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          <button className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all whitespace-nowrap cursor-pointer">
            <Link href="/apply" className="block">
              Build My Portfolio Now
            </Link>
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="py-4 space-y-4">
              <Link href="#problem" className="block text-gray-600 hover:text-blue-600">
                Why Portfolio?
              </Link>
              <Link href="#solution" className="block text-gray-600 hover:text-blue-600">
                Our Service
              </Link>
              <Link href="#pricing" className="block text-gray-600 hover:text-blue-600">
                Pricing
              </Link>
              <Link href="#contact" className="block text-gray-600 hover:text-blue-600">
                Contact
              </Link>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-medium whitespace-nowrap cursor-pointer">
                <Link href="/apply" className="block">
                  Build My Portfolio Now
                </Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
