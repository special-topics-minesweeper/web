import { createUseStyles } from 'react-jss';
import { IBoard } from "./types";


const useStyles = createUseStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: (props: IBoard) => 'auto '.repeat(props.size),
    backgroundColor: '#2196F3',
    maxWidth: 512,
    maxHeight: 512,
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',
  },
  cell: {
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    aspectRatio: 1,
    cursor: 'pointer',
    '&:active': {
      backgroundColor: '#e4e4e4'
    }
  },

}, {name: 'board'});

export default useStyles;
