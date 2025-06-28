"use client";
import { motion } from "motion/react";
import { features } from "@/app/utils/data";
const FeaturesSection = () => {
  return (
    <div className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-xl sm:text-4xl md:text-5xl font-bold text-primary">
            Powerful Features
          </h2>
          <p className="mx-auto text-sm text-muted-foreground font-bold sm:text-base md:text-lg max-w-3xl">
            Discover all the tools and features that make NewsHub your perfect
            news companion. Each feature is designed to enhance your reading
            experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                className="group cursor-pointer shadow-md hover:shadow-xl transition-all border-border border-2 hover:border-primary overflow-hidden rounded-lg shadow-md bg-background"
                key={index}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div>
                  <div className="flex flex-col sm:justify-center sm:flex-row ">
                    <div className="flex-shrink-0 p-6">
                      <div
                        className={`w-20 h-20 ${feature.colorClass} text-secondary-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}
                      >
                        <IconComponent className="h-16 w-16 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end p-2.5 rounded-full text-white" />
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-xl group-hover:text-primary transition-colors mb-3 font-semibold leading-none tracking-tight text-center sm:text-left">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {feature.description}
                      </p>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
