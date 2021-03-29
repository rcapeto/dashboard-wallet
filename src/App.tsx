import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';

import Routes from './routes';
import { useTheme } from './hooks/theme';

export default function App() {
  const { theme } = useTheme();

  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Routes />
    </ThemeProvider>
  );
}