"use client";
import ArticlesGrid from "@/app/components/Articles/ArticlesGrid";
import ArticleHeader from "@/app/components/Articles/ArticleHeader";
import { BiSolidJoystick } from "react-icons/bi";

const Entertainment = () => {
  return (
    <section>
      <ArticleHeader
        icon={BiSolidJoystick}
        title={`Entertainment`}
        description={`Catch up on entertainment news, celebrity updates, and pop culture. Follow movie releases, TV shows, music industry news, gaming updates, and celebrity lifestyle stories.`}
      />
      <ArticlesGrid category="entertainment" type="trending" />;
    </section>
  );
};

export default Entertainment;
