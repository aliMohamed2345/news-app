"use client";
import ArticlesGrid from "@/app/components/Articles/ArticlesGrid";
import ArticleHeader from "@/app/components/Articles/ArticleHeader";
import { FaRegHeart } from "react-icons/fa";

const Health = () => {
  return (
    <section>
      <ArticleHeader
        title="Health"
        description="Stay healthy with the latest health news, medical breakthroughs, and wellness tips. Read about new treatments , fitness trends, nutrition advice, and public health updates"
        icon={FaRegHeart}
      />
      <ArticlesGrid category="health" type="trending" />
    </section>
  );
};

export default Health;
