import { useCallback, useEffect, useMemo, useState } from "react";

import Header from '../../componets/Header';

import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from "../../componets/PrivateRoute";
import Authentication from "../Authentication";
import { themeDark, themeLight } from "./theme";
import { UserContext } from '../../utils/contexts';
import Game from "../Game";
import Instructions from "../Instructions";
import Profile from "../Profile";
import { get as getToken, remove as removeToken } from "../../utils/token";
import { getUser } from "../../utils/fetch/getUser";


function App() {
  const prefersDarkMode = useMemo(() => matchMedia && matchMedia('(prefers-color-scheme: dark)').matches, []);
  const [userData, setUserData] = useState(null);
  const setUser = useCallback((user) => setUserData(user), []);
  useEffect(() => {
    const token = getToken();
    if (!token) return;

    getUser().then(data => {
      setUserData(data.data);
    }).catch(error => {
      removeToken();
    });
  }, []);
  return (
    <BrowserRouter>
      <ThemeProvider theme={prefersDarkMode ? themeDark : themeLight}>
        <UserContext.Provider value={{ user: userData, setUser }}>
          <Switch>
            <Route path="/auth">
              <Authentication/>
            </Route>
            <PrivateRoute path="/play">
              <Header>
                <Game/>
              </Header>
            </PrivateRoute>
            <PrivateRoute path="/instructions">
              <Header>
                <Instructions/>
              </Header>
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Header>
                <Profile/>
              </Header>
            </PrivateRoute>
            <Route path="/">
              <Redirect to="play"/>
            </Route>
          </Switch>
        </UserContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
