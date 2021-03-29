import { createContext, useState, useCallback, useContext, ReactNode } from 'react';

interface AuthProps {
   logged: boolean;
   login: (email: string, password: string) => void;
   logout: () => void;
}

interface AuthContainerProps {
   children: ReactNode;
}

const AuthContext = createContext<AuthProps>({} as AuthProps);

export default function AuthContextContainer({ children }: AuthContainerProps) {
   const [logged, setLogged] = useState<boolean>(!!localStorage.getItem('@minha-carteira:logged'));

   const login = useCallback((email: string, password: string) => {
      if(email === 'raphaelcapeto@gmail.com' && password === '123') {
         localStorage.setItem('@minha-carteira:logged', 'true');
         setLogged(true);
      } else {
         window.alert('Senha ou e-mail inválido!');
      }
   }, []);

   const logout = useCallback(() => {
      localStorage.removeItem('@minha-carteira:logged');
      setLogged(false);
   }, []);

   return(
      <AuthContext.Provider value={{ login, logged, logout }}>
         { children }
      </AuthContext.Provider>
   );
}

function useAuth(): AuthProps {
   return useContext(AuthContext);
}

export { useAuth };