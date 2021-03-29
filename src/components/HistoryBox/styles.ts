import styled, { keyframes } from 'styled-components';

interface ColorProps {
   color: string;
}

const animate = keyframes`
   0% {
      transform: translateX(-100px);
      opacity: 0;
   }

   50% {
      opacity: 0.3;
   }

   100% {
      transform: translateX(0px);
      opacity: 1;
   }
`;

export const Container = styled.div`
   width: 98%;
   border-radius: 7px;
   background-color: ${props => props.theme.colors.tertiary};
   height: 350px;
   color: ${props => props.theme.colors.white};
   padding: 30px 20px 40px 20px;
   margin-top: 10px;
   animation: ${animate} .5s;
`;


export const Header = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media (max-width: 785px) {
      flex-direction: column;
   }
`;

export const LegendContainer = styled.ul`
   list-style: none;
   display: flex;
   align-items: center;
   padding-right: 30px;

   @media(max-width: 640px) {
      margin-top: 10px;
   }
`;

export const Legend = styled.li<ColorProps>`
   display: flex;
   align-items: center;
   margin-top: 5px;
   margin-left: 10px;

   > div {
      background-color: ${props => props.color};
      height: 30px;
      width: 30px;
      border-radius: 7px;
      margin-right: 5px;
   }
`;
