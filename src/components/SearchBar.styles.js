
import styled from 'styled-components';

export const Search = styled.div`
    margin-top: 10px;
    background:#1786b1;
    font-size: 2rem;

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
export const Click = styled.button`
  background-color: rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 2rem;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin: 0;
  padding: 10px 12px;
  text-align: center;
  transition: all 200ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
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
`