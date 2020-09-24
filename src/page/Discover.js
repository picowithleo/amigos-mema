import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import challenge from '../assets/img/challenge.jpg';
import community from '../assets/img/community.jpg';
import information from '../assets/img/information.jpg';


const useStyles = makeStyles((theme) => ({

    learnbackground: {
        marginTop: "24px",
        width: '100%',
        position: 'relative',
        backgroundColor: '#9CCC9D',
        fontSize: '12px',
    },
    wordbackground: {
        position: 'relative',
        marginTop: "5px",
        left: "10%",
        width: '80%',
        height: '50px',
        color: '#FFFFFF',

    },
    content: {
        marginTop: "20px",
        position: 'relative',
        left: "10%",
        width: '80%',
        height: '180px',
        backgroundColor: '#FFFFFF',
    },
    button: {
        position: 'relative',
        width: '85%',
        marginTop: "5px",
        // marginRight: "-5px",
        height: "170px",
        backgroundImage: 'url(' + information + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    disIcon: {
        left: '130px',
    },

}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (

        <Box>
            <List className={classes.learnbackground}>
                <Grid className={classes.wordbackground}>
                    <Box className={classes.title}>
                        <h ><b>Discover</b></h>
                    </Box>
                </Grid>
            </List>
            <List className={classes.content}>
                <Button variant="outlined" className={classes.button} component={Link} to="/Information"></Button>
            </List>
            <List className={classes.content}>
                <Button variant="outlined" className={classes.button}
                    style={{ backgroundImage: 'url(' + challenge + ')' }} component={Link} to="/Discover1"></Button>
            </List>
            <List className={classes.content}>
                <Button variant="outlined" className={classes.button}
                    style={{ backgroundImage: 'url(' + community + ')' }}></Button>
            </List>
        </Box>

    )

}

