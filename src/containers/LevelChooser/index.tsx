import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import classNames from "classnames";
import { ILevelChooser } from "./types";
import { Difficulty } from "../Game/types";

const LevelChooser = ({ onSelect }: ILevelChooser) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.header}>
          Choose the Difficulty
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              onClick={() => onSelect(Difficulty.EASY)}
              className={classNames(classes.level, 'easy')}>
              Easy
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              onClick={() => onSelect(Difficulty.MEDIUM)}
              className={classNames(classes.level, 'medium')}>
              Medium
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              onClick={() => onSelect(Difficulty.HARD)}
              className={classNames(classes.level, 'hard')}>
              Hard
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>)
};

export default LevelChooser;
