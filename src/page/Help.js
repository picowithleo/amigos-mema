import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react';
import { Link } from 'react-router-dom';
import introh from '../assets/img/home1.jpg';
import introl from '../assets/img/learn1.jpg';
import introd from '../assets/img/discover1.jpg'
import introa from '../assets/img/account1.jpg';
import Button from '@material-ui/core/Button';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
    {
      label: 'Home',
      imgPath:introh,
    },
    {
      label: 'Learn',
      imgPath:introl,
    },
    {
      label: 'Discover',
      imgPath:introd,
    },
    {
      label: 'Account',
      imgPath:introa
    },
  ];

const useStyles = makeStyles((theme) => ({

    root: {
        position: 'relative',
        bottom: '30%',
    },
    appbar: {
        position: 'fixed',
        backgroundColor:'#8bc38c',
        marginTop: '-8px',
    },
    about: {
        marginTop: '50px',
        backgroundColor: '#ffffff',
        textAlign: 'left',
        fontSize: '1.2rem'
    },

    about1: {
        backgroundColor: '#ffffff',
        textAlign: 'left',
        fontSize: '1.2rem',
        margin: '2%',
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    intro: {
        padding: '10px',
        height: 255,
        width: '100%',
    },
    img: {
        height: 500,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
      },
}));

export default function Help() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
  

    return (
        <List>
            <Box className={classes.root}>
                <AppBar className={classes.appbar} >
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton}
                            aria-label="ArrowBackIos" component={Link} to="/account">
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', marginLeft: '5px' }}>
                            Help
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Typography className={classes.about}>
                <div style={{ margin: '2%' }}>
                    <p style={{fontFamily: 'verdana', fontSize: '120%'}}>How can we help you?</p>
                </div>    
            </Typography>

            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>Instructions on main pages</Typography>
                </Paper>
                <img
                    className={classes.img}
                    src={tutorialSteps[activeStep].imgPath}
                    alt={tutorialSteps[activeStep].label}
                />
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="dots"
                    activeStep={activeStep}
                    nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </Button>
                    }
                    backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    </Button>
                    }
                />
            </div>

            <Typography className={classes.about1}>
                <div style={{ margin: '2%' }}>
                    <p style={{fontFamily: 'verdana', fontSize: '120%'}}>Getting Stuck? </p>
                    <p>--Click on the 4 icons in the bottom will lead you back to our main pages!</p>
                    <br></br>
                </div>    
            </Typography>
        </List>
    );
}