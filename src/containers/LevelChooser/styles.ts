import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  level: {
    width: '100%',
    padding: 10,
    margin: '8px 0',
    fontWeight: 'bold',
    '&.easy': {
      color: theme.palette.success.light,
      borderColor: theme.palette.success.light,
    },
    '&.medium': {
      color: theme.palette.warning.light,
      borderColor: theme.palette.warning.light,
    },
    '&.hard': {
      color: theme.palette.error.light,
      borderColor: theme.palette.error.light,
    }
  },
  header: {
    margin: '20px 0'
  }
}));

export default useStyles;
