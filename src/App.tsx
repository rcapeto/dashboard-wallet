import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';

import { darkTheme, lightTheme } from './styles/themes';
import Routes from './routes';

export default function App() {
  return(
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}