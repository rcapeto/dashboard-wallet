import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader';
import Select from '../../components/Select';

export default function Dashboard() {
   const options = [
      { value: 'Raphael', label: 'Raphael' },
      { value: 'Raphael', label: 'Raphael' },
      { value: 'Raphael', label: 'Raphael' },
   ];

   return(
      <Container>
         <ContentHeader title="Dashboard" lineColor="#f7931b">
            <Select options={options}/>
         </ContentHeader>
      </Container>
   );
}