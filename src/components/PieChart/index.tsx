import { useMemo } from 'react';
import { Container, SideLeft, Legend, LegendContainer, SideRight } from './styles';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

interface PieChartProps {
   expenses: number;
   gains: number;
}

export default function PieChartComponent({ expenses, gains }: PieChartProps) {
   const relationExpensesAndGains = useMemo(() => {
      const total = gains + expenses;

      const percentGains = ((100 * gains) / total).toFixed(1);
      const percentExpenses = ((100 * expenses) / total).toFixed(1);

     return [
         {
           name: 'Entradas',
           value: gains,
           percent: percentGains.replace('.', ','),
           color: '#e44c4e'
         },
         {
            name: 'Saídas',
            value: expenses,
            percent: percentExpenses.replace('.', ','),
            color: '#f7931b'
          }
     ];

   }, [gains, expenses]);

   return(
      <Container>
         <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
               {
                  relationExpensesAndGains.map((item, index) => (
                     <Legend color={item.color} key={index}>
                        <div>{item.percent}%</div>
                        <span>{item.name}</span>
                     </Legend>
                  ))
               }
            </LegendContainer>
         </SideLeft>

         <SideRight>
            <ResponsiveContainer>
               <PieChart >
                  <Pie
                     data={relationExpensesAndGains}
                     labelLine={false}
                     dataKey="value"
                  >
                     {relationExpensesAndGains.map((item, index) => (
                        <Cell key={`cell-${index}`} fill={item.color} />
                     ))}
                  </Pie>
               </PieChart>
            </ResponsiveContainer>
         </SideRight>
      </Container>
   );
}