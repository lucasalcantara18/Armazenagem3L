import { makeStyles, Theme } from '@material-ui/core';
import COLORS from '../../constants/COLORS';

const drawerWidth = 240;
//    background: '#E5E5E5',
const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  contentDisplay: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    paddingBottom: '1rem',
    paddingTop: '1rem',
  },
  contentLista: {
    paddingRight: '.5rem',
  },
  contentCards: {
    paddingLeft: '.5rem',
  },
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.gray,
    height: '100vh',
    paddingTop: '5vh',
  },
  actionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: COLORS.green,
    '&:hover': {
      backgroundColor: COLORS.lightGreen,
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: COLORS.white,
    '&:hover': {
      backgroundColor: COLORS.white,
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    fontSize: '12px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  align: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default useStyles;
