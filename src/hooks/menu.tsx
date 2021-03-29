import { useState, useContext, createContext, useCallback, ReactNode } from 'react';

interface MenuProps {
   isOpen: boolean;
   toggleOpenMenu: () => void;
}

interface MenuContainerProps {
   children: ReactNode;
}

const MenuContext = createContext<MenuProps>({} as MenuProps);

export default function MenuContextContainer({ children }: MenuContainerProps) {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const toggleOpenMenu = useCallback(() => {
      setIsOpen(!isOpen);
   }, [isOpen])


   return(
      <MenuContext.Provider value={{ isOpen, toggleOpenMenu }}>
         { children }
      </MenuContext.Provider>
   );
}

function useMenu(): MenuProps {
   return useContext(MenuContext);
}

export { useMenu };