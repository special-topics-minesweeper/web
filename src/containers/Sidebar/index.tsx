import { Paper } from '@material-ui/core';
import useStyles from "./styles";
import Timer from "../../componets/Timer";
import Info from '../../componets/Info';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import { Snackbar } from "@material-ui/core";
import { ISidebar } from "./types";
import { GAME_SIZE, GAME_STATUS } from "../Game/types";
import { useCallback, useState } from "react";
import Alert from "../../componets/Alert/Alert";


const Sidebar = ({ difficulty, flagCount, gameStatus, onLevelSelect, setData }: ISidebar) => {
  const classes = useStyles();
  const [resetTimer, setResetTimer] = useState(gameStatus !== GAME_STATUS.PENDING);
  const onRestart = useCallback(() => {
    onLevelSelect(difficulty);
    setResetTimer(true);
  }, [difficulty, onLevelSelect]);

  const onQuit = useCallback(() => {
    setData([])
  }, [setData]);

  return (<Paper className={classes.root}>
    <div className={classes.upper}>
      <Timer reset={resetTimer} setReset={setResetTimer} isStopped={gameStatus !== GAME_STATUS.PENDING}/>
      <Info> {flagCount} Flags </Info>
      <Info> {GAME_SIZE[difficulty].bombs} Bombs </Info>
    </div>
    <div className={classes.lower}>
      <ButtonGroup color="default" className={classes.buttons}>
        <Button onClick={onRestart}>Restart</Button>
        <Button onClick={onQuit}>Quit Game</Button>
      </ButtonGroup>
    </div>
    <Snackbar
      open={gameStatus === GAME_STATUS.WIN}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Alert
        severity="success"
      >
        Yuhooo! You won !!!
      </Alert>
    </Snackbar>
    <Snackbar
      open={gameStatus === GAME_STATUS.LOSE}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Alert
        severity="error"
      >
        You lost :( Try again!
      </Alert>
    </Snackbar>
  </Paper>);
}

export default Sidebar;
