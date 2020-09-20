import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react';

const useStyles = makeStyles((theme) => ({

  root1: {
    padding: "20px",

  },

  appbar: {
    position: 'relative',
    backgroundColor: '#9CCC9D',
    color: '#FFFFFF',
    fontSize: "30px",
  },
  title: {
    padding: "20px",
    fontSize: "20px",
    color: 'grey',
  }

}));


export default function Information() {
  const classes = useStyles();

  return (
    <List>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="ArrowBackIos">
            <ArrowBackIosIcon />
          </IconButton>
          <Box>Information</Box>
        </Toolbar>
      </AppBar>

      <Card className={classes.root}>
        <CardActionArea className={classes.title}>
          <CardMedia
            component="img"
            alt="Title"
            height="140"
            image=""
            title="XXXXXXXXX"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              XXXXXXXXXXXXXXXXXX
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>

      <Box className={classes.root1}></Box>


      <Card className={classes.root1}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="XXXXXXXXX"
            height="140"
            image=""
            title="XXXXXXXXX"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              XXXXXXXXXXXXXXXXXX
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>

    </List>

  );
}