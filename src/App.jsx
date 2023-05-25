import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router/Router';
import { theme } from './theme/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
