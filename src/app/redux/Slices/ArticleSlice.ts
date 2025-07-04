import { createSlice } from "@reduxjs/toolkit";
import { ArticleCardsProps } from "@/app/components/Articles/ArticleCard";

const initialState: ArticleCardsProps = {
  title: "",
  description: "",
  sourceName: "",
  sourceURL: "",
  publishedAt: "",
  image: "",
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
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setSourceName: (state, action) => {
      state.sourceName = action.payload;
    },
    setSourceURL: (state, action) => {
      state.sourceURL = action.payload;
    },
    setArticleHistory: (state, action) => {
      state.publishedAt = action.payload;
    },
    setArticleImage: (state, action) => {
      state.image = action.payload;
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
  setDescription,
  setSourceURL,
  setSourceName,
  setTitle,
} = ArticleSlice.actions;
