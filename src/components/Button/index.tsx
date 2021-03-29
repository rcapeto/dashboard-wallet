import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Input({ children ,...rest }: ButtonProps) {
   return(
      <Container {...rest}>
         { children }
      </Container>
   );
}