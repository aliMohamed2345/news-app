"use client";
import { stats } from "../../utils/data";
import { IoMdTrendingUp } from "react-icons/io";
import { staggerContainer } from "@/app/utils/animationVariant";
import { scaleIn } from "@/app/utils/animationVariant";
import { motion } from "motion/react";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          ></motion.div>

          <motion.h1
            className="text-2xl sm:text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to NewsHub
          </motion.h1>

          <motion.p
            className=" font-bold sm:text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your ultimate destination for breaking news, trending stories, and
            personalized content. Stay informed with real-time updates from
            trusted sources worldwide. Experience news like never before.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              className="text-lg px-8 py-3 bg-gradient-to-r from-gradient-warning-start to-gradient-warning-end hover:opacity-90 hover:scale-105 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-white transition-all "
              href="/trending"
            >
              <IoMdTrendingUp className="mr-2 h-5 w-5" />
              Explore Trending News
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-card rounded-lg p-4 hover:scale-105 transition-all cursor-pointer"
                variants={scaleIn}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-secondary-foreground font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-secondary-foreground opacity-60">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
