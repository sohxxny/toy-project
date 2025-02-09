import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StyledCard } from "../styles/components/Card";
import { colors } from "../styles/colors";

const StyledPokemonCard = styled(StyledCard)`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledNumber = styled.span`
  color: ${colors.gray.dark};
  font-size: small;
`;

const StyledTitle = styled.span`
  color: black;
  font-size: 15px;
  font-weight: bold;
  margin: 5px;
`;

const AddButton = styled.button`
  padding: 5px 20px 5px 20px;
  font-size: 10px;
  font-weight: 600;
  margin: 5px;
  background-color: ${colors.gray.medium};
  border: none;
  color: black;

  border-top: 2px solid ${colors.gray.light};
  border-left: 2px solid ${colors.gray.light};
  border-bottom: 2px solid ${colors.navy.dark};
  border-right: 2px solid ${colors.navy.dark};
  font-family: "DungGeunMo", sans-serif;

  &:hover {
    background-color: ${colors.white.dark};
  }

  &:active {
    background-color: ${colors.navy.medium};
    color: white;
    border-top: 2px solid ${colors.gray.dark};
    border-left: 2px solid ${colors.gray.dark};
    border-bottom: 2px solid ${colors.gray.light};
    border-right: 2px solid ${colors.gray.light};
  }
`;

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

  // TODO - 포켓몬 id 값을 3자리로 바꾸기
  return (
    <StyledPokemonCard onClick={() => goToDetail(id)}>
      <StyledNumber>No. {id}</StyledNumber>
      <StyledTitle>{korean_name}</StyledTitle>
      <img src={img_url} />
      <AddButton onClick={(e) => buttonClick(e)}>{buttonType}</AddButton>
    </StyledPokemonCard>
  );
};
