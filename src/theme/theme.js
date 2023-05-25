import { createTheme } from '@mui/material';

import { ComponentsOverrides } from './overrides';
import { Palette } from './palette';
import { Typography } from './typography';

export const theme = createTheme({
  palette: Palette(),
  typography: Typography(),
  components: ComponentsOverrides(),
});
