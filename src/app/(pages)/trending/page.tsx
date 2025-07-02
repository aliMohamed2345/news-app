"use client";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import ArticlesGrid from "@/app/components/Articles/ArticlesGrid";
const Trending = () => {
  return (
    <section className="pt-17">
      <div className="container mx-auto w-full px-4">
        {/* Hero Section */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-gradient-secondary-start  to-gradient-secondary-end text-white rounded-b-xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              className="text-center space-y-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center items-center gap-5 mb-6">
                <div className="w-16 h-16 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-105 transition-all">
                  <FaFire className="h-8 w-8 text-white" />
                </div>
                <div className="w-12 h-12 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-105 transition-all text-primary">
                  <FiTrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="w-14 h-14 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-105 transition-all">
                  <AiFillStar className="h-7 w-7 text-white" />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold bg-white bg-clip-text text-transparent">
                Trending Now
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Discover the most popular stories and breaking news that
                everyone is talking about
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <ArticlesGrid type={`trending`} country={`us`} />
    </section>
  );
};

export default Trending;
