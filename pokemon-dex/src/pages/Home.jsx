import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate("/dex");
  };

  return (
    <>
      <button onClick={goToDex}>포켓몬 도감 시작하기</button>
    </>
  );
};
