import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: "auto  ",
    gridColumnGap: 24,
    gridRowGap: 0,
    padding: '0px 36px',
    gridAutoFlow: 'column',

    [theme.breakpoints.down('sm')]: {
      gridTemplateRows: "auto auto",
      gridRowGap: 24,
      gridColumnGap: 0,
    }
  },
  loading: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    margin: '20% 0',
  },
}));

export default useStyles;
