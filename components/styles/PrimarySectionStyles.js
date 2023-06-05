import styled from 'styled-components'

export const PrimaryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
export const PrimaryHolder = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  padding:  32px;
  gap: 30px;
  flex-direction: ${props => !props.reversed ? "row" : "row-reverse"};
  align-items: flex-start;
  justify-content: space-between;

  ${props => props.boxed && {
    background: 'green',
    borderRadius: '20px'
  }};
    padding: 64px 32px;
  @media(max-width: 768px){
    padding: 32px;
    flex-direction: column;
  }
`
export const Description = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
p {
    margin-bottom: 16px;
}
span {
  text-align: left;
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
border-radius: 20px;
@media(max-width: 768px){
    width: 100%;
    align-items: center;
    justify-content: center;
  }
img {
  width: 100%;
}`