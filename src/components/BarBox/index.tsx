import { useMemo } from 'react';
import { ResponsiveContainer, BarChart, Bar, Tooltip, Cell } from 'recharts';
import { ItemProps } from '../../interfaces';
import { Container, SideLeft, SideRight, LegendContainer, Legend, FlexContainer } from './styles';

interface BarBoxProps {
   selectedYear: number;
   selectedMonth: number;
   values: ItemProps[];
   title: string;
}

export default function BarBox({ selectedMonth, selectedYear, values, title }: BarBoxProps) {
   const relationRecurrentVersusEventual = useMemo(() => {
      let amountRecurrent = 0;
      let amoutEventual = 0;

      values.filter(item => {
         const itemDate = new Date(item.date);
         const itemMonth = itemDate.getMonth();
         const itemYear = itemDate.getFullYear();

         return itemMonth === selectedMonth && itemYear === selectedYear;

      }).map(item => {
         if(item.frequency === 'recorrente') amountRecurrent += +item.amount;
         if(item.frequency === 'eventual') amoutEventual += +item.amount;
         return item;
      });

      const total = amountRecurrent + amoutEventual;
      const percentualRecurrent = +((100 * amountRecurrent) / total).toFixed(1);
      const percentualEventual = +((100 * amoutEventual) / total).toFixed(1);

      return [
         { 
            name: 'Recorrentes', 
            amount: amountRecurrent, 
            percentual: percentualRecurrent ? percentualRecurrent : 0, 
            color: '#f7931b' 
         },
         { 
            name: 'Eventuais', 
            amount: amoutEventual, 
            percentual: percentualEventual ? percentualEventual : 0, 
            color: '#e44c4e' 
         },
      ];

   }, [selectedMonth, selectedYear, values]);

   function formatText(value: number) {
      return Intl.NumberFormat('pt-br', { 
         currency: 'brl', 
         style: 'currency'
      }).format(value);
   }


   return(
      <Container>
         <h2>{title}</h2>

         <FlexContainer>
            <SideLeft>
               <LegendContainer>
               {
                  relationRecurrentVersusEventual.map((item, index) => (
                        <Legend color={item.color} key={index}>
                           <div>{item.percentual}%</div>
                           <span>{item.name}</span>
                        </Legend>
                  ))
               }
               </LegendContainer>
            </SideLeft>

            <SideRight>
               <ResponsiveContainer >
                  <BarChart data={relationRecurrentVersusEventual}>
                     <Bar dataKey="amount" name="Valor">
                        {
                           relationRecurrentVersusEventual.map((item, index) => (
                              <Cell fill={item.color} key={index} width={100} />
                           ))
                        }
                     </Bar>
                     <Tooltip formatter={formatText} cursor={{ fill: 'none' }}/>
                  </BarChart>
               </ResponsiveContainer>
            </SideRight>
         </FlexContainer>
      </Container>
   );
}