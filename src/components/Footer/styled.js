import styled from "styled-components"

export const MainContainer = styled.div`
    background-color: #eeeeee;
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 0;
    position: fixed;
        
   
 
    @media(max-width: 700px){
        
        .logo{
            display: none;
        }
    }
    @media(max-width: 550px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: x-small;
    }
`

export const IconesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

export const TextoFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const IconesRedesSociais = styled.img`
    height: 5vh;
    margin: 5px;
`

export const AlinhaTodos = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
