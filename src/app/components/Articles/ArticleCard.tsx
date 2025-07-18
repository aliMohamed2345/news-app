"use client";

import { calculatedRemainingTime } from "@/app/utils/helper";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";
export interface ArticleCardsProps {
  title: string;
  description: string;
  sourceName?: string;
  sourceURL?: string;
  url: string;
  image: string;
  publishedAt: string;
  content: string;
  source?: { url: string; name: string };
}

const ArticleCard = ({
  title,
  description,
  sourceName,
  sourceURL,
  url,
  image,
  publishedAt,
  content,
}: ArticleCardsProps) => {
  const [isBookMarked, setIsBookMarked] = useState(false);

  // Check localStorage on initial load
  useEffect(() => {
    const storedArticles = localStorage.getItem("bookedArticles");
    if (storedArticles) {
      const articles = JSON.parse(storedArticles);
      const found = articles.some(
        (article: ArticleCardsProps) => article.url === url
      );
      if (found) {
        setIsBookMarked(true);
      }
    }
  }, [url]);

  const handleChangeBookmark = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const storedArticles = localStorage.getItem("bookedArticles");
    const bookedArticles: ArticleCardsProps[] = storedArticles
      ? JSON.parse(storedArticles)
      : [];

    const isAlreadyBookmarked = bookedArticles.some(
      (article) => article.url === url
    );

    if (isAlreadyBookmarked) {
      //remove this article from local storage
      const updatedArticles = bookedArticles.filter(
        (article) => article.url !== url
      );
      localStorage.setItem("bookedArticles", JSON.stringify(updatedArticles));
      setIsBookMarked(false);
    } else {
      //save this article to local storage and show it in the bookmark pag
      bookedArticles.push({
        source: { url: sourceURL ?? "", name: sourceName ?? "" },
        title,
        description,
        sourceName,
        sourceURL,
        url,
        image,
        publishedAt,
        content,
      });
      localStorage.setItem("bookedArticles", JSON.stringify(bookedArticles));
      setIsBookMarked(true);
    }
  };
  return (
    <Link
      href={{
        pathname: `/articles/${`${btoa(url).slice(10, 20)}`}`, //encode the url to base 64 and pass it to the url
        query: {
          publishedAt,
          sourceURL,
          sourceName,
          url,
          image,
          description,
          title,
          content,
          isBookMarked,
        },
      }}
      className="bg-secondary border-2 border-transparent hover:border-primary transition-all rounded-xl overflow-hidden shadow-sm hover:shadow-lg duration-300 group flex flex-col h-full"
    >
      {/* Image Section */}
      <span>
        <img
          loading="lazy"
          src={image || "/image-not-found.png"}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 group-hover:opacity-90 transition-all duration-300"
        />
      </span>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-4 h-full gap-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs px-3 py-1 bg-primary text-secondary-foreground font-extrabold rounded-full">
            {sourceName}
          </span>
          <button
            onClick={(e) => handleChangeBookmark(e)}
            className="p-1.5 rounded-md hover:bg-accent transition cursor-pointer text-primary "
          >
            {isBookMarked ? (
              <IoBookmark className="text-lg" />
            ) : (
              <IoBookmarkOutline className="text-lg" />
            )}
          </button>
        </div>

        <span>
          <h3 className="text-base font-semibold leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2 text-center">
            {title}
          </h3>
        </span>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-2 border-t border-border">
          <span className="flex items-center gap-1">
            <MdAccessTime className="text-primary" />
            {calculatedRemainingTime(publishedAt)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
