import styled from 'styled-components'

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  @media(max-width: 768px){
    padding-top: 96px;
  }
`
export const HeroHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  padding: 112px 32px 64px;
  @media(max-width: 768px){
    padding: 32px;
    flex-direction: column;
  }
`
export const HalfSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media(max-width: 768px){
    width: 100%;
    gap: 24px;
  }
  a{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-family: "Nunito Sans", sans-serif;
    white-space: nowrap;
    border-radius: 24px;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    transition: background 0.3s ease 0s;
    height: 48px;
    background: var(--primary-blue);
    color: rgb(255, 255, 255);
    border: none;
    padding: 12px 32px;
    transition: all .3s ease;
    &:hover{
      background: var(--secondary-blue);
    }
    @media(max-width:500px){
      width: 100%;
    }
  }
  h1{
    text-align: left;
    margin: 0;
    @media(max-width: 768px){
    max-width: 90%;
  }
  }
  p {
    color: var(--secondary-blue);
    @media(max-width: 768px){
    max-width: 90%;
  }
  }
  img {
    padding: 32px;
    @media(max-width: 1000px){
    padding: 0;
  }
    @media(max-width: 768px){
    padding: 32px;
  }
  @media (max-width: 500px) {
    padding: 0;
  }
  
  }
`
export const Background = styled.div`
  width: 100%;
  position: absolute;
  z-index: -1;
  top: -200px;
  left: 0;
  @media (max-width: 768px) {
    top: unset;
    bottom: 0;
  }
`