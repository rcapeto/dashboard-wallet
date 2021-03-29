import { useState, useEffect } from 'react';
import { Container, ToggleLabel, ToggleSelector } from './styles';
import { useTheme } from '../../hooks/theme';
import { darkTheme, lightTheme } from '../../styles/themes';
import { ThemeProps } from '../../interfaces';

interface ToggleProps {
   leftLabel: string;
   rightLabel: string;
}

export default function Toggle({ leftLabel, rightLabel }: ToggleProps) {
   const { toggleTheme, theme } = useTheme();
   const [checked, setChecked] = useState(theme.title === 'dark' ? true : false);

   function handleChangeTheme(check: boolean) {
      toggleTheme(null);
      setChecked(check);

      check ?
         localStorage.setItem('wallet:Theme', JSON.stringify(darkTheme))
      :
         localStorage.setItem('wallet:Theme', JSON.stringify(lightTheme))
      
   }

   useEffect(() => {
      const themeChecked = localStorage.getItem('wallet:Theme');
      
      if(themeChecked) {
         const theme: ThemeProps = JSON.parse(themeChecked);
         toggleTheme(theme);
         setChecked(theme.title === 'dark' ? true : false);
      }

   }, [toggleTheme]);

  
   return(
      <Container>
         <ToggleLabel>{leftLabel}</ToggleLabel>
         <ToggleSelector 
            checked={checked} 
            onChange={handleChangeTheme} 
            uncheckedIcon={false} 
            checkedIcon={false}
         />
         <ToggleLabel>{rightLabel}</ToggleLabel>
      </Container>
   );
}