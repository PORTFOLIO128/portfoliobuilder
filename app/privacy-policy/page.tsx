import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We respect your privacy and are committed to protecting your personal information
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
                    Privacy Policy
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We respect your privacy. We only collect the details you provide — Name, Email Address, Contact Number, and Career choice — for the sole purpose of building your portfolio.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">
                      No Third-Party Sharing
                    </h3>
                    <p className="text-blue-800">
                      Your data is never shared with external parties.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">
                      Data Retention
                    </h3>
                    <p className="text-purple-800">
                      We keep your information until the completion of your portfolio.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">
                      Data Deletion
                    </h3>
                    <p className="text-green-800">
                      You may request deletion of your details anytime by contacting us.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">
                      Security
                    </h3>
                    <p className="text-orange-800">
                      We follow strict measures to ensure your data remains safe.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-gray-500">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Agreement
                    </h3>
                    <p className="text-gray-800">
                      By using our service, you agree to this Privacy Policy.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      Questions About Our Privacy Policy?
                    </h3>
                    <p className="text-blue-100 mb-4">
                      Contact us for any privacy-related concerns
                    </p>
                    <a 
                      href="mailto:portfoliobuilderservice@gmail.com" 
                      className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                      Contact Us
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