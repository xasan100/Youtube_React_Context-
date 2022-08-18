import styled from "styled-components";

const Block = styled.div`
padding: 50px 0px ;
padding-left: 20px ;
display: grid ;

grid-template-columns: repeat(4,1fr  ) ;
grid-gap: 20px ;
`
Block.Inset = styled.div`
width: 332px;
height:270px;
cursor: pointer ;
  :hover{
    transform: scale(1.1,1.1);
    transition: all 0.1s ease ;
  }
>img {
    width:100% ;
    height: 186px ;
}
.img1{
  width: 36px ;
  height: 36px ;
}
div{
    color:  white;
    display: flex ;
  align-items:  center ;
  padding: 0px 10px ;
.spanvalue{
  padding:  0px 20px;
}
  
}

`


export { Block }