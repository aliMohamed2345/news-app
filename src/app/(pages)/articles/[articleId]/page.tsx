"use client";
import { RootState } from "@/app/redux/store";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
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
    <>
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
    </>
  );
};

export default ArticleId;
