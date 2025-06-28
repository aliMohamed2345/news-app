"use client";
import { motion } from "motion/react";
import { staggerContainer } from "@/app/utils/animationVariant";
import { scaleIn } from "@/app/utils/animationVariant";
import { newsCategoriesLandingPage } from "@/app/utils/data";
import Link from "next/link";
const NewsCategoriesPreviewSection = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold mb-4 text-primary text-xl sm:text-4xl md:text-5xl">
            Explore News Categories
          </h2>
          <p className="text-sm text-muted-foreground mx-auto font-bold sm:text-base md:text-lg max-w-3xl sm:text-base md:text-lg ">
            Dive deep into the topics that matter most to you. From breaking
            business news to the latest tech innovations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {newsCategoriesLandingPage.map((category, index) => (
            <motion.div
              className={`border-border border bg-secondary p-5 rounded-md`}
              key={index}
              variants={scaleIn}
            >
              <Link
                href={`/category/${category.name.toLowerCase()}`}
                className="text-center cursor-pointer hover:shadow-lg transition-all hover:scale-105 rounded-lg text-card-foreground shadow-sm"
              >
                <div className="">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-secondary-foreground">
                    {category.count}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            className="inline-flex items-center justify-center gap-2 p-5 rounded-md  font-bold text-secondary-foreground whitespace-nowrap transition-all bg-gradient-to-r from-gradient-warning-start to-gradient-warning-end hover:opacity-90 hover:scale-105"
            href={`/category/general`}
          >
            View All Categories
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NewsCategoriesPreviewSection;
