import { motion } from "motion/react";
import { IconType } from "react-icons";

interface ArticleHeaderProps {
  title: string;
  description: string;
  icon: IconType;
  style?: string;
}

const ArticleHeader = ({
  title,
  description,
  icon: Icon,
  style,
}: ArticleHeaderProps) => {
  return (
    <div className="w-full px-4 pt-16">
      {/* Hero Section */}
      <motion.div
        className={`relative overflow-hidden bg-gradient-to-r from-gradient-secondary-start  to-gradient-secondary-end text-white rounded-b-xl mb-10 ${style}`}
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
              <div className="w-12 h-12 bg-gradient-to-r from-gradient-info-start to-gradient-info-end backdrop-blur-sm  rounded-full flex items-center justify-center hover:scale-105 transition-all text-primary">
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-white bg-clip-text text-transparent">
              {/* Trending Now */}
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArticleHeader;
