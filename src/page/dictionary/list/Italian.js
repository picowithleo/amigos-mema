import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Link } from 'react-router-dom';

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
    backgroundColor: '#e0e0e0',
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

export default function Italian() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={fontTheme}>
      <List>
        <Box className={classes.root}>
          <AppBar className={classes.appbar} >
            <Toolbar>
              <IconButton edge="start" aria-label="ArrowBackIos" component={Link} to="/learn">
                <ArrowBackIosIcon />
              </IconButton>
              <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', marginLeft: '5px' }}>
                Italian
             </Typography>
            </Toolbar>
          </AppBar>
          <Box className={classes.searchbar}>
            <List className={classes.searchbackground}>
              <Box component="form" className={classes.search}>
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  className={classes.input}
                  placeholder="Search"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Box>
            </List>
            <IconButton className={classes.closeButton} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        <List className={classes.index}>
          <ListItem className={classes.indexbar} component={Link} to="/learn/Italian/font">
            <ListItemText primary="Font" secondary="font" />
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} component={Link} to="/learn/Italian/food">
            <ListItemText primary="cibo" secondary="food" />
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} component={Link} to="/learn/Italian/history">
            <ListItemText primary="storia" secondary="history" />
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} component={Link} to="/learn/Italian/thanks">
            <ListItemText primary="Grazie" secondary="thanks" />
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} component={Link} to="/learn/Italian/product">
            <ListItemText primary="Prodotto" secondary="product" />
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} component={Link} to="/learn/Italian/web">
            <ListItemText primary="ragnatela" secondary="web" />
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} component={Link} to="/learn/Italian/story">
            <ListItemText primary="storia" secondary="story" />
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} component={Link} to="/learn/Italian/weather">
            <ListItemText primary="tempo metereologico" secondary="weather" />
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} component={Link} to="/learn/Italian/experience">
            <ListItemText primary="Esperienza" secondary="experience" />
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.indexbar} component={Link} to="/learn/Italian/job">
            <ListItemText primary="lavoro" secondary="job" />
            <ListItemAvatar>
              <Avatar>
                <ArrowForwardIosIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        </List>
      </List>
    </ThemeProvider>
  );
}