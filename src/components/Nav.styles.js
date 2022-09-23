import styled from "styled-components"
export const Wrapper = styled.div`

display: flex;
align-items: flex-center;
justify-content: space-between;
background:#1786b1;
color: #01474f;
padding:2rem

`;

export const Title = styled.span`
    padding-top: 60px;
    padding-left:1rem;
    color: #01474f;
    font-weight: 800;
    font-size: 3rem; 

    @media screen and (max-width: 1440px){
        font-size: 2rem; 
    }
    @media screen and (max-width: 1024px){
        font-size: 1.5rem; 
    }

    @media screen and (max-width: 768px){
        font-size: 1rem; 
    }
    @media screen and (max-width: 425px){
        font-size: 0.75rem; 
    }
`;