// go to mui
// customization --> theming
// pick out theme colors
// copy paste the code into here

import { createTheme } from '@mui/material/styles';

export const darkMode = createTheme ({
    palette: {
      primary: {
        main: '#004d40',
      },
      secondary: {
        main: '#689f38',
      },
      background: {
        default: '#bfc355',
      },
    },
})

