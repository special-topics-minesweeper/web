import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 20,
  },

  user:{
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 'auto',

  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: theme.palette.warning.light,
  },
  name: {
    fontWeight: 'bold',
    padding: '20px 0',
  },
  progress: {
    '& > div': {
      transition: 'transform 2s ease-in-out',
      height: 8,
    }
  },
  progressContainer: {
    margin: '20px 0',
  },
  played: {
    lineHeight: '40px',
    fontWeight: 'bold',
  },
  username: {
    width: '100%',
    display: 'block',
    textAlign: 'center',
    color: theme.palette.primary.dark,
  },
  divider: {
    height: 1,
    marginTop: 24,
    marginBottom: 16,
    backgroundColor: '#eee',
  },
  scoresContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  scoreCard: {
    width: '25%',
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 24,
    marginBottom: 24,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  score: {
    marginTop: 0,
    marginBottom: 0,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  },
  seconds: {
    color: theme.palette.text.primary,
  },
  scoreContent: {
    padding: '24px 32px',
    borderRadius: 8,
    '&.hard': {
      backgroundColor: theme.palette.error.light
    },
    '&.medium': {
      backgroundColor: theme.palette.warning.light,
    },
    '&.easy': {
      backgroundColor: theme.palette.success.light,
    }
  },
  scoreDivider: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: theme.palette.text.primary,
  },
  difficulty: {
    color: theme.palette.text.primary,
    lineHeight: '24px',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  title: {
    textAlign: 'center',
    marginTop: 48,
    fontSize: 20,
    fontWeight: 'bold',
  }
}));

export default useStyles;
