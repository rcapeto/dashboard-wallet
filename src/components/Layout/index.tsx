import { ReactNode } from 'react';
import { Grid } from './styles';
import MainHeader from '../MainHeader';
import Content from '../Content';
import Aside from '../Aside';

interface LayoutProps {
   children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
   return(
      <Grid>
         <Aside />
         <MainHeader />
         <Content>
            { children }
         </Content>
      </Grid>
   );
}