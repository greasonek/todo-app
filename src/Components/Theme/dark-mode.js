// go to mui
// customization --> theming
// pick out theme colors
// copy paste the code into here

import { createTheme } from '@mui/material/styles';

export const darkMode = createTheme ({
    palette: {
      primary: {
        main: '#eceff1',
      },
      secondary: {
        main: '#263238',
      },
      background: {
        default: '#eceff1',
      },
    },
})

