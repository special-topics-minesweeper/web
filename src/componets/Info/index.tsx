import useStyles from "./styles";
import { IInfo } from "./types";

const Info = ({children}: IInfo) => {
  const classes = useStyles();
  return <span className={classes.root}> {children} </span>
}
export default Info;
