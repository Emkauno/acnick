import styled from "styled-components";

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 64px 32px;

  @media (max-width: 768px) {
    padding: 32px;
  }
  h2  {
     @media (max-width: 768px) {
    margin-bottom: 16px;
  }
  }
`;
export const CardsHolder = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 30%;
  min-height: 305px;
  padding: 32px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  position: relative;
  img {
    width: 40px;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 18px;
    margin-bottom: 20px;
  }
  ul {
    li {
      text-align: left;
    }
  }
  p {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: unset;
    align-items: flex-start;
    padding: 16px 0;
    padding-left: 96px;

    img {
      position: absolute;
      left: 0;
      top: 16px;
    }
  }
  @media (max-width: 768px) {
    padding-left: 64px;
  }
`;
