import { Container } from './styles';

interface SelectProps {
   options: {
      value: string | number;
      label: string | number;
   }[];
}

export default function Select({ options }:SelectProps) {
   return(
      <Container>
         <select>
            {
               options.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
               ))
            }
         </select>
      </Container>
   );
}