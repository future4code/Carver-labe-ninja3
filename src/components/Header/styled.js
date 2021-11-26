import styled from 'styled-components';


export const HeaderContainer = styled.div`
    background-color: #BC8CF2;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 0;
    padding: 0;
    width: 100%;
    
    img{
        width: 40%;
        margin: 0;
        padding: 0;
    }
 
    @media(max-width: 700px){
        
        .logo{
            display: none;
        }
    }
    @media(max-width: 550px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`

export const LogoContainer = styled.div`
    display: flex;
`

export const BotoesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`



