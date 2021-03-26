export interface ItemProps {
   "description": string;
   "amount": string;
   "type": "saída" | "entrada";
   "frequency": "recorrente" | "eventual";
   "date": string;
}
