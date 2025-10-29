import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const BlockchainAISection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative py-20 text-white bg-gradient-to-b from-gray-900 to-black min-h-screen"
      style={{
        zIndex: 20, // Higher than hero's zIndex: 5
        position: "relative",
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div className="text-center mb-20" variants={containerVariants}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            >
              Intelligence Amplified,
            </motion.span>
            <br />
            <motion.span variants={itemVariants}>
              Complexity Simplified
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            variants={itemVariants}
          >
            Our AI transforms how you work and create, delivering superhuman
            capabilities with human-friendly simplicity.
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your AI Journey →
          </motion.button>
        </motion.div>

        {/* Blockchain & NFT Innovation Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          variants={containerVariants}
        >
          <motion.div variants={slideInVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Smart Contract Technology
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                & NFT Innovation
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Decentralized marketing powered by revolutionary blockchain
              technology.
              <br />
              Our open-source smart contract code ensures safety and long-term
              performance.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Auto-compounding features",
                "Transparent, verifiable code",
                "Community-driven development",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center"
                  variants={itemVariants}
                  custom={index}
                >
                  <motion.div
                    className="w-2 h-2 bg-green-400 rounded-full mr-3"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "100%",
                  label: "Transparent",
                  color: "text-green-400",
                },
                {
                  value: "24/7",
                  label: "Auto-compound",
                  color: "text-blue-400",
                },
                { value: "$0", label: "Hidden Fees", color: "text-purple-400" },
                { value: "Open", label: "Source", color: "text-yellow-400" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700/50 rounded-lg p-4 text-center backdrop-blur-sm"
                  variants={statsVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`text-2xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* How It Works */}
        <motion.div className="mb-20" variants={containerVariants}>
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "1",
                title: "Input",
                description: "Tell our AI what you need",
                color: "bg-blue-500",
              },
              {
                number: "2",
                title: "Process",
                description: "Watch as intelligent algorithms work their magic",
                color: "bg-purple-500",
              },
              {
                number: "3",
                title: "Output",
                description: "Receive perfectly tailored results",
                color: "bg-green-500",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center max-sm:flex max-sm:justify-between "
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 max-sm:mb-0 `}
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  <span className="text-2xl font-bold">{step.number}</span>
                </motion.div>
                <div className="max-sm:basis-2/3">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div className="mb-20" variants={containerVariants}>
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Why Choose Our AI Platform
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                emoji: "⚡",
                title: "10x Faster",
                description: "Accomplish more in less time",
              },
              {
                emoji: "🎯",
                title: "Zero Learning Curve",
                description: "Intuitive for everyone",
              },
              {
                emoji: "🚀",
                title: "Always Improving",
                description: "Gets smarter with every use",
              },
              {
                emoji: "🛡️",
                title: "Enterprise-Grade",
                description: "Reliable and secure",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700 backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  borderColor: "rgba(139, 92, 246, 0.5)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-3xl mb-3"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {benefit.emoji}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Builder */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          variants={containerVariants}
        >
          <motion.div
            className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="text-4xl mb-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              "
            </motion.div>
            <p className="text-xl italic mb-6">
              This AI just gets it. The results feel like they were created by a
              human expert, but delivered at machine speed.
            </p>
            <div className="font-semibold">Sarah Chen, Digital Director</div>
            <div className="text-gray-400 text-sm">Tech Innovations Inc.</div>
          </motion.div>
        </motion.div>

        {/* Final CTA */}
        <motion.div className="text-center" variants={containerVariants}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={itemVariants}
          >
            Your Future with AI Starts Here
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Experience the power of intelligent assistance today
          </motion.p>
          <motion.button
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            Get Started Now - It's Free
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlockchainAISection;
