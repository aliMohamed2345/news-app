import { createSlice } from "@reduxjs/toolkit";
import { ArticleCardsProps } from "@/app/components/Articles/ArticleCard";

const initialState: ArticleCardsProps = {
  title: "",
  author: "",
  description: "",
  sourceName: "",
  sourceId: "",
  publishedAt: "",
  urlToImage: "",
  url: "",
  content: "",
};

const ArticleSlice = createSlice({
  name: "Article",
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setAuthor: (state, action) => {
      state.author = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setSourceName: (state, action) => {
      state.sourceName = action.payload;
    },
    setSourceId: (state, action) => {
      state.sourceId = action.payload;
    },
    setArticleHistory: (state, action) => {
      state.publishedAt = action.payload;
    },
    setArticleImage: (state, action) => {
      state.urlToImage = action.payload;
    },
    setArticleURL: (state, action) => {
      state.url = action.payload;
    },
    setContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

export default ArticleSlice.reducer;
export const {
  setContent,
  setArticleHistory,
  setArticleImage,
  setArticleURL,
  setAuthor,
  setDescription,
  setSourceId,
  setSourceName,
  setTitle,
} = ArticleSlice.actions;
