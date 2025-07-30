'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ApplyForm from './ApplyForm';

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-6xl md:text-7xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Chat</span> with us, <span className="text-6xl md:text-7xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Grow</span> with us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take the first step towards your dream career. Let's build something amazing together!
            </p>
          </div>

          <ApplyForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}