import {
   MdDashboard,
   MdArrowDownward,
   MdArrowUpward,
   MdExitToApp,
   MdClose
} from 'react-icons/md';

import { Link } from 'react-router-dom';

import {
   Container,
   Header,
   LogoImg,
   MenuContainer,
   Title,
   ToggleContainer
} from './styles';

import { useAuth } from '../../hooks/auth';
import { useMenu } from '../../hooks/menu';
import Toggle from '../Toggle';

import logoImg from '../../assets/logo.svg';

export default function Aside() {
   const { logout } = useAuth();
   const { isOpen, toggleOpenMenu } = useMenu();

   return(
      <Container isOpen={isOpen}>
         <button onClick={toggleOpenMenu}>
            <MdClose color="#fff" size={20}/>
         </button>
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

            <Link to="/login" onClick={logout}>
               <MdExitToApp />
               Sair
            </Link>
         </MenuContainer>

         <ToggleContainer>
            <Toggle leftLabel="Light" rightLabel="Dark"/>
         </ToggleContainer>
      </Container>
   );
}