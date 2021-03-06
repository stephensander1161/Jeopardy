import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    minWidth: '2705',
  },

  seeqbackground: {
    backgroundColor: '#151ce8',
    textAlign: 'center',
    color: '#f7d64f',
    fontWeight: 700,
    fontSize: '15px',
    textShadow: '2px 2px black',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
    padding: '30px',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },

  qtitle: {
    padding: '1px',
    textAlign: 'center',
    color: '#f7d64f',
    fontWeight: 700,
    fontSize: '30px',
    textShadow: '2px 2px black',
  },

  seeq: {
    textAlign: 'center',
    color: '#f7d64f',
    fontWeight: 700,
    fontSize: '15px',
    textShadow: '2px 2px black',
  },
  ans: {
    padding: '5px',
    textAlign: 'center',
    color: '#f7d64f',
    fontWeight: 700,
    fontSize: '20px',
    textShadow: '2px 2px black',
  },
  qbackground: {
    backgroundColor: '#151ce8',
    height: '300px',
    '&:hover': {
      borderStyle: 'solid',
      borderColor: '#f7d64f',
    },
  },

  atitle: {
    padding: '5px',
  },

  typography: {
    fontSize: '12px',
  },

  question: {
    fontSize: '16px',
    color: 'grey',
  },

  answer: {
    fontSize: '16px',
    color: 'grey',
    padding: '10px',
  },

  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
