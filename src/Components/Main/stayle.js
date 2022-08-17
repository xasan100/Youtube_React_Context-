import styled from "styled-components";

const Block = styled.div`
border:  1px solid red;
padding: 50px 0px ;
padding-left: 20px ;
display: grid ;

grid-template-columns: repeat(4,1fr  ) ;
grid-gap: 20px ;
`
Block.Inset = styled.div`
width: 332px;
height:270px;
border: 1px solid red;
cursor: pointer ;
  :hover{
    transform: scale(1.1,1.1);
    transition: all 0.1s ease ;
  }
>img {
    width:100% ;
    height: 186px ;
}
h4{
    padding: 5px  50px;
    color:  white;
}
`


export { Block }