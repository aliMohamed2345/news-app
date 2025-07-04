"use client";
import ArticlesGrid from "@/app/components/Articles/ArticlesGrid";
import { IoFlaskOutline } from "react-icons/io5";
import ArticleHeader from "@/app/components/Articles/ArticleHeader";
const Science = () => {
  return (
    <section>
      <ArticleHeader
        title="Science"
        description="Explore scientific discoveries, research findings, and innovations. Learn about space exploration, environmental science, medical research, and breakthrough studies that shape our understanding of the world."
        icon={IoFlaskOutline}
      />
      <ArticlesGrid category="science" type="trending" />
      );
    </section>
  );
};

export default Science;
