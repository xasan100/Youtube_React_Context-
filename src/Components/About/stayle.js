import styled from "styled-components";

const Block = styled.div`
    width:100%;
    height:56px;
    background: #212121;
    display: flex ;
    align-items: center;
        justify-content: space-between ;

   
 `


const Navbarlogo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer ;
 `

const NavbarCenter = styled.div`
     display: flex ;
    input{
        width: 574px ;
        height: 32px ;
        background: #000000;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 2px 0px 0px 2px;
        color: white ;
        padding: 5px 10px ;
       

    }
 `
const Inputsearch = styled.div`
    width: 40px ;
    height: 32px ;
    background: rgba(255, 255, 255, 0.2);
    padding: 8px 10px ;
    cursor: pointer ;
    span{
        color: wheat;
    }

 
 `

const Navbarend = styled.div`
    display: flex;
    align-items: center ;
    padding: 0px  10px ;
padding: 0 20px ;
    
.endIcon{
    display: flex ;
    align-items:center;
    padding: 0px 20px ;
}`
 const Endicon1 = styled.img``
 const Endicon2 = styled.img`
 padding: 20px;`
 const Endicon3 = styled.img``


 const EndImg=styled.img``
const Logonav = styled.img`
`

const Hamburger = styled.img`
padding: 0 0px;
`

export { EndImg, Endicon3 ,Endicon2,Endicon1,Block, Logonav, Hamburger, Navbarlogo, NavbarCenter, Navbarend, Inputsearch, };