import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const FooterHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 64px 32px 32px;
  @media(max-width: 768px){
    padding: 32px;
  }
  p {
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: var(--secondary-blue);
  }
`