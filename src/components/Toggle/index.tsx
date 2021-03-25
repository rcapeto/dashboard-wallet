import { Container, ToggleLabel, ToggleSelector } from './styles';

export default function Toggle() {
   return(
      <Container>
         <ToggleLabel>Light</ToggleLabel>
         <ToggleSelector 
            checked={true} 
            onChange={() => {}} 
            uncheckedIcon={false} 
            checkedIcon={false}
         />
         <ToggleLabel>Dark</ToggleLabel>
      </Container>
   );
}