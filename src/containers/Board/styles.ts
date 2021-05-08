import { makeStyles } from "@material-ui/core/styles";
import { IBoard } from "./types";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: (props: IBoard) => 'auto '.repeat(props.size),
    // maxWidth: 512,
    // maxHeight: 512,
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
    aspectRatio: '1',
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    '&:active': {
      backgroundColor: theme.palette.background.default,
    },
    '&.isOpen': {
      backgroundColor: theme.palette.action.disabled,
    },
    '&.isBomb': {
      backgroundColor: theme.palette.error.light,
    },
    '&.isFlagged': {
      backgroundColor: theme.palette.warning.light,
    },
  },
  text: {
    fontWeight: 'bold',
    position: 'absolute',
    top: 'calc(50% - 8px)',
    left: 0,
    right: 0,
    bottom: 0,
  }
}), { name: 'board' });

export default useStyles;
