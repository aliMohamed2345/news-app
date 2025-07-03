"use client";
import ArticleCard from "@/app/components/Articles/ArticleCard";
import ArticlesLoadingSkeleton from "@/app/components/Articles/ArticlesLoadingSkeleton";
import { ArticleCardsProps } from "@/app/components/Articles/ArticleCard";
import { IoBookmarkOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import Link from "next/link";
const BookMark = () => {
  const [storedArticles, setStoredArticles] = useState<ArticleCardsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    //  take the bookmarked articles and show it in the page
    const storedArticles = localStorage.getItem("bookedArticles") || "[]";
    setLoading(false);
    setStoredArticles(JSON.parse(storedArticles));
  }, []);

  {
    return storedArticles.length === 0 ? (
      <div className="text-center py-16 min-h-screen flex items-center justify-center flex-col container mx-auto px-2 ">
        <IoBookmarkOutline className="text-primary mx-auto mb-4 text-7xl sm:text-9xl" />
        <h2 className="text-2xl sm:text-4xl font-semibold text-secondary-foreground mb-2">
          No bookmarks yet
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto sm:text-xl text-md">
          Start exploring news articles and bookmark the ones you want to read
          later. Your saved articles will appear here.
        </p>
        <button className="mt-6 text-md sm:text-lg font-bold cursor-pointer p-2 w-fit rounded-md bg-primary text-white hover:opacity-90 hover:scale-[1.06] transition-all">
          <Link href="/trending">Explore News</Link>
        </button>
      </div>
    ) : (
      <div className="max-w-7xl mx-auto container px-4 min-h-screen">
        <div className="pt-20">
          <h3 className="text-2xl sm:text-4xl font-bold text-primary">
            Your Bookmarks
          </h3>
          <p className="text-muted-foreground text-md font-bold sm:text-xl pl-5">
            {storedArticles.length} saved articles
          </p>
        </div>
        {loading ? (
          <ArticlesLoadingSkeleton numOfElements={15} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-10">
            {storedArticles.map((article) => {
              const {
                title,
                content,
                description,
                publishedAt,
                source,
                url,
                image,
              } = article;
              return (
                <ArticleCard
                  key={article.url}
                  content={content}
                  title={title}
                  description={description}
                  publishedAt={publishedAt}
                  sourceURL={source?.url}
                  sourceName={source?.name}
                  url={url}
                  image={image ?? ""}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
};

export default BookMark;
