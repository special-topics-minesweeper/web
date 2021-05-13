import { useMemo } from "react";

import Header from '../../componets/Header';

import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from "../../componets/PrivateRoute";
import Authentication from "../Authentication";
import { themeDark, themeLight } from "./theme";
import Game from "../Game";
import Instructions from "../Instructions";
import Profile from "../Profile";


function App() {
  const prefersDarkMode = useMemo(() => matchMedia && matchMedia('(prefers-color-scheme: dark)').matches, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={prefersDarkMode? themeDark: themeLight}>
        <Switch>
        <Route path="/auth">
          <Authentication />
        </Route>
          <PrivateRoute path="/play">
            <Header>
              <Game />
            </Header>
          </PrivateRoute>
          <PrivateRoute path="/instructions">
            <Header>
              <Instructions />
            </Header>
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Header>
              <Profile />
            </Header>
          </PrivateRoute>
          <Route path="/" >
            <Redirect to="play"/>
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
