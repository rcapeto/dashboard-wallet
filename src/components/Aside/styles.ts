import styled from 'styled-components';

interface ContainerProps {
   isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
   grid-area: AS;
   background-color: ${props => props.theme.colors.secondary};
   padding-left: 20px;
   border-right: 1px solid ${props => props.theme.colors.gray};
   display: flex;
   flex-direction: column;
   transition: all ease 0.5s;
   position: relative;

   > button {
      display: none;
      visibility: hidden;
   }

   @media(max-width: 600px) {
      position: absolute;
      z-index: 9;
      left: ${props => props.isOpen ? '0' : '-300px'};
      top: 0;
      bottom: 0;
      padding: 20px;

      > button {
         display: block;
         visibility: visible;
         position: absolute;
         right: 10px;
         top: 5px;
         padding: 5px;
         border-radius: 7px;
         background-color: ${props => props.theme.colors.secondary};
      }
   }
`;


export const Header = styled.header`
   display: flex;
   align-items: center;
   height: 70px;
`;

export const LogoImg = styled.img`
   height: 40px;
   width: 40px;
`;

export const MenuContainer = styled.nav`
   flex: 1;
   margin-top: 50px;
   display: flex;
   flex-direction: column;

   > a {
      color: ${props => props.theme.colors.info};
      text-decoration: none;
      transition: opacity ease 0.6s;
      margin: 7px 0;
      display: flex;
      align-items: center;

      &:hover {
         opacity: 0.6;
      }

      svg {
         margin-right: 10px;
         font-size: 18px;
      }
   }
`;

export const Title = styled.h3`
   color: ${props => props.theme.colors.white};
   margin-left: 10px;
`;

export const ToggleContainer = styled.div`
   margin-bottom: 20px;
   display: none;
   visibility: none;

   @media(max-width: 770px) {
      display: block;
      visibility: visible;
   }
`;