"use client";
import { FiTrendingUp } from "react-icons/fi";
import ArticlesGrid from "@/app/components/Articles/ArticlesGrid";
import ArticleHeader from "@/app/components/Articles/ArticleHeader";
const Trending = () => {
  return (
    <section>
      <ArticleHeader
        title="Trending Now"
        description="Discover the most popular stories and breaking news that everyone
              is talking about"
        icon={FiTrendingUp}
      />
      <ArticlesGrid type={`trending`} country={`us`} />
    </section>
  );
};

export default Trending;
