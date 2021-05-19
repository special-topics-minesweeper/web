import { useContext, useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useHistory } from 'react-router-dom';
import classNames from "classnames";
import useStyles from "./styles";
import { UserContext } from "../../utils/contexts";

const Profile = () => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if(!user) return;
    setPercent(user.wins_count / user.games_count * 100 || 0);
  }, [user]);

  if(!user) {
    history.replace('play');
    return null;
  }

  return (
    <Container component="main">
      <CssBaseline/>
      <Card className={classes.root}>
        <div className={classes.user}>
          <Avatar aria-label="recipe" className={classes.avatar}>
            {`${user.firstname[0]}${user.lastname[0]}`}
          </Avatar>
          <Typography className={classes.name}>
            <span>{user.firstname} {user.lastname}</span>
            <br/>
            <span className={classes.username}>{user.username}</span>
          </Typography>
        </div>
        <div className={classes.progressContainer}>
          <Typography className={classes.played}>{user.wins_count} wins out {user.games_count}</Typography>
          <LinearProgress variant="determinate" value={percent} className={classes.progress}/>
        </div>
        <Typography className={classes.title}> Best Times </Typography>
        <div className={classes.scoresContainer}>
          <div className={classes.scoreCard}>
            <div className={classNames(classes.scoreContent, 'easy')}>
              <h1 className={classes.score}>{ user.best_results.easy >= 0 ? user.best_results.easy : '-' }</h1>
              <div className={classes.seconds}>seconds</div>
              <div className={classes.scoreDivider}/>
              <div className={classes.difficulty}>Easy</div>
            </div>
            <div className={classes.divider}/>
          </div>
          <div className={classes.scoreCard}>
            <div className={classNames(classes.scoreContent, 'medium')}>
              <h1 className={classes.score}>{user.best_results.medium >= 0 ? user.best_results.medium : '-'} </h1>
              <div className={classes.seconds}>seconds</div>
              <div className={classes.scoreDivider}/>
              <div className={classes.difficulty}>Medium</div>
            </div>
            <div className={classes.divider}/>
          </div>
          <div className={classes.scoreCard}>
            <div className={classNames(classes.scoreContent, 'hard')}>
              <h1 className={classes.score}>{user.best_results.hard >= 0 ? user.best_results.hard : '-'}</h1>
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
