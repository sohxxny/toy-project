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
     * 이미 6개가 선택되었거나 중복 선택을 하는 경우 alert
     * @param {{pokemons: Array}} state - 내 포켓몬 리스트
     * @param {{payload: Object}} action - 포켓몬 정보 객체
     */
    addPokemon: (state, action) => {
      if (state.pokemons.length >= 6) {
        alert("더 이상 선택할 수 없습니다.");
        return;
      }
      if (state.pokemons.some((pokemon) => pokemon.id === action.payload.id)) {
        alert("이미 선택된 포켓몬입니다.");
        return;
      }
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
