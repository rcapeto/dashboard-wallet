import styled from 'styled-components';

export const Container = styled.div`
   grid-area: AS;
   background-color: ${props => props.theme.colors.secondary};
   padding-left: 20px;
   border-right: 1px solid ${props => props.theme.colors.gray};
   display: flex;
   flex-direction: column;
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