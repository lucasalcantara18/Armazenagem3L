import { makeStyles, Theme } from '@material-ui/core';
import COLORS from '../../constants/COLORS';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    backgroundColor: COLORS.white,
  },
  deleteButton: {
    color: COLORS.red,
  },
  textContainer: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export default useStyles;
