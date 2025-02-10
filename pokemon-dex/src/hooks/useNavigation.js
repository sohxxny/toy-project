import { useNavigate } from "react-router-dom";

// * navigate 관련 함수를 반환하는 커스텀 훅
export const useNavigation = () => {
  const navigate = useNavigate();

  // * 뒤로가기 함수
  const goBack = () => {
    navigate(-1);
  };

  // * 도감 페이지로 이동 함수
  const goDex = () => {
    navigate("/dex");
  };

  // * 카드 상세 페이지 이동 함수
  const goDetail = (id) => {
    navigate(`/detail?id=${id}`);
  };

  return { goBack, goDex, goDetail };
};
