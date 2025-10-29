const BlockchainAISection = () => {
  return (
    <div className="py-20 text-white">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Intelligence Amplified,
            </span>
            <br />
            Complexity Simplified
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our AI transforms how you work and create, delivering superhuman capabilities with human-friendly simplicity.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            Start Your AI Journey →
          </button>
        </div>

        {/* Blockchain & NFT Innovation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Smart Contract Technology<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">& NFT Innovation</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Decentralized marketing powered by revolutionary blockchain technology.<br />
              Our open-source smart contract code ensures safety and long-term performance.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>Auto-compounding features</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>Transparent, verifiable code</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span>Community-driven development</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-sm text-gray-300">Transparent</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm text-gray-300">Auto-compound</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400">$0</div>
                <div className="text-sm text-gray-300">Hidden Fees</div>
              </div>
              <div className="bg-gray-700/50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400">Open</div>
                <div className="text-sm text-gray-300">Source</div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Input</h3>
              <p className="text-gray-300">Tell our AI what you need</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Process</h3>
              <p className="text-gray-300">Watch as intelligent algorithms work their magic</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Output</h3>
              <p className="text-gray-300">Receive perfectly tailored results</p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our AI Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">10x Faster</h3>
              <p className="text-gray-300">Accomplish more in less time</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Zero Learning Curve</h3>
              <p className="text-gray-300">Intuitive for everyone</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-xl font-bold mb-2">Always Improving</h3>
              <p className="text-gray-300">Gets smarter with every use</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold mb-2">Enterprise-Grade</h3>
              <p className="text-gray-300">Reliable and secure</p>
            </div>
          </div>
        </div>

        {/* Trust Builder */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
            <div className="text-4xl mb-4">"</div>
            <p className="text-xl italic mb-6">
              This AI just gets it. The results feel like they were created by a human expert, but delivered at machine speed.
            </p>
            <div className="font-semibold">Sarah Chen, Digital Director</div>
            <div className="text-gray-400 text-sm">Tech Innovations Inc.</div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Future with AI Starts Here
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the power of intelligent assistance today
          </p>
          <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            Get Started Now - It's Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockchainAISection;