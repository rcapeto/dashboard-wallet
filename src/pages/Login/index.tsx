import { FormEvent, useState } from 'react';
import { Container, Logo, Form, FormTitle } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

export default function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { login } = useAuth();

   function handleSubmit(event: FormEvent) {
      event.preventDefault();

      if(!email || !password) return window.alert('Por favor preencha todos os dados');

      login(email, password);
   }

   return(
      <Container>
         <Logo>
            <img src={logoImg} alt="Minha Carteira"/>
            <h2>Minha Carteira</h2>
         </Logo>

         <Form onSubmit={handleSubmit}>
            <FormTitle>Entrar</FormTitle>

            <Input 
               required
               type="email"
               placeholder="exemplo@exemplo.com"
               value={email}
               onChange={e => setEmail(e.target.value)}
            />
            
            <Input 
               required
               type="password"
               placeholder="Sua senha"
               value={password}
               onChange={e => setPassword(e.target.value)}
            />

            <Button type="submit">Acessar</Button>
         </Form>
      </Container>
   );
}