import styled from "styled-components";


export const CardService = styled.div `
display: flex;
box-shadow: 2px 2px 2px gray;
flex-direction: column;
align-items: center;
border-radius: 5px; 
width: 100%;
background-color: #EEEEEE;
margin: 0;
padding: 0;
position: static;

`
export const TextCard = styled.div`
display: flex;
flex-direction: column;
color:#000000;



p{
  margin: 0 16px;
  padding: 10px;
  

}
`
export const Buttons = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 margin: 10px;
 align-items: flex-start;
 width: 90%;

 
 button{
  
  

 }
 
`

export const GrupCards = styled.div`

display: grid;
grid-template-columns: repeat(4, 1fr);
margin: 10px;
padding: 10px;
width: 98%;



`