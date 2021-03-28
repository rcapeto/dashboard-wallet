import { useMemo } from 'react';
import CountUp from 'react-countup';
import { Container } from './styles';

import dollarImg from '../../assets/dolar.svg';
import arrowUp from '../../assets/arrow-up.svg';
import arrowDown from '../../assets/arrow-down.svg';

interface WalletBoxProps {
   title: string;
   amount: number;
   footerLabel: string;
   icon: 'dolar' | 'arrow-up' | 'arrow-down';
   color: string;
}

export default function WalletBox({ amount, footerLabel, icon, title, color }: WalletBoxProps) {
   const iconSelected = useMemo(() => {
      switch(icon) {
         case 'arrow-down':
            return arrowDown;
         case 'arrow-up':
            return arrowUp;
         case 'dolar':
            return dollarImg;
         default:
            break;
      }
   }, [icon]);

   return(
      <Container color={color}>
         <span>{title}</span>
         <h1>
            <CountUp end={amount} prefix="R$ " separator="." decimal="," decimals={2}/>
         </h1>
         <small>{footerLabel}</small>
         <img src={iconSelected} alt={title} />
      </Container>
   );
}