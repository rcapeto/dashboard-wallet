import { useMemo, useState } from 'react';
import { Container } from './styles';

import ContentHeader from '../../components/ContentHeader';
import Select from '../../components/Select';

import { formatedMonths, formatedYear } from '../../utils';
import { expenses } from '../../utils/expenses';
import { gains } from '../../utils/gains';
import { ItemProps } from '../../interfaces';

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

         if(!yearsArray.includes(+year)) {
            yearsArray.push(+year);
         }
      });

      return yearsArray.map(year => ({ value: year, label: year })).sort((a, b) => b.value - a.value);

   }, []);
   return(
      <Container>
         <ContentHeader title="Dashboard" lineColor="#f7931b">
            <Select options={months} onChange={() => {}}/>
            <Select options={years} onChange={() => {}}/>
         </ContentHeader>
      </Container>
   );
}