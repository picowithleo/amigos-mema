import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo2.jpg';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import introh from '../assets/img/home1.jpg';
import introl from '../assets/img/learn1.jpg';
import introd from '../assets/img/discover1.jpg'
import introa from '../assets/img/account1.jpg';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-uihttps://trello.com/b/eSyuGWjB/amigos-mema-app.com/" style={{ textDecoration: 'none' }}>
                Amigos MeMa
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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
        // bottom: '30%',
        width: '100%',
        backgroundColor: '#deefe0',
        height: '100vh'
    },
    img: {
        height: 500,
        maxWidth: 400,
        overflow: 'hidden',
        display: 'block',
        width: '100%',
      },
}));
const Welcome = props => {

    // export default function CustomizedInputBase() {
    const classes = useStyles();
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false} className={classes.root} style={{ textDecoration: 'none', color: 'black' }}>
                {/* <Typography /> */}
                {/* <h4>Welcome to MeMa!</h4> */}
                <div>
                    <Typography>
                        <img src={logo} alt="logo" style={{ marginTop: '20%', height: '150px' }} />
                    </Typography>
                </div>
                <div>
                    <h1 style={{ textAlign: 'center', fontSize: '2.5em', color: '#ac54a0', marginTop: '60px' }}>Welcome to MeMa!</h1>
                    <h4 style={{ marginLeft: '5%', marginRight: '5%', textAlign: 'center', fontSize: '1.3em', marginTop: '-20px' }}>
                        Let's learn languages and improve memory together！</h4>
                </div>
                <div>
                    <Button aria-describedby={id} variant="contained" onClick={handleClick} style={{backgroundColor:'#deefe0'}}>
                        <b>Instructions</b>
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorReference="anchorPosition"
                        anchorPosition={{top:100, left:100}}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                        }}
                    >
                        <div style={{position:'relative'}}>
                            <Paper square elevation={0} className={classes.header}>
                                <Typography style={{textAlign:'center'}}>Instructions on main pages</Typography>
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

                        <div style={{backgroundColor:'#deefe0', margin:theme.spacing(1)}}>
                            <Button href="/login" style={{left:'35%'}}>I'm Ready</Button>
                        </div>

                    </Popover>
                </div>
                <Box mt={8} style={{ marginTop: '220px' }}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    );

}

export default Welcome;