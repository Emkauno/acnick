import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --primary-blue: #094074;
  --secondary-blue: #3C6997;
  --tertiary-blue: #5ADBFF;
  --primary-orange: #FE9000;
  --secondary-orange: #FFDD4A;
  --white: #FFFFFF;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.25px;
  text-align: center;
  margin: 0;
  margin-bottom: 32px;
    @media(max-width: 768px){
      text-align: left;
      margin-bottom: 16px;
    }
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: Nunito Sans;
  box-sizing: inherit;
  color: var(--primary-blue);
  scroll-behavior: smooth;
  scroll-padding-top: 64px;
  h1{
    font-size: 55px;
    line-height: 70px;
    letter-spacing: 0.25px;
    font-weight: 800;
    @media(max-width: 768px){
      font-size: 40px;
      line-height: 40px;
    }
    @media(max-width: 500px){
      font-size: 34px;
      line-height: 44px;
    }
  }

  h2{
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0.25px;
    font-weight: 800;
    @media(max-width: 768px){
      width: 100%;
      font-size: 30px;
      line-height: 40px;
      text-align: left;
    }
    @media(max-width: 500px){
      font-size: 28px;
      line-height: 30px;
    }
  }

  p {
    font-size: 16px;
    line-height: 25px;
    @media(max-width: 768px){
      font-size: 15px;
      line-height: 25px;
    }
   
  }

  span {
    width: 100%;
    color: var(--primary-orange);
    font-weight: 700;
    letter-spacing: 0.4px;
    font-size: 20px;
    margin: 0;
    margin-bottom: 16px;
    text-align: center;
    @media(max-width: 768px){
      font-size: 16px;
      line-height: 24px;
      text-align: left;
      margin-bottom: 8px;
    }
  }

}


a {
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;
