import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ArticleSlice from "./Slices/ArticleSlice";
const RootReducers = combineReducers({
  Article: ArticleSlice,
});

export const store = configureStore({
  reducer: RootReducers,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
