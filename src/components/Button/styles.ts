import styled from 'styled-components';

export const Container = styled.button`
   width: 100%;
   font-weight: bold;
   padding: 10px;
   border-radius: 5px;
   margin: 7px 0;
   color: ${props => props.theme.colors.white};
   background-color: ${props => props.theme.colors.warning};
   transition: opacity .3s ease;

   &:hover {
      opacity: 0.7;
   }

`;