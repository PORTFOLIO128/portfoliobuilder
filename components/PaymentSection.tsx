'use client';

export default function PaymentSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Started for Just{' '}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ₹200
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The most affordable way to kickstart your career. One payment, lifetime impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Simple Payment Process
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pay ₹200 via UPI</h4>
                      <p className="text-gray-600">Scan QR code or use any UPI app</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mention 'Portfolio Building'</h4>
                      <p className="text-gray-600">Add this note in your payment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Contact Us</h4>
                      <p className="text-gray-600">Email or call with payment proof</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <i className="ri-check-line text-green-600 text-sm w-4 h-4 flex items-center justify-center"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Get Your Portfolio</h4>
                      <p className="text-gray-600">Delivered in 24 hours with free hosting</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <i className="ri-gift-line text-orange-600 w-5 h-5 flex items-center justify-center"></i>
                    <span className="font-semibold text-orange-800">Limited offer</span>
                  </div>
                  <p className="text-orange-700 text-sm">
                  currently providing hosting services contact us for more details
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <i className="ri-phone-line text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-gray-700">📞 +91-9342344427</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-mail-line text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                    <span className="text-gray-700">✉️ portfoliobuilderservice@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  Scan to Pay ₹200
                </h4>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg inline-block mb-6">
                  <img 
                    src="https://i.postimg.cc/gjzVJ8H9/Screenshot-20250730-160507.jpg"
                    alt="UPI Payment QR Code"
                    className="w-48 h-48 object-cover mx-auto"
                  />
                  <div className="mt-4 space-y-2">
                    <div className="text-sm text-gray-600">Supports all UPI apps</div>
                    <div className="flex items-center justify-center space-x-4">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">GPay</span>
                      <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">PhonePe</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Paytm</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-6">
                  After payment, contact us via phone or email to begin your portfolio creation
                </p>

                <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-red-700 font-semibold text-sm">
                    ⚠️ Important: Mention 'Portfolio Building' in payment description
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              💡 Why Choose Us?
            </h4>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24h</div>
                <div className="text-sm text-gray-600">Quick delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹0</div>
                <div className="text-sm text-gray-600">Free Template</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-gray-600">Already used</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}