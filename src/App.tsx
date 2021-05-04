import Header from './componets/Header';
import Board from "./containers/Board";
import Sidebar from "./containers/Sidebar";
import useStyles from "./styles";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <div className={classes.root}>
          <Board size={12}/>
          <Sidebar />
        </div>
      </Header>
    </ThemeProvider>
  );
}

export default App;
