import { useNavigate } from "react-router-dom";

const cardStyle = {
  height: "300px",
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

/**
 * * 포켓몬 카드 하나를 나타내는 컴포넌트
 * @param {Object} data - 포켓몬 정보 {img_url, korean_name, types, id, description}
 * @param {string} buttonType - 버튼 타입 ("추가" 또는 "삭제")
 * @param {Function} onClick - 포켓몬 추가 및 삭제 핸들러 함수
 *    - 포켓몬 추가: ({{img_url, korean_name, types, id, description}}) => void
 *    - 포켓몬 삭제: (id) => void
 */
export const PokemonCard = ({ data, buttonType, onClick }) => {
  const { img_url, korean_name, id } = data;
  const navigate = useNavigate();

  // * 카드 상세 페이지 이동 핸들러
  const goToDetail = (id) => {
    navigate(`/detail?id=${id}`);
  };

  // * 카드와 버튼 클릭 이벤트 버블링 방지용 함수
  const buttonClick = (e) => {
    e.stopPropagation();
    onClick(buttonType === "추가" ? data : id);
  };

  return (
    <div onClick={() => goToDetail(id)} style={cardStyle}>
      <img src={img_url} />
      <div>{korean_name}</div>
      <div>No. {id}</div>
      <button onClick={(e) => buttonClick(e)}>{buttonType}</button>
    </div>
  );
};
