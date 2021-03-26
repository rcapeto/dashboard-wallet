import {
   MdDashboard,
   MdArrowDownward,
   MdArrowUpward,
   MdExitToApp
} from 'react-icons/md';

import { Link } from 'react-router-dom';

import {
   Container,
   Header,
   LogoImg,
   MenuContainer,
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
            <Link to="/dashboard">
               <MdDashboard />
               Dashboard
            </Link>

            <Link to="/list/entry-balance">
               <MdArrowUpward />
               Entradas
            </Link>

            <Link to="/list/exit-balance">
               <MdArrowDownward />
               Saídas
            </Link>

            <Link to="/">
               <MdExitToApp />
               Sair
            </Link>
         </MenuContainer>
      </Container>
   );
}