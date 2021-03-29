import { createContext, ReactNode, useState, useContext, useCallback } from 'react';
import { darkTheme, lightTheme } from '../styles/themes';
import { ThemeProps } from '../interfaces';

interface ThemeContextProps {
   toggleTheme(theme: ThemeProps | null): void;
   theme: ThemeProps;
}

interface ThemeContainerProps {
   children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export default function ThemeContextContainer({ children }: ThemeContainerProps) {
   const [theme, setTheme] = useState<ThemeProps>(darkTheme);

   const toggleTheme = useCallback((newTheme: ThemeProps | null) => {
      if(newTheme) {
         setTheme(newTheme);
         return;
      }
      theme.title === 'dark' ? setTheme(lightTheme) : setTheme(darkTheme);
   }, [theme.title]);

   return(
      <ThemeContext.Provider value={{ toggleTheme, theme }}>
         { children }
      </ThemeContext.Provider>
   );
}

export function useTheme() {
   const context = useContext(ThemeContext);
   return context;
}