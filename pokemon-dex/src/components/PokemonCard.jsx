export const PokemonCard = ({ data }) => {
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
      <button>추가</button>
    </div>
  );
};
