import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContextContainer from './hooks/theme';
import AuthContextContainer from './hooks/auth';
import MenuContextContainer from './hooks/menu';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextContainer>
      <ThemeContextContainer>
        <MenuContextContainer>
          <App />
        </MenuContextContainer>
      </ThemeContextContainer>
    </AuthContextContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
