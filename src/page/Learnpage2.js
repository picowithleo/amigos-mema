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
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShareIcon from '@material-ui/icons/Share';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import LinearProgress from '@material-ui/core/LinearProgress';


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
    display: 'flex',
    width: '100%',
    height: '20%',
    justifyContent: 'center',
  },
  indexbar: {
    borderLeft: "100px",
    display: 'flex',
    flexDirection: 'column',
    fontSize: '50px',
  },
  foodtext: {
    paddingTop: '20px',
  },
  BottomNavigation: {
    backgroundColor: '#eeeeee',
  },
  separate: {
    backgroundColor: '#e0e0e0',
    height: '40px',
  },
  progressbar: {
    width: '100%',
    height: '300px',
  },
  progress: {
    width: '95%',
    top: '25%',
    height: '20%',

  },
  
}));


export default function Learnpage1() {
  const classes = useStyles();

  return (
    <List>
    <Box className={classes.root}>
      <Box className={classes.learn}>
        <h><b>Selected Word Page</b></h>
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
        placeholder="Food"
        inputProps={{ 'aria-label': 'Search' }}
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
      <Typography variant="h5" color='textSecondary'>
        Can Yin
      </Typography>
      <Typography variant="h3">
        餐 饮
      </Typography>
      </ListItem>
      <ListItem className={classes.indexbar}>
      <Typography variant="h3" className={classes.foodtext}>
        Food
      </Typography>
      </ListItem>
      </List>
      <BottomNavigation
      showLabels
      className={classes.BottomNavigation}
    >
      <BottomNavigationAction label="Pronounce" icon={<VolumeUpIcon />} />
      <BottomNavigationAction label="Bookmark" icon={<BookmarkIcon />} />
      <BottomNavigationAction label="Share" icon={<ShareIcon />} />
    </BottomNavigation>
    <Box className={classes.separate}></Box>
    <Box className={classes.progressbar}>
    <FormControl component="fieldset" className={classes.progress}>
    <Typography variant="h6">
        Level
      </Typography>
      <RadioGroup row aria-label="position" name="position" defaultValue="level1">
        <FormControlLabel
          value="level0"
          control={<Radio color="primary" />}
          label="level 1"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="level1"
          control={<Radio color="primary" />}
          label="level 2"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="level2"
          control={<Radio color="primary" />}
          label="level 3"
          labelPlacement="bottom"
        />
        <FormControlLabel
          value="level3"
          control={<Radio color="primary" />}
          label="level 4"
          labelPlacement="bottom"
        />
        <FormControlLabel value="level4" control={<Radio color="primary" />} label="level 5" labelPlacement='bottom' />
      </RadioGroup>
    </FormControl>
    </Box>
      </List>
);}