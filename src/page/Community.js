import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react';
import { Link } from 'react-router-dom';
import { userEmail } from '../auth/Login';

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    top: '12%',
    left: '10%',
    position: 'relative',
    backgroundColor: '#FFFFFF',
  },
  searchbackground: {
    width: '100%',
    right: '0%',
    position: 'relative',
    height: '50px',
  },
  searchbar: {
    display: 'flex',
    top: '50px',
    position: 'relative',
  },
  closeButton: {
    right: '10%',
    width: '40px',
    height: '70px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  root: {
    position: 'relative',
    bottom: '30%',
  },
  appbar: {
    position: 'fixed',
    backgroundColor: '#8bc38c',
    // marginTop: '-8px',
  },
  index: {
    top: '70%',
    marginTop: '50px',
    marginBottom: '50px',
  },
  indexbar: {
    border: "2px solid #9CCC9D",
    backgroundColor: 'white',
  },

  youbar: {
    border: "2px solid #9CCC9D",
    backgroundColor: '#b2698c',
  },
}));

const fontTheme = createMuiTheme({
  overrides: {
    MuiTypography: {
      body1: {
        fontSize: '1.75rem'
      },
      body2: {
        fontSize: '1.5rem'
      }
    },
  },
});

export default function Community() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={fontTheme}>
      <List>
        <Box className={classes.root}>
          <AppBar className={classes.appbar} >
            <Toolbar>
              <IconButton edge="start" aria-label="ArrowBackIos" component={Link} to="/discover">
                <ArrowBackIosIcon />
              </IconButton>
              <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', marginLeft: '5px' }}>
                Community
             </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <List className={classes.index}>
          <ListItem className={classes.indexbar} >
            <ListItemText primary="Anna" secondary="415 words" />
            <ListItemAvatar>
              <h2 style={{ color: 'black' }}>1</h2>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} >
            <ListItemText primary="Susan" secondary="351 words" />
            <ListItemAvatar>
              <h2 style={{ color: 'black' }}>2</h2>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} >
            <ListItemText primary="Tom" secondary="289 words" />
            <ListItemAvatar>
              <h2 style={{ color: 'black' }}>3</h2>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} >
            <ListItemText primary="Kim" secondary="256 words" />
            <ListItemAvatar>
              <h2 style={{ color: 'black' }}>4</h2>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar}>
            <ListItemText primary="Rescal" secondary="241 words" />
            <ListItemAvatar>
              <h2 style={{ color: 'black' }}>5</h2>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} >
            <ListItemText primary="Pico" secondary="213 words" />
            <ListItemAvatar>
              <h2 style={{ color: 'black' }}>6</h2>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.youbar} >
            <ListItemText primary={userEmail + "(You)"} secondary="200" />
            <ListItemAvatar>
              <h2 style={{ color: 'black' }}>7</h2>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} >
            <ListItemText primary="Lura" secondary="185 words" />
            <ListItemAvatar>
              <h2 style={{ color: 'black' }}>8</h2>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} >
            <ListItemText primary="kewen" secondary="156 words" />
            <ListItemAvatar>
              <h2 style={{ color: 'black' }}>9</h2>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar}>
            <ListItemText primary="Sona" secondary="142 words" />
            <ListItemAvatar>
              <h2 style={{ color: 'black' }}>10</h2>
            </ListItemAvatar>
          </ListItem>
        </List>
      </List>
    </ThemeProvider>
  );
}