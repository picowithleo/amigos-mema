import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


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
    fontSize: '20px',
    top: '12%',
    color: '#FFFFFF',
    position: 'relative',
    fontStyle: 'bold',
    left: '10%',
    width: '80%',
  },
  searchbackground: {
    width: '100%',
    right: '0%',
    position: 'relative',
    height: '100px',
    backgroundColor: '#9CCC9D',
  } ,
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
  langlist: {
    width: '100%',
    display: 'flex',
  },
  langbox: {
    width: '47%',
    marginLeft: '2%',
    marginRight: '2%',
    display: 'flex',
    height: '250px',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
  },
  langicon: {
    bottom: '30%',
    left: '5%',
    position: 'relative',
  },
  langtxt:{
    top: '30%',
    position: 'relative',
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <List>
    <Box className={classes.root}>
    <List className={classes.searchbackground}>
      <Box className={classes.learn}>
      <h><b>Learn</b></h>
      </Box>
      <Box component="form" className={classes.search}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Box>
    </List>
    <List className={classes.langlist}>
      <ListItem className={classes.langbox}>
        <ListItemText primary="Chinese" className={classes.langtxt}/>
        <ListItemAvatar className={classes.langicon}>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem className={classes.langbox}>
        <ListItemText primary="Japanese" className={classes.langtxt}/>
        <ListItemAvatar className={classes.langicon}>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </List>
    </Box>
      <Box>
      <List className={classes.langlist}>
    <ListItem className={classes.langbox}>
    <ListItemText primary="French" className={classes.langtxt}/>
        <ListItemAvatar className={classes.langicon}>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
      <ListItem className={classes.langbox}>
      <ListItemText primary="etc" className={classes.langtxt}/>
        <ListItemAvatar className={classes.langicon}>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </List>
    </Box>
    </List>
  );
}