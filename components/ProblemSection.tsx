'use client';

export default function ProblemSection() {
  const problems = [
    {
      icon: 'ri-file-text-line',
      title: 'Resumes Get Lost',
      description: 'Your resume disappears in a pile of thousands. No way to stand out.'
    },
    {
      icon: 'ri-eye-off-line',
      title: 'Skills Stay Hidden',
      description: 'Your real talents and projects remain invisible to recruiters.'
    },
    {
      icon: 'ri-user-line',
      title: 'No Personal Brand',
      description: 'Without a portfolio, you are just another name in the database.'
    },
    {
      icon: 'ri-time-line',
      title: 'Missed Opportunities',
      description: 'Great companies skip candidates without impressive portfolios.'
    }
  ];

  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Most Students{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Never Get Hired
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The harsh truth: In today's competitive job market, resumes alone don't cut it. 
            Here's what's holding you back.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <i className={`${problem.icon} text-red-600 text-2xl w-8 h-8 flex items-center justify-center`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The Reality Check
          </h3>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Top IT companies like Google, Microsoft, and Amazon receive millions of applications. 
            They shortlist candidates based on portfolios, not just resumes. 
            <span className="font-semibold text-red-600"> Don't be another overlooked candidate.</span>
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">90%</div>
              <div className="text-sm text-gray-600">Resumes Ignored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">3x</div>
              <div className="text-sm text-gray-600">Higher Callback Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}