import { createMuiTheme } from "@material-ui/core/styles";

import grey from "@material-ui/core/colors/grey";

export const themeLight = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: grey[800],
    },
  }
});

export const themeDark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: grey[200],
    },
  }
});
