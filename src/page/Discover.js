import { ListItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import challenge from '../assets/img/challenge.jpg';
import community from '../assets/img/community.jpg';
import information from '../assets/img/information.jpg';


const useStyles = makeStyles((theme) => ({

    root: {
        position: 'relative',
        bottom: '30%',

    },
    appbar: {
        position: 'fixed',
        backgroundColor:'#8bc38c',
    },
    content: {
        marginTop: "5px",
        position: 'relative',
        left: "10%",
        width: '80%',
        height: '180px',
    },
    button: {
        position: 'relative',
        width: '100%',
        marginTop: "5px",
        // marginRight: "-5px",
        height: "100%",
        backgroundImage: 'url(' + information + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    disIcon: {
        left: '130px',
    },
    list: {
        marginTop: '50px',
    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (

        <Box style={{ marginBottom: '15%' }}>
            <Box className={classes.root}>
                <AppBar className={classes.appbar} >
                    <Toolbar>
                        {/* <IconButton edge="start" className={classes.menuButton}
                            aria-label="ArrowBackIos" component={Link} to="/account">
                            <ArrowBackIosIcon />
                        </IconButton> */}
                        <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', marginLeft: '25px' }}>
                            Discover
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <List className={classes.list}>
                <ListItem className={classes.content}>
                <Button variant="outlined" className={classes.button} component={Link} to="/Information"></Button>
                </ListItem>
                <ListItem className={classes.content}>
          
                <Button variant="outlined" className={classes.button}
                    style={{ backgroundImage: 'url(' + challenge + ')' }} component={Link} to="/Discover1"></Button>
            </ListItem>
             
             <ListItem className={classes.content}>
                <Button variant="outlined" className={classes.button}
                    style={{ backgroundImage: 'url(' + community + ')' }} component={Link} to="/community"></Button>
             </ListItem>
            </List>
        </Box>

    )

}

