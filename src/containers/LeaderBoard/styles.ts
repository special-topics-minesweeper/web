import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  title: {
    lineHeight: '48px',
    textAlign: 'center',
  },
  empty: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    '& > *': {
      color: theme.palette.primary.dark,
      margin: theme.spacing(2),
      minWidth: 48,
      height: 48,
      fontSize: 24,
      whiteSpace: 'noWrap',
      textAlign: 'center'
    }
  },
  highlight: {
    backgroundColor: theme.palette.divider,
  }
}));

export default useStyles;
