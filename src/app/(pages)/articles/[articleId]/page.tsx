"use client";
import { FaUser } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { useSearchParams } from "next/navigation";
const ArticleId = () => {
  const searchParams = useSearchParams();
  const content = searchParams.get(`content`);
  const url = searchParams.get(`url`);
  const urlToImage = searchParams.get(`urlToImage`);
  const author = searchParams.get(`author`);
  const description = searchParams.get(`description`);
  const title = searchParams.get(`title`);
  const publishedAt = searchParams.get("publishedAt");
  console.log({ content, url });
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "Unknown date";

  return (
    <section className="min-h-screen mx-auto container px-4 py-16 max-w-4xl">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6">
        {title}
      </h1>

      {/* Image */}
      {urlToImage && (
        <img
          loading="lazy"
          src={urlToImage}
          alt={title || description || ""}
          className="rounded-xl object-cover w-full max-h-[450px] shadow-md mb-6"
        />
      )}

      {/* Metadata */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-muted-foreground mb-8 gap-4">
        {author && (
          <div className="flex items-center gap-2">
            <FaUser className="text-primary" />
            <span className="font-medium">{author}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <MdCalendarToday className="text-primary" />
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-lg leading-relaxed text-muted-foreground mb-6">
          {description}
        </p>
      )}

      {/* Content */}
      {content && (
        <p className="text-base leading-relaxed text-foreground whitespace-pre-line mb-6">
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
