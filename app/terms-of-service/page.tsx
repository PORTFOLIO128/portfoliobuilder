import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Clear terms that protect both you and us while ensuring a smooth service experience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div className="border-b border-gray-200 pb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Terms of Service
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    These terms outline the agreement between you and PortfolioBuilder for our portfolio creation service.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">
                      Service Provided
                    </h3>
                    <p className="text-blue-800">
                      Upon payment of ₹200, you will receive a personalized portfolio code designed to highlight your career profile.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">
                      Ownership
                    </h3>
                    <p className="text-purple-800">
                      The final portfolio belongs entirely to you, the student.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">
                      Hosting
                    </h3>
                    <p className="text-green-800">
                      Hosting is optional and available at an additional cost.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">
                      Support
                    </h3>
                    <p className="text-orange-800">
                      We provide hosting support only if purchased separately.
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-semibold text-red-900 mb-3">
                      Responsibility
                    </h3>
                    <p className="text-red-800">
                      You are responsible for providing accurate information during the portfolio creation.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-gray-500">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Acceptance
                    </h3>
                    <p className="text-gray-800">
                      Use of this service signifies acceptance of these Terms.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      Ready to Get Started?
                    </h3>
                    <p className="text-blue-100 mb-4">
                      Build your professional portfolio today
                    </p>
                    <a 
                      href="/apply" 
                      className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                      Start Building Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 