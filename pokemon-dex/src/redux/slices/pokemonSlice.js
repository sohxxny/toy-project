import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemons: [],
};

// * 내 포켓몬 리스트 관련 슬라이스
const pokemonSlice = createSlice({
  name: "myPokemon",
  initialState,
  reducers: {
    /**
     * * 포켓몬 추가 이벤트 핸들러
     * @param {{pokemons: Array}} state - 내 포켓몬 리스트
     * @param {{payload: Object}} action - 포켓몬 정보 객체
     */
    addPokemon: (state, action) => {
      state.pokemons.push(action.payload);
    },
    /**
     * * 포켓몬 삭제 이벤트 핸들러
     * @param {{pokemons: Array}} state - 내 포켓몬 리스트
     * @param {{payload: string}} action - 포켓몬 id
     */
    removePokemon: (state, action) => {
      state.pokemons = state.pokemons.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
