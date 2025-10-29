const AIPotentialSection = () => {
  return (
    <div className="py-20 text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Artificial Intelligence</span><br />
            Meets Human Potential
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto max-sm:text-justify">
            Decentralized non-playing platform based on smart contracts that unites people from around the world 
            and opens the boundless possibilities of the new economic financial system
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Documentation Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Documentation</h3>
              <p className="text-gray-300 mb-6">Participant learning platform</p>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              Start Learning
            </button>
          </div>

          {/* AI Powered Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 relative">
            <div className="absolute -top-3 -right-3">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-bold px-3 py-1 rounded-full">
                AI POWERED
              </span>
            </div>
            <div className="mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">AI Powered</h3>
              <p className="text-gray-300 mb-6">Suggest optimal business strategies based on historical data and market analysis</p>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>

          {/* Live Chat Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Live Chat</h3>
              <p className="text-gray-300 mb-6">Platform where you can ask questions to experienced participants</p>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              Find a Mentor
            </button>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Join the Decentralized Revolution</h3>
            <p className="text-gray-300 mb-6">
              Our smart contract-based platform eliminates intermediaries, ensuring transparent, secure, 
              and efficient financial operations while connecting a global community of innovators.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-gray-700 px-4 py-2 rounded-full">Smart Contracts</span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">Global Community</span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">Transparent Economy</span>
              <span className="bg-gray-700 px-4 py-2 rounded-full">AI Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPotentialSection;