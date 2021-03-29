import { useMemo, useState, useEffect, ChangeEvent, useCallback } from 'react';
import { Container, Content, Filters } from './styles';
import { useParams } from 'react-router-dom';

import ContentHeader from '../../components/ContentHeader';
import Select from '../../components/Select';
import ListCard from '../../components/ListCard';
import { formatedMonths } from '../../utils';
import { expenses } from '../../utils/expenses';
import { gains } from '../../utils/gains';
import { ItemProps } from '../../interfaces';

interface ParamsProps {
   type: 'entry-balance' | 'exit-balance';
}

interface MemoProps {
   title: string;
   lineColor: string;
   products: ItemProps[];
}

type Filter = 'eventual' | 'recurring' | '';

export default function List() {
   const { type } = useParams<ParamsProps>();
   const [products, setProducts] = useState<ItemProps[]>([]);
   const [filter, setFilter] = useState<Filter>('');
   const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth());
   const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());


   const props = useMemo<MemoProps>(() => {
      const items = {
         title: type === 'entry-balance' ? 'Entradas' : 'Saídas',
         lineColor: type === 'entry-balance' ? '#4e41f0' : '#e44c43',
         products: type === 'entry-balance' ? gains : expenses
      }

      setProducts(items.products);

      return items;
   }, [type]);

   function handleGetEventual() {
      if(filter === 'eventual') 
         setFilter('');
      else
         setFilter('eventual');  
   }

   function handleGetRecurring() {
      if(filter === 'recurring')
         setFilter('');
      else
         setFilter('recurring');  
   }

   function onChangeMonth(e: ChangeEvent<HTMLSelectElement>) {
      setMonthSelected(+e.target.value);
   }

   function onChangeYear(e: ChangeEvent<HTMLSelectElement>) {
      setYearSelected(+e.target.value);
   }

   const filterProducts = useCallback((filter: 'recorrente' | '' | 'eventual' = ''): ItemProps[] => {
      if(filter !== '') {
         return props.products
            .filter(product => +product.date.split('-')[1] - 1 === monthSelected)
            .filter(product => +product.date.split('-')[0] === yearSelected)
            .filter(product => product.frequency === filter);
      } else {
         return props.products
         .filter(product => +product.date.split('-')[1] - 1 === monthSelected)
         .filter(product => +product.date.split('-')[0] === yearSelected)
         .filter(product => product.frequency);
      }
   }, [monthSelected, yearSelected, props]);

   useEffect(() => {
      let filteredProducts
      switch(filter) {
         case 'eventual':
            filteredProducts = filterProducts('eventual');
            setProducts(filteredProducts);
            break;
         case 'recurring':
            filteredProducts = filterProducts('recorrente')
            setProducts(filteredProducts);
            break;
         case '':
            filteredProducts = filterProducts();
            setProducts(filteredProducts);
            break;
         default: 
            break;
      }
   }, [filter, props.products, monthSelected, yearSelected, filterProducts]);


   const monthsOptions = useMemo(() => 
      formatedMonths.map(month => ({ 
         value: month.number, 
         label: month.month 
      }))
   , []);

   const yearsOptions = useMemo(() => {
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
         <ContentHeader title={props.title} lineColor={props.lineColor}>
            <Select options={monthsOptions} onChange={onChangeMonth}/>
            <Select options={yearsOptions} onChange={onChangeYear}/>
         </ContentHeader>

         <Filters>
            <button 
               type="button" 
               className={`tag-filter recurrent ${filter === 'recurring' ? 'active' : ''}`}
               onClick={handleGetRecurring }
            >
               Recorrentes
            </button>

            <button 
               type="button" 
               className={`tag-filter ${filter === 'eventual' ? 'active' : ''}`}
               onClick={handleGetEventual}
            >
               Eventuais
            </button>
         </Filters>

         <Content>
            {
               products.length > 0 && products.map((item, index) => (
                  <ListCard 
                     amount={item.amount}
                     date={item.date}
                     tagColor={item.frequency === 'eventual' ? '#e44c4e' : '#4e41f0'}
                     title={item.description} 
                     key={index}
                  />
               ))
            }
         </Content>
      </Container>
   );
}