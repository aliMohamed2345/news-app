"use client";

import ArticlesGrid from "@/app/components/Articles/ArticlesGrid";
import ArticleHeader from "@/app/components/Articles/ArticleHeader";
import { HiOutlineDesktopComputer } from "react-icons/hi";

const Technology = () => {
  return (
    <section>
      <ArticleHeader
        title={`Technology`}
        description="Discover cutting-edge technology news, innovations, and digital trends. Stay updated on AI developments, tech company announcements, gadget reviews, and the future of technology."
        icon={HiOutlineDesktopComputer}
      />
      <ArticlesGrid category="technology" type="trending" />
      );
    </section>
  );
};

export default Technology;
