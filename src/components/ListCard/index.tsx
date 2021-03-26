import { Container, Tag } from './styles';

interface ListCardProps {
   tagColor: string;
   title: string;
   date: string;
   amount: string;
}

export default function ListCard({
   amount,
   date,
   tagColor,
   title
}: ListCardProps) {
   const [year, month, day] = date.split('-');

   return(
      <Container>
         <Tag color={tagColor} />

         <div>
            <span>{title}</span>
            <small>{`${day}/${month}/${year}`}</small>
         </div>

         <h3>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'brl' }).format(+amount)}</h3>
      </Container>
   );
}