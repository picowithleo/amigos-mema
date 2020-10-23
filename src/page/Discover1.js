import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

    tittle: {
        fontSize: "20px",
        display: "flex",
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
    text: {
        color: "grey",
        fontSize: "20px",
        padding: "30px",
    },
    text1: {
        color: "grey",
        fontSize: "20px",
        padding: "45px",
        textAlign: "left",
 
    },
    button1: {
        position:"relative",
        color:'white',
        
        backgroundColor:'#8bc38c',
        fontSize: "30px",
        textDecoration:'none',
        borderRadius:'10px',
        padding:'20px ' ,
        paddingLeft:'35px',
        paddingRight:'35px',
        fontWeight:'bold'
       
        
    }

}));


export default function Discover1() {
    const classes = useStyles();

    return (
        <List>
            <AppBar className={classes.appbar} >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton}
                        aria-label="ArrowBackIos" component={Link} to="/Discover">
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', marginLeft: '5px' }}>
                        Challenge
                    </Typography>
                </Toolbar>
            </AppBar>

            <Box className={classes.text}>
                What to do:
            </Box>

            <Box className={classes.text1}>
                A word in your "My Words" will appear on the screen. Using the keyboard, type the English translation
                    of the word on the screen.
            </Box>
            <Box className={classes.text1}>
                Translate as many words as you can in the 1 minute time limit!
            </Box>   
            

            {/* <Button variant="outlined" className={classes.button1} component={Link} to={"/challenge.html"}>Start</Button> */}
            <a  className={classes.button1} href= "/challenge.html">  
                start
            </a>

        </List>

    );
}