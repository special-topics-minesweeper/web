// @ts-ignore
import useStyles from "./styles";
import { IBoard } from "./types";
import { Paper } from "@material-ui/core";
import { useMemo } from "react";

const Board = ({ size }: IBoard) => {
  const arr = useMemo(() => '.'.repeat(size*size).split(''), [size]);
  const classes = useStyles({ size });
  return (<Paper className={classes.root} elevation={6}>
    {
      arr.map((item, i) => <div className={classes.cell} key={i}> <span> {i} </span> </div>)
    }
  </Paper>)
}

export default Board;
