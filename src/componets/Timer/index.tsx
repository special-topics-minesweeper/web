import TimerIcon from '@material-ui/icons/Timer';

import { ITimer } from "./types";
import { useEffect, useState } from "react";
import { secondsToTime } from "./utils";
import useStyles from "./styles";

const Timer = ({ isRunning, ...props }: ITimer) => {
  const classes = useStyles();
  const [time, setTime] = useState(0);
  const [showTime, setShowTime] = useState(0);

  useEffect(() => {
    if(!isRunning) {
      setShowTime(time);
      setTime(0);
      return;
    }
    const intervalId = setInterval(() => isRunning && setTime(prev => prev + 1), 1000);
    return () => { clearInterval(intervalId) }
  }, [isRunning, time])

  return (<div className={classes.root}>
    <TimerIcon className={classes.icon}/>
    <span className={classes.time} {...props}>
      {secondsToTime(isRunning ? time : showTime)}
    </span>
  </div>);
};

export default Timer;
