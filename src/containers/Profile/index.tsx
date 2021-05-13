import useStyles from "./styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useEffect, useState } from "react";
import classNames from "classnames";

const Profile = () => {
  const classes = useStyles();
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    setPercent(70);
  }, []);
  return (
    <Container component="main">
      <CssBaseline/>
      <Card className={classes.root}>
        <div className={classes.user}>
        <Avatar aria-label="recipe" className={classes.avatar}>
          FL
        </Avatar>
        <Typography className={classes.name}>
          <span>Firstname Lastname</span>
          <br/><
          span className={classes.username}>username</span>
        </Typography>
        </div>
        <div className={classes.progressContainer}>
          <Typography className={classes.played}>5 wins out 8</Typography>
          <LinearProgress variant="determinate" value={percent} className={classes.progress}/>
        </div>
        <Typography className={classes.title}> Best Times </Typography>
        <div className={classes.scoresContainer}>
          <div className={classes.scoreCard}>
            <div className={classNames(classes.scoreContent, 'easy')}>
              <h1 className={classes.score}>112</h1>
              <div className={classes.seconds}>seconds</div>
              <div className={classes.scoreDivider}/>
              <div className={classes.difficulty}>Easy</div>
            </div>
            <div className={classes.divider}/>
          </div>
          <div className={classes.scoreCard}>
            <div className={classNames(classes.scoreContent, 'medium')}>
              <h1 className={classes.score}>612</h1>
              <div className={classes.seconds}>seconds</div>
              <div className={classes.scoreDivider}/>
              <div className={classes.difficulty}>Medium</div>
            </div>
            <div className={classes.divider}/>
          </div>
          <div className={classes.scoreCard}>
            <div className={classNames(classes.scoreContent, 'hard')}>
              <h1 className={classes.score}>182</h1>
              <div className={classes.seconds}>seconds</div>
              <div className={classes.scoreDivider}/>
              <div className={classes.difficulty}>Hard</div>
            </div>
            <div className={classes.divider}/>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default Profile;
