import styled from 'styled-components'

export const CtaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
export const CtaHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
      padding: 64px 32px;
  @media(max-width: 768px){
    padding: 32px;
  }
  p {
    margin-bottom: 32px;
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
`