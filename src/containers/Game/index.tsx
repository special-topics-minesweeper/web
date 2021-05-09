import Board from "../Board";
import Sidebar from "../Sidebar";
import useStyles from "./styles";
import { CircularProgress } from "@material-ui/core";
import LevelChooser from "../LevelChooser";
import { useCallback, useState } from "react";
import { Difficulty } from "./types";

const Game = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const onLevelSelect = useCallback((difficulty: Difficulty) => {
    console.log(difficulty);
  }, []);
  return (
    <div className={classes.root}>
      {data && data.length ? (
        <>
          <Board width={30} height={16}/>
          <Sidebar />
        </>
      ): (
        isLoading ? <CircularProgress /> : <LevelChooser onSelect={onLevelSelect}/>
      )}
  </div>)
}

export default Game;
