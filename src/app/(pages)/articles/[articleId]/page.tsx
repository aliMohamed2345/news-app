"use client";
import { MdCalendarToday } from "react-icons/md";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";
import { ArticleCardsProps } from "@/app/components/Articles/ArticleCard";
import Link from "next/link";
const ArticleId = () => {
  const searchParams = useSearchParams();
  const content = searchParams.get(`content`);
  const url = searchParams.get(`url`);
  const image = searchParams.get(`image`);
  const description = searchParams.get(`description`);
  const title = searchParams.get(`title`);
  const publishedAt = searchParams.get("publishedAt");
  const isBookMarked = searchParams.get("isBookMarked");
  const sourceURL = searchParams.get(`sourceURL`);
  const sourceName = searchParams.get(`sourceName`);
  const [currentBookmarkValue, setCurrentBookmarkValue] = useState<boolean>(
    isBookMarked === "true"
  );
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "Unknown date";

  /**
   * Check if the current article is already bookmarked
   * when the component loads by reading from localStorage.
   * If found, update the isBookMarked state to reflect that.
   */

  useEffect(() => {
    const storedArticles = localStorage.getItem("bookedArticles");
    if (storedArticles) {
      const articles = JSON.parse(storedArticles);
      const found = articles.some(
        (article: ArticleCardsProps) => article.url === url
      );
      setCurrentBookmarkValue(found);
    }
  }, [url]);

  const handleChangeBookmark = () => {
    const storedArticles = localStorage.getItem("bookedArticles");
    const bookedArticles: ArticleCardsProps[] = storedArticles
      ? JSON.parse(storedArticles)
      : [];
    //check whether the book mark data is exist or not by searching by url
    const isAlreadyBookmarked = bookedArticles.some(
      (article) => article.url === url
    );

    if (isAlreadyBookmarked) {
      //if the bookmarked article exist and press at the bookmark button then we will remove the data from local storage
      const updatedArticles = bookedArticles.filter(
        (article) => article.url !== url
      );
      localStorage.setItem("bookedArticles", JSON.stringify(updatedArticles));
      setCurrentBookmarkValue(false);
    } else {
      //if not we will push the data directly in the local storage
      bookedArticles.push({
        title: title ?? "",
        description: description ?? "",
        url: url ?? "",
        image: image ?? "",
        publishedAt: publishedAt ?? "",
        content: content ?? "",
        source: { name: sourceName ?? "", url: sourceURL ?? "" },
      });
      localStorage.setItem("bookedArticles", JSON.stringify(bookedArticles));
      setCurrentBookmarkValue(true);
    }
  };

  console.log({ sourceURL, sourceName });

  return (
    <section className="min-h-screen mx-auto container px-2 py-20 max-w-4xl">
      {/* Title */}
      <h1 className="text-xl sm:text-3xl text-center sm:text-left md:text-4xl font-bold text-foreground leading-tight mb-6">
        {title}
      </h1>

      {/* Image */}
      {image && (
        <img
          loading="lazy"
          src={image}
          alt={title || description || ""}
          className="rounded-xl object-cover w-full max-h-[450px] shadow-md mb-6"
        />
      )}

      <div className="flex justify-between items-center text-base text-muted-foreground mb-8 gap-4 bg-secondary p-4 rounded-md border-border border-2">
        <div className="flex items-center gap-2">
          <MdCalendarToday className="text-primary" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2 text-primary p-1 rounded-md ">
          <button
            title="BookMark"
            onClick={handleChangeBookmark}
            className="flex gap-2 items-center h-10 cursor-pointer border-primary border p-1.5 rounded-lg hover:text-white hover:bg-primary transition-all font-bold"
          >
            {currentBookmarkValue ? (
              <FaBookmark size={20} />
            ) : (
              <FaRegBookmark size={20} />
            )}
            <span className="hidden sm:block">BookMark</span>
          </button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={url ?? ""}
            title="Read Full Article"
            className={`flex gap-2 items-center h-10 cursor-pointer border-primary border p-1.5 rounded-lg hover:text-white hover:bg-primary transition-all font-bold`}
          >
            <FiExternalLink size={23} />
            <span className="hidden sm:block">Read Full Article</span>
          </a>
        </div>
      </div>

      <Link
        href={sourceURL ?? ""}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md p-2 bg-primary my-5 text-white font-bold hover:opacity-90 hover:scale-105 transition-all "
      >
        {sourceName}
      </Link>

      {description && (
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          {description}
        </p>
      )}

      {content && (
        <p className="text-base leading-relaxed text-foreground whitespace-pre-line my-6 ">
          {content.slice(0, -14)}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-primary font-semibold underline hover:opacity-90 transition bg-gradient-to-r"
            >
              Read full article ↗
            </a>
          )}
        </p>
      )}
      <div className="bg-destructive text-destructive-foreground border-destructive font-bold text-center border-2 p-2 rounded-lg">
        The full article content is not available due to copyright restrictions.
        Please follow the link below to read the complete article on the
        original source.
      </div>
    </section>
  );
};

export default ArticleId;
