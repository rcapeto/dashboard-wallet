import { useMemo} from 'react';
import { IoMdMenu } from 'react-icons/io';
import { 
   Container, 
   Profile, 
   Welcome, 
   Username,
   ToggleContainer
} from './styles';

import emojis from '../../utils/emojis';
import { useMenu } from '../../hooks/menu';
import Toggle from '../Toggle';

export default function MainHeader() {
   const { toggleOpenMenu } = useMenu();

   const emoji = useMemo(() => {
      const index = Math.floor(Math.random() * emojis.length);
      return emojis[index];
   }, []);

   return(
      <Container>
         <ToggleContainer>
            <Toggle leftLabel="Light" rightLabel="Dark" />
         </ToggleContainer>

         <button onClick={toggleOpenMenu}>
            <IoMdMenu size={25} color="#fff"/>
         </button>

         <Profile>
            <Welcome>Olá, {emoji}</Welcome>
            <Username>Raphael Capeto</Username>
         </Profile>
      </Container>
   );
}  