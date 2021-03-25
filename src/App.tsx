import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import Layout from './components/Layout';

import { darkTheme, lightTheme } from './styles/themes';
import Dashboard from './pages/Dashboard';

export default function App() {
  return(
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
}