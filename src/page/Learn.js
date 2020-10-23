import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Link } from 'react-router-dom';
import China from '../assets/img/China.jpg';
import France from '../assets/img/France.jpg';
import Germany from '../assets/img/Germany.jpg';
import Italy from '../assets/img/Italy.jpg';
import Japan from '../assets/img/Japan.jpg';
import Korea from '../assets/img/Korea.jpg';


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
    top: '5%',
    color: '#FFFFFF',
    position: 'relative',
    fontStyle: 'bold',
    left: '10%',
    width: '80%',
  },
  searchbackground: {
    marginTop: '-10px',
    width: '100%',
    // right: '0%',
    position: 'relative',
    height: '110px',
    backgroundColor:'#8bc38c',
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
    width: '90%',
    display: 'flex',
    marginLeft: '5%',
  },
  langbox: {
    width: '47%',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    display: 'flex',
    height: '150px',
    flexDirection: 'column',
    // backgroundColor: theme.palette.background.paper,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
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
    <List style={{ marginBottom: '15%' }}>
      <Box className={classes.root}>
        <List className={classes.searchbackground}>
          <Box className={classes.learn}>
            <h style={{ fontSize: '2.5rem' }}><b>Learn</b></h>
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
      </Box>
      <Box style={{ marginTop: '10px' }}>
        <List className={classes.langlist}>
          <ListItem className={classes.langbox} component={Link} to="/learnpage1"
            style={{ backgroundImage: 'url(' + China + ')' }}>
          </ListItem>
          <ListItem className={classes.langbox} component={Link} to="/learnpage3" 
            style={{ backgroundImage: 'url(' + Japan + ')' }}>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List className={classes.langlist}>
          <ListItem className={classes.langbox} component={Link} to="/learnpage4" 
            style={{ backgroundImage: 'url(' + Korea + ')' }}>
          </ListItem>
          <ListItem className={classes.langbox} component={Link} to="/learnpage5" 
            style={{ backgroundImage: 'url(' + France + ')' }}>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List className={classes.langlist}>
          <ListItem className={classes.langbox} component={Link} to="/learnpage6" 
            style={{ backgroundImage: 'url(' + Italy + ')' }}>
          </ListItem>
          <ListItem className={classes.langbox} component={Link} to="/learnpage7" 
            style={{ backgroundImage: 'url(' + Germany + ')' }}>
          </ListItem>
        </List>
      </Box>
    </List>
  );
}