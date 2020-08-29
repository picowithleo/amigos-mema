import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
  learn:{
    textAlign: 'left',
    fontSize: '30px',
    color: '#000000',
    position: 'relative',
    fontStyle: 'bold',
    width: '80%',
    left: '5%',
    height: '50px',
  },
  searchbackground: {
    width: '100%',
    right: '0%',
    position: 'relative',
    height: '50px',
  } ,
  searchbar: {
    display: 'flex',
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
    position: 'relative',
    backgroundColor: '#ffcdd2',
  },
  index: {
    top: '70%',
  },
  indexbar: {
    border: "2px solid #ffcdd2",
    backgroundColor: '#e0e0e0',
  },
}));


export default function Learnpage1() {
  const classes = useStyles();

  return (
    <List>
    <Box className={classes.root}>
      <Box className={classes.learn}>
        <h><b>My Words Page</b></h>
      </Box>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="ArrowBackIos">
            <ArrowBackIosIcon />
          </IconButton>
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
      <ListItem className={classes.indexbar}>
        <ListItemText primary="ZiXing 字形" secondary="font" />
        <ListItemAvatar>
          <Avatar>
            <ArrowForwardIosIcon />
          </Avatar>
          </ListItemAvatar>
      </ListItem>
      <ListItem className={classes.indexbar}>
        <ListItemText primary="CanYin 餐饮" secondary="food" />
        <ListItemAvatar>
          <Avatar>
            <ArrowForwardIosIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      </List>
      </List>
);}