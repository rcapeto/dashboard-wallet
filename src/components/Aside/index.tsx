import {
   MdDashboard,
   MdArrowDownward,
   MdArrowUpward,
   MdExitToApp
} from 'react-icons/md';

import {
   Container,
   Header,
   LogoImg,
   MenuContainer,
   MenuItemLink,
   Title
} from './styles';

import logoImg from '../../assets/logo.svg';

export default function Aside() {
   return(
      <Container>
         <Header>
            <LogoImg src={logoImg} alt="Minha Carteira"/>
            <Title>Minha carteira</Title>
         </Header>

         <MenuContainer>
            <MenuItemLink href="#">
               <MdDashboard />
               Dashboard
            </MenuItemLink>

            <MenuItemLink href="#">
               <MdArrowUpward />
               Entradas
            </MenuItemLink>

            <MenuItemLink href="#">
               <MdArrowDownward />
               Saídas
            </MenuItemLink>

            <MenuItemLink href="#">
               <MdExitToApp />
               Sair
            </MenuItemLink>
         </MenuContainer>
      </Container>
   );
}