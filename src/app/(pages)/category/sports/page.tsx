"use client";
import ArticlesGrid from "@/app/components/Articles/ArticlesGrid";
import ArticleHeader from "@/app/components/Articles/ArticleHeader";
import { MdOutlineSportsSoccer } from "react-icons/md";

const Sports = () => {
  return (
    <section>
      <ArticleHeader
        title="Sports"
        description="Follow your favorite sports teams and get the latest sports news. Stay updated on game scores, player transfers, championship updates, and sports analysis across all major leagues."
        icon={MdOutlineSportsSoccer}
      />
      <ArticlesGrid type="trending" category="sports" />
      );
    </section>
  );
};

export default Sports;
