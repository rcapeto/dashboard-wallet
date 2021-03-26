import { Container, Content } from './styles';

import ContentHeader from '../../components/ContentHeader';
import Select from '../../components/Select';
import ListCard from '../../components/ListCard';
import { formatedMonths, formatedYear } from '../../utils';

export default function List() {
   const monthsOptions = formatedMonths.map(month => ({ value: month.number, label: month.month }));
   const yearsOptions = formatedYear.map(year => ({ value: year.number, label: year.year }));

   console.log(formatedMonths);
   console.log(formatedYear);

   return(
      <Container>
         <ContentHeader title="Saídas" lineColor="#e44c43">
            <Select options={monthsOptions}/>
            <Select options={yearsOptions}/>
         </ContentHeader>

         <Content>
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz" 
            />
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz"
            />
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz"
            />
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz"
            />
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz"
            />
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz"
            />
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz"
            />
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz"
            />
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz"
            />
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz"
            />
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz"
            />
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz"
            />
            <ListCard 
               amount="R$ 130,00"
               date="20/02/21"
               tagColor="#e44c4e"
               title="Conta de luz"
            />
         </Content>
         
      </Container>
   );
}