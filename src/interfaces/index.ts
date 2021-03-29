export interface ItemProps {
   "description": string;
   "amount": string;
   "type": "saída" | "entrada";
   "frequency": "recorrente" | "eventual";
   "date": string;
}

export interface ThemeProps {
   title: string;
   colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      white: string;
      black: string;
      gray: string;

      success: string;
      info: string;
      warning: string;
   }
}