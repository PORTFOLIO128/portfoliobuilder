'use client';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Don't Wait—Opportunities Won't!
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Every day you delay is another day your competition gets ahead. 
          Start building your professional presence today and land your dream job tomorrow.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all whitespace-nowrap cursor-pointer">
            Get Started Now - Only ₹200
          </button>
          <div className="text-white">
            <div className="text-sm">⏰ Limited Time Offer</div>
            <div className="font-semibold">Providing hosting service</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-time-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Quick Turnaround</h3>
            <p className="text-blue-100">Your portfolio ready in 24 hours</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">100% Satisfaction</h3>
            <p className="text-blue-100">Revisions until you're happy</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-trophy-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
            <p className="text-blue-100">50+ Students already used</p>
          </div>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
          <h4 className="text-xl font-bold text-white mb-4">
            🔥 What Our Students Say
          </h4>
          <blockquote className="text-blue-100 italic">
            "Got my dream job after using this platform
                   Worth for investing ₹200!"
          </blockquote>
          
        </div>
      </div>
    </section>
  );
}