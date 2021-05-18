import useStyles from "./styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const Instructions = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.rule}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              The Game
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <List>
                <ListItem>
                  You are presented with a board of squares. Some squares contain mines (bombs), others don't. If you click on a square containing a bomb, you lose. If you manage to click all the squares (without clicking on any bombs) you win.
                </ListItem>
                <ListItem>
                  Clicking a square which doesn't have a bomb reveals the number of neighbouring squares containing bombs. Use this information plus some guess work to avoid the bombs.
                </ListItem>
                <ListItem>
                  To open a square, point at the square and click on it. To mark a square you think is a bomb, point and right-click
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.rule}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              The Rules
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <List>
                <ListItem>
                  A squares "neighbours" are the squares adjacent above, below, left, right, and all 4 diagonals. Squares on the sides of the board or in a corner have fewer neighbors. The board does not wrap around the edges.
                </ListItem>
                <ListItem>
                  If you open a square with 0 neighboring bombs, all its neighbors will automatically open. This can cause a large area to automatically open.
                </ListItem>
                <ListItem>
                  To remove a bomb marker from a square, point at it and right-click again.
                </ListItem>
                <ListItem>
                  If you mark a bomb incorrectly, you will have to correct the mistake before you can win. Incorrect bomb marking doesn't kill you, but it can lead to mistakes which do.
                </ListItem>
                <ListItem>
                  You don't have to mark all the bombs to win; you just need to open all non-bomb squares.
                </ListItem>
              </List>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Instructions;
