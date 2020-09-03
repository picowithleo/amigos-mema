import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import china from '../assets/img/china.png';
import france from '../assets/img/france.png';
import germany from '../assets/img/germany.png';
import japan from '../assets/img/japan.png';
import korea from '../assets/img/korea.png';
import russia from '../assets/img/russia.png';


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
  learn: {
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
  langlist: {
    width: '100%',
    display: 'flex',
  },
  langbox: {
    width: '47%',
    marginLeft: '2%',
    marginRight: '2%',
    display: 'flex',
    height: '150px',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
  },
  langicon: {
    bottom: '20%',
    position: 'relative',
  },
  langtxt: {
    top: '20%',
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
            <ListItemText primary="Chinese" className={classes.langtxt} />
            <ListItemAvatar className={classes.langicon}>
              <img src={china} />
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.langbox}>
            <ListItemText primary="Japanese" className={classes.langtxt} />
            <ListItemAvatar className={classes.langicon}>
              <img src={japan} />
            </ListItemAvatar>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List className={classes.langlist}>
          <ListItem className={classes.langbox}>
            <ListItemText primary="Russia" className={classes.langtxt} />
            <ListItemAvatar className={classes.langicon}>
              <img src={russia} />
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.langbox}>
            <ListItemText primary="German" className={classes.langtxt} />
            <ListItemAvatar className={classes.langicon}>
              <img src={germany} />
            </ListItemAvatar>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List className={classes.langlist}>
          <ListItem className={classes.langbox}>
            <ListItemText primary="French" className={classes.langtxt} />
            <ListItemAvatar className={classes.langicon}>
              <img src={france} />
            </ListItemAvatar>
          </ListItem>
          <ListItem className={classes.langbox}>
            <ListItemText primary="Korean" className={classes.langtxt} />
            <ListItemAvatar className={classes.langicon}>
              <img src={korea} />
            </ListItemAvatar>
          </ListItem>
        </List>
      </Box>
    </List>
  );
}