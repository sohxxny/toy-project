/**
 * * 포켓몬 카드 하나를 나타내는 컴포넌트
 * @param {Object} data - 포켓몬 정보 {img_url, korean_name, types, id, description}
 * @param {string} buttonType - 버튼 타입 ("추가" 또는 "삭제")
 * @param {Function} addPokemon - 포켓몬 추가 핸들러 함수 (id) => void
 */
export const PokemonCard = ({ data, buttonType, addPokemon }) => {
  const { img_url, korean_name, id } = data;

  const cardStyle = {
    height: "300px",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={cardStyle}>
      <img src={img_url} />
      <div>{korean_name}</div>
      <div>No. {id}</div>
      <button onClick={() => addPokemon(data)}>{buttonType}</button>
    </div>
  );
};
