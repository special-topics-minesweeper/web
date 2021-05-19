import TimerIcon from '@material-ui/icons/Timer';

import { ITimer } from "./types";
import { useEffect, useState } from "react";
import { secondsToTime } from "./utils";
import useStyles from "./styles";

const Timer = ({ reset, setReset, isStopped, ...props }: ITimer) => {
  const classes = useStyles();

  const [time, setTime] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTime(prev => {
      if(isStopped) return prev;
      return prev + 1;
    }), 1000);
    return () => clearInterval(id);
  }, [isStopped]);

  useEffect(() => {
    if(reset){
      setTime(0);
      setReset(false);
    }
  }, [reset, setReset])
  console.log(reset, setReset, isStopped);
  return (<div className={classes.root}>
    <TimerIcon className={classes.icon}/>
    <span className={classes.time} {...props}>
      {secondsToTime(time)}
    </span>
  </div>);
};

export default Timer;
