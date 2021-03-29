import styled from 'styled-components';

interface TitleContainerProps {
   lineColor: string;
}


export const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 25px;

   @media(max-width: 410px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
   }
`;

export const TitleContainer = styled.div<TitleContainerProps>`

   > h1 {
      color: ${props => props.theme.colors.white};

      &::after {
         content: '';
         display: block;
         width: 55px;
         border-bottom: 10px solid ${props => props.lineColor};
      }
   }
`; 

export const Controllers = styled.div`
   display: flex;
   align-items: center;

   @media(max-width: 410px) {
      margin-top: 20px;
   }
`;