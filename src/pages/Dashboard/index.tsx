import { useMemo, useState, ChangeEvent, useEffect } from 'react';
import { Container, FlexContainer } from './styles';

import ContentHeader from '../../components/ContentHeader';
import Select from '../../components/Select';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartComponent from '../../components/PieChart';
import HistoryBox from '../../components/HistoryBox';
import BarBox from '../../components/BarBox';

import { formatedMonths } from '../../utils';
import { expenses } from '../../utils/expenses';
import { gains } from '../../utils/gains';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';

export default function Dashboard() {
   const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
   const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());


   const months = useMemo(() => formatedMonths.map(month => ({
      label: month.month,
      value: month.number
   })), []);

   const years = useMemo(() => {
      const yearsArray: number[]  = [];

      [...expenses, ...gains].forEach(item => {
         const [year] = item.date.split('-');

         if(!yearsArray.includes(+year)) 
               yearsArray.push(+year);
      });

      return yearsArray.map(year => ({ value: year, label: year })).sort((a, b) => b.value - a.value);

   }, []);


   const totalExpense = useMemo(() => {
      let total: number = 0;

      expenses.forEach(item => {
         const date = new Date(item.date);
         const month = date.getMonth();
         const year = date.getFullYear();

         if(year === selectedYear && month === selectedMonth) {
            total += +item.amount;
         }
      });

      return total;
   }, [selectedYear, selectedMonth]);

   const totalGains = useMemo(() => {
      let total: number = 0;

      gains.forEach(item => {
         const date = new Date(item.date);
         const month = date.getMonth();
         const year = date.getFullYear();

         if(year === selectedYear && month === selectedMonth) {
            total += +item.amount;
         }
      });

      return total;
   }, [selectedMonth, selectedYear]);

   const currentAmount = useMemo(() => totalGains - totalExpense, [totalGains, totalExpense]);

   const message = useMemo(() => {
      if(currentAmount === 0) {
         return {
            title: 'Ufaa!',
            description: 'Neste mês, você gastou exatamente o que ganhou.',
            footerText: 'Tenha cuidado! No próximo mês, tente dimiuir gastos',
            icon: happyImg
         }
      } else if(currentAmount < 0) {
         return {
            title: 'Que triste!',
            description: 'Neste mês, você gastou mais do que deveria.',
            footerText: 'Verifique seus gastos e tente cortar algo desnecessário',
            icon: sadImg
         }
      } else {
         return {
            title: 'Muito bem!',
            description: 'Sua carteira está positiva!',
            footerText: 'Continue assim, considere em investir!',
            icon: happyImg
         }
      }
   }, [currentAmount]);


   function onChangeMonth(e: ChangeEvent<HTMLSelectElement>) {
      setSelectedMonth(+e.target.value);
   }

   function onChangeYear(e: ChangeEvent<HTMLSelectElement>) {
      setSelectedYear(+e.target.value);
   }

   return(
      <Container>
         <ContentHeader title="Dashboard" lineColor="#f7931b">
            <Select options={months} onChange={onChangeMonth}/>
            <Select options={years} onChange={onChangeYear}/>
         </ContentHeader>

         <FlexContainer>
            <WalletBox 
               title="Saldo" 
               amount={currentAmount} 
               color="#4e41f0" 
               footerLabel="Baseado com as últimas entradas e saídas" 
               icon="dolar"
            />
            <WalletBox 
               title="Entradas" 
               amount={totalGains} 
               color="#f7931b" 
               footerLabel="Baseado com as últimas entradas e saídas" 
               icon="arrow-up"
            />
            <WalletBox 
               title="Saídas" 
               amount={totalExpense} 
               color="#e44c4e" 
               footerLabel="Baseado com as últimas entradas e saídas" 
               icon="arrow-down"
            />

            <MessageBox 
               description={message.description}
               footerText={message.footerText}
               icon={message.icon}
               title={message.title}
            />

            <PieChartComponent expenses={totalExpense} gains={totalGains}/>

            <HistoryBox gains={gains} expenses={expenses} yearSelected={selectedYear}/>

            <BarBox 
               selectedMonth={selectedMonth}
               selectedYear={selectedYear}
               title="Entradas"
               values={gains}
            />

            <BarBox 
               selectedMonth={selectedMonth}
               selectedYear={selectedYear}
               title="Saídas"
               values={expenses}
            />
         </FlexContainer>
      </Container>
   );
}