'use client';

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Career with a{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Professional Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We create stunning, professional portfolios that make recruiters stop scrolling and start calling. 
            Your success story begins here.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                What You Get
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-green-600 text-sm w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Professional Design</div>
                    <div className="text-gray-600">Custom-designed to match your field and goals</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-green-600 text-sm w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Project Showcases</div>
                    <div className="text-gray-600">Interactive demos of your best work</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-green-600 text-sm w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Certificate Showcase</div>
                    <div className="text-gray-600">Showcase your certificates and achievements</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <i className="ri-check-line text-green-600 text-sm w-4 h-4 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24-Hour Delivery</div>
                    <div className="text-gray-600">Your portfolio ready in just one day</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://i.postimg.cc/ydscMrwQ/1c34161068e7872cae7087d259a5a5a5.jpg"
                alt="Portfolio example"
                className="w-full h-80 object-cover object-top rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
