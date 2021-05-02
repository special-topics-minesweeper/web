import { createUseStyles } from 'react-jss';
import { mediaQuery } from "./styles/utils";

const useStyles = createUseStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: "auto auto",
    gridColumnGap: 24,
    gridRowGap: 0,
    padding: '0px 36px',
    gridAutoFlow: 'column',

    [mediaQuery({breakPoint: 768})]: {
      gridTemplateRows: "auto auto",
      gridRowGap: 24,
      gridColumnGap: 0,
    }
  }
});

export default useStyles;
