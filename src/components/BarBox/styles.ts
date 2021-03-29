import styled, { keyframes } from 'styled-components';

interface ColorProps {
   color: string;
}

const animate = keyframes`
   0% {
      transform: translateY(100px);
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

export const Container = styled.div`
   width: 48%;
   min-width: 260px;
   margin: 20px 0;
   background-color: ${props => props.theme.colors.tertiary};
   color: ${props => props.theme.colors.white};
   padding: 30px 20px;
   border-radius: 7px;
   animation: ${animate} .5s;

   > h2 {
      margin-bottom: 20px;
   }

   @media(max-width: 1005px) {
      width: 100%;
   }
`;

export const FlexContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const SideLeft = styled.aside`
   padding: 30px 20px;
`;

export const LegendContainer = styled.ul`
   list-style: none;
`;

export const Legend = styled.li<ColorProps>`
   display: flex;
   align-items: center;
   margin-top: 20px;

   > div {
      height: 43px;
      width: 43px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      background-color: ${props => props.color};
      margin-right: 5px;
   }
`;

export const SideRight = styled.main`
   width: 300px;
   height: 300px;
`;