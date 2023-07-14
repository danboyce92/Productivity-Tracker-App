import { configureStore } from "@reduxjs/toolkit";
import { tabColorReducer, changeToO, changeToE, changeToS } from "./slices/TabColorSlice";

const store = configureStore({
  reducer: {
    tabColor: tabColorReducer,
  },
});


export { store, changeToO, changeToE, changeToS };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
