const AnalyticsAISection = () => {
  return (
    <div className="py-20 text-white bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-6 ">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
              Insights Amplified,
            </span>
            <br />
            Decisions Simplified
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Turn complex data into clear, actionable strategies with AI that sees patterns humans miss.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            Uncover Insights →
          </button>
        </div>

        {/* How It Works */}
        {/* <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"> */}
            
            {/* Connect Step */}
            {/* <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Connect</h3>
              <p className="text-gray-300">Link your data sources</p>
            </div> */}

            {/* Analyze Step */}
            {/* <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Analyze</h3>
              <p className="text-gray-300">AI detects patterns and correlations</p>
            </div> */}

            {/* Decide Step */}
            {/* <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-all duration-300">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Decide</h3>
              <p className="text-gray-300">Get clear, actionable recommendations</p>
            </div>
          </div>
        </div> */}

        {/* Benefits Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Analytics Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
              <div className="text-3xl mb-4">🔮</div>
              <h3 className="text-xl font-bold mb-3">Predictive Power</h3>
              <p className="text-gray-300">See future trends before they happen</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 group">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">No Data Science Degree</h3>
              <p className="text-gray-300">Intuitive for business users</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Real-time Intelligence</h3>
              <p className="text-gray-300">Always-current insights</p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 group">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Confidence Metrics</h3>
              <p className="text-gray-300">Know exactly how reliable each insight is</p>
            </div>
          </div>
        </div>

        {/* Data Sources Integration */}
        <div className="mb-16">
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-6">Connect Everything</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {['Google Analytics', 'Salesforce', 'Shopify', 'MySQL', 'Excel', 'API', 'CRM', 'ERP'].map((source, index) => (
                <div key={index} className="bg-gray-700/50 px-4 py-2 rounded-lg border border-gray-600">
                  {source}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Builder */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
            <div className="text-4xl mb-4 text-green-400">"</div>
            <p className="text-xl italic mb-6">
              We identified $2M in cost savings our team had overlooked for years. The AI connected dots we didn't even know to look for.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold">
                LW
              </div>
              <div className="text-left">
                <div className="font-semibold">Lisa Wang, CFO</div>
                <div className="text-gray-400 text-sm">Fortune 500 Company</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Data-Driven Future Starts Here
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-powered analytics today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Start Analyzing Free
            </button>
            <button className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">No credit card required • 14-day free trial</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsAISection;