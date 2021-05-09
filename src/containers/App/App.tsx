import { useMemo } from "react";

import Header from '../../componets/Header';
import useStyles from "./styles";

import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from "../../componets/PrivateRoute";
import Authentication from "../Authentication";
import { themeDark, themeLight } from "./theme";
import Game from "../Game";


function App() {
  const prefersDarkMode = useMemo(() => matchMedia && matchMedia('(prefers-color-scheme: dark)').matches, []);

  const classes = useStyles();
  return (
    <BrowserRouter>
      <ThemeProvider theme={prefersDarkMode? themeDark: themeLight}>
        <Switch>
        <PrivateRoute path="/play">
          <Header>
            <Game />
          </Header>
        </PrivateRoute>
        <Route path="/auth">
          <Authentication />
        </Route>
        <Route path="/" >
          <Redirect to='play'/>
        </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
