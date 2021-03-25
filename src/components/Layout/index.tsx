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
         <MainHeader />
         <Aside />
         <Content>
            { children }
         </Content>
      </Grid>
   );
}