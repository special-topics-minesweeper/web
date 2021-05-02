import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: 12,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    margin: '12px 0px',
  },
  upper: {  },
  lower: {  },
}, { name: 'sidebar' })

export default useStyles;

