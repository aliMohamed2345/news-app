"use client";
import { RootState } from "@/app/redux/store";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
const ArticleId = () => {
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
  } = useSelector((state: RootState) => state.Article);
  const { articleId } = useParams();
  return (
    <div className={`min-h-screen mx-auto container px-2 py-20`}>
      <span></span>
      <h3 className={`text-3xl font-bold py-5`}>{title}</h3>
      <div className={`flex items-center justify-between`}>
        <div className="flex gap-2 items-center ">
          <FaUser />
          <p>{author}</p>
          <span>{publishedAt}</span>
        </div>
      </div>

      <span>{articleId}</span>
      <span>{publishedAt}</span>
      <span>{urlToImage}</span>
      <span>{url}</span>
      <span>{author}</span>
      <span>{content}</span>
      <span>{description}</span>
      <span>{sourceId}</span>
      <span>{sourceName}</span>
      <span>{title}</span>
    </div>
  );
};

export default ArticleId;
