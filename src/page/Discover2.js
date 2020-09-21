import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react';

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
        backgroundColor: '#9CCC9D',
    },
    text: {
        color: "grey",
        fontSize: "20px",
        padding: "30px",
    },

    text1: {
        color: "grey",
        fontSize: "20px",
        padding: "30px",
        textAlign: "left"
    },

    word: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            padding: '60px'
        },

    },

    button1: {
        position: 'relative',
        width: '40%',
        marginTop: "200px",
        marginRight: "-5px",
        height: "80px",
        backgroundColor: '#9CCC9D',
        fontSize: "20px",
    },

    time: {
        padding: "80px"
    }


}));


export default function Discover2() {
    const classes = useStyles();

    return (
        <List>
            <Box className={classes.root}>
                <Box className={classes.tittle}>
                    <b>Challenge Page</b>
                </Box>
            </Box>
            <AppBar className={classes.appbar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} aria-label="ArrowBackIos">
                        <ArrowBackIosIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Box className={classes.time}>
                <label>Timer:</label>
                <span id='sid'>00:00:00</span>

            </Box>


            <Box className={classes.word} noValidate autoComplete="off">
                <TextField id="standard-basic" />
            </Box>

        </List>

    );
}