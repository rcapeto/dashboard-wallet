import { useMemo } from 'react';
import { Container, Header, LegendContainer, Legend } from './styles';
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import { ItemProps } from '../../interfaces';
import { listOfMonths } from '../../utils';

interface HistoryBoxProps {
   gains: ItemProps[];
   expenses: ItemProps[];
   yearSelected: number;
}

export default function HistoryBox({ gains, expenses, yearSelected }: HistoryBoxProps) {
   const historyData = useMemo(() => {
      return listOfMonths.map((_, month) => {
         let amountEntry = 0;

         gains.forEach(gain => {
            const date = new Date(gain.date);
            const gainMonth = date.getMonth();
            const gainYear = date.getFullYear();

            if(gainMonth === month && gainYear === yearSelected) {
               amountEntry += +gain.amount;
            }
         });

         let amountOutput = 0;

         expenses.forEach(expense => {
            const date = new Date(expense.date);
            const expenseMonth = date.getMonth();
            const expenseYear = date.getFullYear();

            if(expenseMonth === month && expenseYear === yearSelected) {
               amountOutput += +expense.amount;
            }
         });

         return {
            monthNumber: month,
            month: listOfMonths[month].substring(0, 3),
            amountEntry: +amountEntry.toFixed(2),
            amountOutput: +amountOutput.toFixed(2),
         }
      });
   }, [expenses, gains, yearSelected]);

   function formatText(value: number) {
      return Intl.NumberFormat('pt-br', { 
         currency: 'brl', 
         style: 'currency'
      }).format(value);
   }

   return(
      <Container>
         <Header>
            <h2>Histórico de saldo</h2>

            <LegendContainer>
               <Legend color="#f7931b">
                  <div></div>
                  <span>Entradas</span>
               </Legend>
               <Legend color="#e44c43">
                  <div></div>
                  <span>Saídas</span>
               </Legend>
            </LegendContainer>
         </Header>

         <ResponsiveContainer width="100%" height="100%">
            <LineChart
               width={500}
               height={300}
               data={historyData}
               margin={{ top: 20, right: 30, left: 20, bottom: 35 }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="month" />
               <Tooltip 
                  formatter={formatText}
               />
               <Line 
                  type="monotone"
                  name="Entradas" 
                  dataKey="amountEntry" 
                  stroke="#f7931b" 
                  strokeWidth={5} 
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }} 
               />
               <Line 
                  type="monotone" 
                  name="Saídas" 
                  dataKey="amountOutput" 
                  stroke="#e44c43" 
                  strokeWidth={5} 
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }} 
               />
            </LineChart>
         </ResponsiveContainer>

      </Container>
   );
}