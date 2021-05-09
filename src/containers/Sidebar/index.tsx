import { Paper } from '@material-ui/core';
import useStyles from "./styles";
import Timer from "../../componets/Timer";
import Info from '../../componets/Info';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { Snackbar } from "@material-ui/core";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Sidebar = () => {
  const classes = useStyles();
  const [win, setWin] = useState(false);
  return (<Paper className={classes.root}>
    <div className={classes.upper}>
      <Timer isRunning/>
      <Info> 7/12 mines left </Info>
    </div>
    <div className={classes.lower}>
      <Button onClick={() => setWin(true)}> Win </Button>
      <ButtonGroup color="default" className={classes.buttons}>
        <Button>Restart</Button>
        <Button>Quit Game</Button>
      </ButtonGroup>
    </div>
    <Snackbar
      open={win}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      autoHideDuration={6000}
      onClose={() => console.log('close')}
    >
      <Alert
        severity="success"
        onClose={() => console.log('close')}
      >
        Yuhooo! You win !!!
      </Alert>
    </Snackbar>
  </Paper>);
}

export default Sidebar;
