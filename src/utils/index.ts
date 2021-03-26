interface FormatedMonths {
   month: string;
   number: number;
}

interface FormatedYear {
   year: number;
   number: number;
}

const months: string[] = [
   'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
   'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
   'Novembro', 'Dezembro'
];

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

export const formatedMonths: FormatedMonths[] = [
   { number: currentMonth, month: months[currentMonth] },
];

for(let i = 0; i <= 11; i++) {
   const date = new Date(currentYear, i, 1);
   const monthDate =  date.getMonth();

   if(monthDate === currentMonth) continue;

   formatedMonths.push({
      month: months[monthDate],
      number: monthDate
   });
}

export const formatedYear: FormatedYear[] = [
   { year: currentYear, number: currentYear },
   { year: currentYear - 1, number: currentYear - 1},
   { year: currentYear - 2, number: currentYear - 2},
];