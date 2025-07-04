"use client";
import ArticlesGrid from "@/app/components/Articles/ArticlesGrid";
import ArticleHeader from "@/app/components/Articles/ArticleHeader";
import { FiShoppingBag } from "react-icons/fi";

const Business = () => {
  return (
    <section>
      <ArticleHeader
        title={`Business`}
        description={`Get the latest business news, market insights, and financial updates, Follow stock market trends, corporate earnings, startup news, and economic developments that impact your investments.`}
        icon={FiShoppingBag}
      />
      <ArticlesGrid type="trending" category="business" />;
    </section>
  );
};

export default Business;
