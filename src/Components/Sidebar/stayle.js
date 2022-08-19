import styled from "styled-components";

const Container = styled.div`
  width: 250px ;
  height: 93vh ;
  background-color: red ;
  display: flex;
  flex-direction: column ;
  justify-content: space-between;
  background-color:#212121 ;
    position: absolute;
  transition: .2s;
  left: ${({hidden})=> hidden ? '0px' : '-260px'};

`

const BoxNav = styled.div`
padding: 0px 10px ;
h4{
  display: flex;
  align-items: center ;
  width: 100%;
  height: 40px;  
  padding: 0px 10px ;
  color: #ffffff ;
cursor:pointer ;
:hover{
    display: flex;
    background-color:#4d4d4d;
     width:100%;
    height: 40px;  
    border: 1px  ;
    border-radius: 08px ;
    align-items:center;
   }
}

`

export { Container, BoxNav }