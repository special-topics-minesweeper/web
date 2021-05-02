import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  time: {
    fontWeight: 'bold',
    display: 'block',
    textAlign: 'center',
    fontSize: 20,
    marginRight: 36,
  },
  icon: {
    color: '#ccc',
    marginRight: 12,
  }
}, {name: 'timer'});

export default useStyles;
