"use client";
import ArticleHeader from "@/app/components/Articles/ArticleHeader";
import ArticlesGrid from "@/app/components/Articles/ArticlesGrid";
import { HiOutlineNewspaper } from "react-icons/hi2";

const General = () => {
  return (
    <section>
      <ArticleHeader
        title="General"
        description="Stay informed with the latest general news and current events from around the world. Get comprehensive coverage of breaking news, politics, and important global developments."
        icon={HiOutlineNewspaper}
      />
      <ArticlesGrid type="trending" category="general" />;
    </section>
  );
};

export default General;
