import { Container, TitleContainer, Controllers } from './styles';

export default function ContentHeader() {
   return(
      <Container>
         <TitleContainer>
            <h1>Título</h1>
         </TitleContainer>

         <Controllers>
            <button>BotãoA</button>
            <button>BotãoB</button>
         </Controllers>
      </Container>
   );
}