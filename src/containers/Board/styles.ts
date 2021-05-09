import { makeStyles } from "@material-ui/core/styles";
import { IBoardStyles } from "./types";
import { Difficulty } from "../Game/types";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: (props: IBoardStyles) => 'auto '.repeat(props.width),
    gridColumn: '1 / span 1',
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none',

    [`&.${Difficulty.HARD}`]: {
      gridColumn: '1 / span 4',
    },
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
  content: {
    fontWeight: 'bold',
    position: 'absolute',
    top: 'calc(50% - 8px)',
    left: 0,
    right: 0,
    bottom: 0,
    [`&.${Difficulty.EASY}`]: {
      fontSize: 20,
      '& svg': {
        fontSize: 24,
      }
    },
    [`&.${Difficulty.MEDIUM}`]: {
      fontSize: 16,
      '& svg': {
        fontSize: 20,
      }
    },
    [`&.${Difficulty.HARD}`]: {
      fontSize: 12,
      '& svg': {
        fontSize: 16,
      }
    }
  }
}), { name: 'board' });

export default useStyles;
