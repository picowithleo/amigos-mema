import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    root: {
        position: 'relative',
        bottom: '30%',
    },
    appbar: {
        position: 'relative',
        backgroundColor: '#8bc38c',
        marginTop: '-8px',
    },
    about: {
        margin: '5%',
        backgroundColor: '#ffffff',
        textAlign: 'left',
        fontSize: '1.2rem'
    }
}));

export default function CustomizedInputBase() {
    const classes = useStyles();

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
                            About
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Typography className={classes.about}>
                <div style={{ margin: '5%' }}>
                    MEMA app is a language education web application specially designed for the elderly.
                    <br></br>
                    <br></br>
                    According to the research on the relationship between cognitive decline and age,
                    it was seen that the most effective age to start these cognitive interventions would be when people are approximately 50.
                    <br></br>
                    <br></br>
                    In order to optimally combat this decline, stakeholders for our impending solution would have a heavy emphasis on this age bracket.
                    Thus, the main target users are people around 50 years old.
                </div>
            </Typography>
        </List>
    );
}