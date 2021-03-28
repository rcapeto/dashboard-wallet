import { Container, SideLeft, Legend, LegendContainer, SideRight } from './styles';
// import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

export default function PieChart() {
   return(
      <Container>
         <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
               <Legend color="#f7931b">
                  <div>95%</div>
                  <span>Saídas</span>
               </Legend>
               <Legend color="#e44c4e">
                  <div>5%</div>
                  <span>Entradas</span>
               </Legend>
            </LegendContainer>
         </SideLeft>

         <SideRight>
            {/* <ResponsiveContainer>
               <PieChart>
                  <Pie
                     data={[{ amount: 30, percent: 95 }]}
                     labelLine={false}
                     dataKey="percent"
                  />
               </PieChart>
            </ResponsiveContainer> */}

         </SideRight>
      </Container>
   );
}