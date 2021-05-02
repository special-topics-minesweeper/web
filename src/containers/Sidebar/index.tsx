import { Paper } from '@material-ui/core';
import useStyles from "./styles";
import Timer from "../../componets/Timer";
import Info from '../../componets/Info';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const Sidebar = () => {
  const classes = useStyles();
  return (<Paper className={classes.root}>
    <div className={classes.upper}>
      <Timer isRunning/>
      <Info> 7/12 mines left </Info>
    </div>
    <div className={classes.lower}>
      <ButtonGroup color="default" className={classes.buttons}>
        <Button>Restart</Button>
        <Button>Quit Game</Button>
      </ButtonGroup>
    </div>
  </Paper>);
}

export default Sidebar;
