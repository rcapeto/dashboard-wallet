import styled, { keyframes } from 'styled-components';

interface ColorProps {
   color: string;
}

const animate = keyframes`
   0% {
      transform: translateY(-100px);
      opacity: 0;
   }

   50% {
      opacity: 0.3;
   }

   100% {
      transform: translateY(0px);
      opacity: 1;
   }
`;

export const Container = styled.div<ColorProps>`
   background-color: ${props => props.color};
   width: 32%;
   height: 150px;
   margin: 10px 0;
   color: ${props => props.theme.colors.white};
   border-radius: 7px;
   padding: 10px 20px;
   position: relative;
   overflow: hidden; //apagar a imagem fora do cartão
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-around;
   animation: ${animate} .5s;

   > h1 {
      margin-left: 10px;
   }

   > img {
      position: absolute;
      right: -20px;
      top: -10px;
      height: 110%;
      opacity: .3;
   }

   > span {
      font-weight: 500;
      font-size: 14px;
   }

   > small {
      font-size: 12px;
   }

   @media(max-width: 850px) {
      width: 100%;

      > span {
         font-size: 14px;
      }

      > h1 {
         word-wrap: break-word;
         font-size: 20px;
      }
   }

   @media(max-width: 600px) {
      > span {
         font-size: 14px;
      }

      > h1 {
         word-wrap: break-word;
         font-size: 20px;
      }
   }
`;