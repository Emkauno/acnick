import styled from 'styled-components'

export const NavbarContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: pink;
  padding: 0 32px;
`
export const NavbarHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    height: 80%;
    filter: invert(1);
  }
  ul {
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    list-style: none;
    gap: 16px;
    li{
      border: 1px solid red;
    }
  }
`