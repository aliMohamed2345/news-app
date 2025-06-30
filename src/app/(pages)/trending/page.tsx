"use client";

import ArticleCards, {
  ArticleCardsProps,
} from "@/app/components/Articles/ArticleCards";
import ArticleLoadingSkeleton from "@/app/components/Articles/ArticlesLoadingSkeleton";
import { useFetch } from "@/app/hooks/useFetch";
import { useState } from "react";
const Trending = () => {
  const [page, setPage] = useState<number>(1);
  const { data, loading, error } = useFetch<{
    status: string;
    articles: ArticleCardsProps[];
  }>({
    url: `${process.env.NEXT_PUBLIC_NEWS_BASE_URL}/top-headlines?apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}&country=us&page=${page}`,
  });
  console.log(setPage);
  if (loading) return <ArticleLoadingSkeleton numOfElements={15} />;

  if (error || !data || data.status !== "ok") {
    return <p className="text-center text-red-500">Failed to load articles.</p>;
  }
  console.log(data.articles);
  const articles: ArticleCardsProps[] = data.articles.map((article) => ({
    title: article.title,
    description: article.description,
    content: article.content,
    author: article.author ?? "Unknown",
    sourceName: article.source?.name ?? "Unknown",
    sourceId: article.source?.id ?? "",
    urlToImage: article.urlToImage ?? "",
    publishedAt: article.publishedAt,
    url: article.url,
  }));
  console.log(articles);

  return (
    <section className="pt-16">
      <div className="container mx-auto max-w-7xl px-4">
        <h1 className="text-2xl font-bold mb-6">Trending News</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((article, index) => {
            const {
              publishedAt,
              urlToImage,
              url,
              author,
              content,
              description,
              sourceId,
              sourceName,
              title,
            } = article;
            return (
              <ArticleCards
                key={index}
                publishedAt={publishedAt}
                urlToImage={urlToImage}
                url={url}
                content={content}
                author={author}
                description={description}
                sourceId={sourceId}
                sourceName={sourceName}
                title={title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
