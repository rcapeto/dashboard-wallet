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
   return(
      <Container>
         <Tag color={tagColor} />

         <div>
            <span>{title}</span>
            <small>{date}</small>
         </div>

         <h3>{amount}</h3>
      </Container>
   );
}