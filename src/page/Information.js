import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react';
import { Link } from 'react-router-dom';
import information from '../api/information';
import new1 from '../assets/img/new1.png';
import new2 from '../assets/img/new2.png';
import new3 from '../assets/img/new3.png';
import ListItem from '@material-ui/core/ListItem';
import '../page/Information.css';

const useStyles = makeStyles((theme) => ({

  root1: {
    padding: "20px",
    marginTop: '20px',
  },

  root2: {
    padding: '20px',
    marginTop: '40px',
  },

  root: {
    border: "2px solid grey",
    borderRadius: '10px',
    padding: '5px'
  },
  appbar: {
    position: 'fixed',
    backgroundColor:'#8bc38c',
    color: '#FFFFFF',
    fontSize: "30px",
    marginTop: '-8px',
  },
  title: {
    padding: "20px",
    fontSize: "20px",
    color: 'grey',
  },
  langbox: {
    width: '90%',
    marginLeft: '5%',
    display: 'flex',
    height: '200px',
    flexDirection: 'column',
    // backgroundColor: theme.palette.background.paper,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },

}));

export default function Information() {
  const classes = useStyles();

  return (
    <List>
      <AppBar className={classes.appbar} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}
            aria-label="ArrowBackIos" component={Link} to="/Discover">
            <ArrowBackIosIcon />
          </IconButton>
          <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', marginLeft: '5px'}}>
            Information
          </Typography>
        </Toolbar>
      </AppBar>

      <Card className={classes.root2}>
        <a href={information[0].link} className="a">
        <CardActionArea className={classes.root}>
          <Typography style={{ fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'justify'}}>
              {information[0].title}
             </Typography>
             <ListItem className={classes.langbox} style={{ backgroundImage: 'url(' + new1 + ')' }}>
          </ListItem>
        </CardActionArea>
        </a>
      </Card>

      <Card className={classes.root1}>
        <a href={information[1].link} className="a">
        <CardActionArea className={classes.root}>
          <Typography style={{ fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'justify'}}>
              {information[1].title}
             </Typography>
             <ListItem className={classes.langbox} style={{ backgroundImage: 'url(' + new2 + ')' }}>
          </ListItem>
        </CardActionArea>
        </a>
      </Card>

      <Card className={classes.root1}>
        <a href={information[2].link} className="a">
        <CardActionArea className={classes.root}>
          <Typography style={{ fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'justify'}}>
              {information[2].title}
             </Typography>
             <ListItem className={classes.langbox} style={{ backgroundImage: 'url(' + new3 + ')' }}>
          </ListItem>
        </CardActionArea>
        </a>
      </Card>
      <br></br>
    </List>

  );
}