import styled from 'styled-components'
import { motion } from 'framer-motion';
export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TabsHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 64px 32px;
  @media(max-width: 768px){
    padding: 32px;
  }
`

export const TabsHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  button {
    padding: 0;
    border: none;
    background: none;
    position: relative;
    width: 270px;
    -webkit-tap-highlight-color: transparent;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      border-bottom: 1px solid rgba(0, 17, 51, 0.05);
    }
    h2 {
      color: var(--primary-blue);
    }
    &:hover {
      cursor: pointer;
    }
    .underline {
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 0;
      background-color: var(--primary-orange);
    }
    &.active {
      h2 {
        color: var(--primary-blue);
      }
    }
    h2 {
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      margin: 0;
      letter-spacing: 0.15px;
      text-align: center;
      position: relative;
      padding: 10px 0;
      color: var(--primary-blue);
      transition: color 0.5s ease;
    }
  }
`;
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 32px;
`;

export const TabContainer = styled(motion.div)`
  max-width:1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 32px;
  display: flex;
  flex-direction: ${props => props.tabReverse === true ? "row-reverse" : "row"};
  align-items: flex-start;
  gap: 30px;
  min-height: 400px;
  @media (max-width: 768px) {
   flex-direction: column;
  }
  @media (max-width: 500px) {
    align-items: flex-start;
  }
  h3 {
    width: 100%;
    font-size: 31px;
    font-weight: 800;
    letter-spacing: 0.15px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 24px;
    z-index: 2;
    @media (max-width: 768px) {
      text-align: left;
      margin-bottom: 16px;

    }
    @media (max-width: 500px) {
      font-size: 22px;
      line-height: 28.6px;
      margin-bottom: 16px;
    }
  }
`;

export const Description = styled.div`
  width: 50%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
p {
    margin-bottom: 16px;
}
@media(max-width: 768px){
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`
export const ImageHolder = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
@media(max-width: 768px){
    width: 100%;
    align-items: center;
    justify-content: center;
  }
img {
  width: 100%;
  @media (max-width: 768px) {
   width: 80%;
  }
  @media (max-width: 500px) {
   width: 100%;
  }
}`