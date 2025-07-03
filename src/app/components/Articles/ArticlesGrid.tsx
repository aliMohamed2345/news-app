import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { ArticleCardsProps } from "./ArticleCard";
import useInfiniteScroll from "@/app/hooks/useInfinityScroll";
import ArticleCard from "./ArticleCard";
import ArticleLoadingSkeleton from "./ArticlesLoadingSkeleton";

interface ArticlesGridProps {
  PAGE_SIZE?: number;
  type: "general" | "trending";
  category?:
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology";
  language?:
    | "ar"
    | "de"
    | "en"
    | "es"
    | "fr"
    | "he"
    | "it"
    | "nl"
    | "no"
    | "pt"
    | "ru"
    | "sv"
    | "ud"
    | "zh";
  country?:
    | "ae"
    | "ar"
    | "at"
    | "au"
    | "be"
    | "bg"
    | "br"
    | "ca"
    | "ch"
    | "cn"
    | "co"
    | "cu"
    | "cz"
    | "de"
    | "eg"
    | "fr"
    | "gb"
    | "gr"
    | "hk"
    | "hu"
    | "id"
    | "ie"
    | "il"
    | "in"
    | "it"
    | "jp"
    | "kr"
    | "lt"
    | "lv"
    | "ma"
    | "mx"
    | "my"
    | "ng"
    | "nl"
    | "no"
    | "nz"
    | "ph"
    | "pl"
    | "pt"
    | "ro"
    | "rs"
    | "ru"
    | "sa"
    | "se"
    | "sg"
    | "si"
    | "sk"
    | "th"
    | "tr"
    | "tw"
    | "ua"
    | "us"
    | "ve"
    | "za";
  q?: string;
}

const ArticlesGrid = ({
  PAGE_SIZE = 10,
  type = "general",
  category,
  language,
  country,
  q,
}: ArticlesGridProps) => {
  const [articles, setArticles] = useState<ArticleCardsProps[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined);

  const apiType = type === "general" ? "search" : "top-headlines";
  const lastElementRef = useInfiniteScroll(setPage, totalPages);

  const URL = useMemo(() => {
    return (
      `${process.env.NEXT_PUBLIC_NEWS_BASE_URL}/${apiType}?` +
      `pageSize=${PAGE_SIZE}&page=${page}&apikey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}` +
      `${category ? `&category=${category}` : ""}` +
      `${language ? `&language=${language}` : ""}` +
      `${country ? `&country=${country}` : ""}` +
      `${q ? `&q=${encodeURIComponent(q)}` : ""}`
    );
  }, [apiType, PAGE_SIZE, page, category, language, country, q]);
  console.log(URL);
  // Reset state when filters change
  useEffect(() => {
    setArticles([]);
    setPage(1);
    setHasMore(true);
  }, [type, q, country, language, category]);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL);

        // Handle rate limit from API
        if (response.status === 429) {
          console.warn("Too many requests: API rate limit reached.");
          setHasMore(false);
          return;
        }

        const data = await response.json();

        const newArticles = data.articles.map((article: ArticleCardsProps) => ({
          title: article.title,
          description: article.description,
          content: article.content,
          sourceName: article.source?.name ?? "Unknown",
          sourceURL: article.source?.url ?? "",
          image: article.image ?? "",
          publishedAt: article.publishedAt,
          url: article.url,
        }));
        setArticles(newArticles);
        // remove the duplicated data

        // setArticles((prev) => {
        // const existingUrls = new Set(prev.map((a) => a.url));
        // const filtered = newArticles.filter(
        // (a: ArticleCardsProps) => !existingUrls.has(a.url)
        // );
        // return [...prev, ...filtered];
        //   }

        const totalPagesFromAPI = Math.ceil(data.totalArticles / PAGE_SIZE);
        setTotalPages(totalPagesFromAPI);

        if (page >= totalPagesFromAPI || newArticles.length === 0) {
          setHasMore(false);
        }
        setHasMore(false);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };

    if (hasMore) {
      fetchArticles();
    }
  }, [page, hasMore, PAGE_SIZE, URL]);

  return (
    <div className="max-w-7xl mx-auto px-4 container">
      {/* Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {articles.map((article, index) => {
          const {
            content,
            description,
            publishedAt,
            title,
            url,
            image,
            sourceURL,
            sourceName,
          } = article;
          const isLast = index === articles.length - 1;
          return (
            <div key={index} ref={isLast ? lastElementRef : undefined}>
              <ArticleCard
                content={content}
                description={description}
                publishedAt={publishedAt}
                title={title}
                url={url}
                image={image}
                sourceURL={sourceURL}
                sourceName={sourceName}
              />
            </div>
          );
        })}
      </div>

      {/* Loading Skeleton */}
      {loading && <ArticleLoadingSkeleton numOfElements={PAGE_SIZE} />}

      {/* No more articles */}
      {!hasMore && (
        <Link
          href={"/"}
          className="text-center block text-destructive-foreground bg-destructive rounded-full p-3 text-xl my-6 w-fit mx-auto hover:opacity-90 cursor-pointer"
        >
          No more articles to load
        </Link>
      )}
    </div>
  );
};

export default ArticlesGrid;
