import pokemonReducer from "../slices/pokemonSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    pokemonReducer: pokemonReducer,
  },
});
