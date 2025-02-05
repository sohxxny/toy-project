export const Dashboard = () => {
  const myPokemons = [{}, {}, {}, {}, {}, {}];

  const dashboardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const boxesStyle = {
    display: "flex",
  };

  const boxStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid black",
  };

  return (
    <div style={dashboardStyle}>
      <div>나만의 포켓몬</div>
      <div style={boxesStyle}>
        {myPokemons.map((_, index) => (
          <div key={index} style={boxStyle}></div>
        ))}
      </div>
    </div>
  );
};
