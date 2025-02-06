/**
 * * 포켓몬의 디테일 정보를 표시하는 컴포넌트
 * @param pokemon - 포켓몬 정보 {img_url, korean_name, types, id, description}
 */
export const PokemonDetail = ({ pokemon }) => {
  const { img_url, korean_name, types, description } = pokemon;

  return (
    <div>
      <img src={img_url} />
      <div>{korean_name}</div>
      <div>타입: {types} </div>
      <div>{description}</div>
    </div>
  );
};
