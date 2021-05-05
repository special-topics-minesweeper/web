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
    border: '1px solid rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    aspectRatio: 1,
    cursor: 'pointer',
    '&:active': {
      backgroundColor: '#333333'
    }
  },

}, { name: 'board' });

export default useStyles;
