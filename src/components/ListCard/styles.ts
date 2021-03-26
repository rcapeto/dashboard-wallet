import styled from 'styled-components';

interface ColorProps {
   color: string;
}

export const Container = styled.li`
   background-color: ${props => props.theme.colors.tertiary};
   list-style: none;
   border-radius: 5px;
   margin: 10px 0;
   padding: 12px 10px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: relative;
   cursor: pointer;
   transition: all ease .6s;
   color: ${props => props.theme.colors.white};

   &:hover {
      opacity: 0.7;
      transform: translateX(10px);
   }

   > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 10px;
   }
`;

export const Tag = styled.div<ColorProps>`
   position: absolute;
   background-color: ${props => props.color};
   width: 10px;
   height: 60%;
   left: 0;
`;