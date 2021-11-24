import styled from "styled-components";


export const CardService = styled.div `
display: flex;
border: 1px solid black;
flex-direction: column;
align-items: center;
border-radius: 5px;
width: 100%;
background-color: #EEEEEE;

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
grid-template-columns: repeat(6, 1fr);
gap: 10px;
margin-top: 10px;
width: 100%;



`