"use client";
import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/app/utils/animationVariant";
import { whyChooseUs } from "@/app/utils/data";
const WhyChooseUsSection = () => {
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
            Why Choose NewsHub?
          </h2>
          <p className="font-bold sm:text-base md:text-lg max-w-3xl mx-auto text-muted-foreground">
            We&apos;re not just another news app. We&apos;re your intelligent
            news companion, designed to deliver the most relevant, accurate, and
            timely information tailored to your interests.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {whyChooseUs.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-center hover:shadow-lg flex flex-col items-center justify-center gap-5 transition-shadow rounded-lg border bg-card text-card-foreground shadow-sm min-h-[300px]">
                  <div className={`flex flex-col space-y-1.5 p-2`}>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-gradient-purple-start to-gradient-purple-end rounded-full flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold leading-none tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <div className={`p-6 pt-0`}>
                    <p className="text-secondary-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
