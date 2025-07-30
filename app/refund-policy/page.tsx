import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Refund Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Transparent refund terms to ensure you understand our service commitment
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
                    Refund Policy
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We believe in transparency and want you to understand our refund terms before making a purchase.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                    <h3 className="text-xl font-semibold text-red-900 mb-3">
                      No Refunds
                    </h3>
                    <p className="text-red-800">
                      Payments made for portfolio building are non-refundable once the service begins.
                    </p>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">
                      Satisfaction Note
                    </h3>
                    <p className="text-green-800">
                      Upon receiving your portfolio template, you must confirm your satisfaction.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
                    <h3 className="text-xl font-semibold text-orange-900 mb-3">
                      Hosting Costs
                    </h3>
                    <p className="text-orange-800">
                      Hosting fees (if availed) are also non-refundable.
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">
                      Queries
                    </h3>
                    <p className="text-blue-800">
                      For any concerns, you may contact us via the details provided on our site.
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-500">
                    <h3 className="text-xl font-semibold text-purple-900 mb-3">
                      Acknowledgment
                    </h3>
                    <p className="text-purple-800">
                      By proceeding with payment, you acknowledge and accept this Refund Policy.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      Have Questions About Refunds?
                    </h3>
                    <p className="text-blue-100 mb-4">
                      Contact us for any refund-related concerns
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