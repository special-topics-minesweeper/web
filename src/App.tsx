import Header from './componets/Header';
import Board from "./containers/Board";
import Sidebar from "./containers/Sidebar";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <Header>
      <div className={classes.root}>
        <Board size={12}/>
        <Sidebar />
      </div>
    </Header>

  );
}

export default App;
