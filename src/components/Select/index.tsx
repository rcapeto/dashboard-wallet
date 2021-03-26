import { ChangeEvent } from 'react';
import { Container } from './styles';

interface ItemProps {
   value: string | number;
   label: string | number;
}

interface SelectProps {
   options: ItemProps[];
   onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({ options, onChange }:SelectProps) {
   return(
      <Container>
         <select onChange={onChange}>
            {
               options.map((option, index) => (
                  <option 
                     key={index} 
                     value={option.value}
                  >
                     {option.label}
                  </option>
               ))
            }
         </select>
      </Container>
   );
}