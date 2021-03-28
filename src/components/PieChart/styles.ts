import styled from 'styled-components';

interface ColorProps {
   color: string;
}

export const Container = styled.div`
   width: 48%;
   height: 260px;
   margin: 10px 0;
   background-color: ${props => props.theme.colors.tertiary};
   color: ${props => props.theme.colors.white};
   border-radius: 7px;
   display: flex;
`;

export const SideLeft = styled.aside`
   padding: 30px 20px;

   > h2 {
      margin-bottom: 30px;
   }
`; 

export const LegendContainer = styled.ul`
   list-style: none;
   max-height: 160px;
   overflow-y: scroll;
   padding-right: 20px;


   &::-webkit-scrollbar {
      width: 10px;
   }

   &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.secondary};
      border-radius: 10px;
   }

   &::-webkit-scrollbar-track {
      background-color: ${props => props.theme.colors.tertiary};
   }
`;

export const Legend = styled.li<ColorProps>`
   display: flex;
   align-items: center;
   margin-bottom: 7px;
   font-size: 14px;

   > div {
      background-color: ${props => props.color};
      width: 35px;
      height: 35px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
   }

   > span {
      margin-left: 5px;
   }
`; 

export const SideRight = styled.main``; 