import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShareIcon from '@material-ui/icons/Share';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import Speech from 'react-speech';


const useStyles = makeStyles((theme) => ({
  
  iconButton: {
    padding: 10,
  },
  root: {
    position: 'relative',
    bottom: '30%',
  },
  appbar: {
    position: 'relative',
    backgroundColor:'#8bc38c',
    marginTop: '-8px',
  },
  index: {
    display: 'flex',
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    margin: '50px 0px',
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
  BottomNavigationAction: {
    padding: '0',
    height: '24px',
    position: 'absolute',
    left: '0',
    bottom: '44.6%',
    width: '122px',
    /* flex-direction: column; */
    /* flex: auto; */
    /* justify-content: flex-start; */
  },
  separate: {
    backgroundColor: '#e0e0e0',
    height: '40px',
  },
  progressbar: {
    width: '100%',
    height: '180px',
  },
  progress: {
    width: '95%',
    top: '25%',
    height: '20%',

  },

}));

const speakerstyle = {
  container: {
    flex: 'auto',
   },
  text: {
    color: '#6D6D6D',
    opacity: '1',
    fontSize: '0.75rem',
    transition: 'font-size 0.2s, opacity 0.2s',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    transitionDelay: '0.1s',
  },
  buttons: {
  },
  play: {
    hover: {
      color: '#6D6D6D',
    },
    button: {
      cursor: 'pointer',
      pointerEvents: 'none',
      outline: 'none',
      backgroundColor: '#F0F0F0',
      border: 'none',
      color: '#6D6D6D',
      left: '0%',
      top: '55.1%',
      padding: '0px 31.985px 10px',
      position: 'absolute'
      // flex: 1 1 auto;

    },
  },
  pause: {
    hover: {},
    button: {},
  },
  stop: {
    hover: {},
    button: {},
  },
  resume: {
    hover: {},
    button: {},
  },
};


export default function Word() {
  const classes = useStyles();
  const [value, setValue] = React.useState('level1');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <List>
      <Box className={classes.root}>
        <AppBar className={classes.appbar} >
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton}
              aria-label="ArrowBackIos" component={Link} to="/learn/Italian">
              <ArrowBackIosIcon />
            </IconButton>
            <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', marginLeft: '5px' }}>
              Words
             </Typography>
          </Toolbar>
        </AppBar>

      </Box>
      <List className={classes.index}>
        <ListItem className={classes.indexbar}>
          <Typography variant="h5" color='textSecondary'>
          Esperienza
      </Typography>
          <Typography variant="h3">
          Esperienza
      </Typography>
        </ListItem>
        <ListItem className={classes.indexbar}>
          <Typography variant="h3" className={classes.foodtext}>
          Experience
      </Typography>
        </ListItem>
      </List>
      <BottomNavigation
        showLabels
        className={classes.BottomNavigation}
      >
        
        <BottomNavigationAction icon={<VolumeUpIcon />}
          className={classes.BottomNavigationAction}/>
       
        <Speech 
          styles= {speakerstyle}
          pitch="0.5"
          rate="0.5"
          volume="1"
          stop={false}
          resume={false}
          pause={false}
          textAsButton={true}
          displayText="Pronounce"
          text="Esperienza"
                  />
            
        <BottomNavigationAction label="Bookmark" icon={<BookmarkIcon />} />
        <BottomNavigationAction label="Share" icon={<ShareIcon />} />
      </BottomNavigation>
      <Box className={classes.separate}></Box>
      <Box className={classes.progressbar}>
        <FormControl component="fieldset" className={classes.progress}>
          <Typography variant="h6">
            Level
      </Typography>
          <RadioGroup row aria-label="position" name="position" value={value} onChange={handleChange}
            style={{ marginLeft: '5%' }}>
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
              style={{ marginLeft: '-2px' }}
            />
            <FormControlLabel
              value="level2"
              control={<Radio color="primary" />}
              label="level 3"
              labelPlacement="bottom"
              style={{ marginLeft: '-2px' }}
            />
            <FormControlLabel
              value="level3"
              control={<Radio color="primary" />}
              label="level 4"
              labelPlacement="bottom"
              style={{ marginLeft: '-2px' }}
            />
            <FormControlLabel
              value="level4"
              control={<Radio color="primary" />}
              label="level 5"
              labelPlacement='bottom'
              style={{ marginLeft: '-2px' }} />
          </RadioGroup>
        </FormControl>
      </Box>
    </List>
  );
}