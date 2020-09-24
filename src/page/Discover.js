import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/core/styles';
import ForumIcon from '@material-ui/icons/Forum';
import HelpIcon from '@material-ui/icons/Help';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import React from 'react';
import challenge from '../assets/img/challenge.jpg';
import information from '../assets/img/information.jpg';
import community from '../assets/img/community.jpg';


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
    content1: {
        marginTop: "20px",
        position: 'relative',
        left: "10%",
        width: '80%',
        height: '150px',
        backgroundColor: '#FFFFFF',
    },
    content2: {
        marginTop: "30px",
        position: 'relative',
        left: "10%",
        width: '80%',
        height: '150px',
        backgroundColor: '#FFFFFF',
    },
    content3: {
        marginTop: "30px",
        position: 'relative',
        left: "10%",
        width: '80%',
        height: '150px',
        backgroundColor: '#FFFFFF',
    },
    button1: {
        position: 'relative',
        width: '80%',
        marginTop: "5px",
        marginRight: "-5px",
        height: "140px",
        backgroundImage: 'url(' + information + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    button2: {
        width: '80%',
        marginTop: "5px",
        marginRight: "-5px",
        height: "140px",
        backgroundImage: 'url(' + challenge + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    button3: {
        position: 'relative',
        width: '80%',
        marginTop: "5px",
        marginRight: "-5px",
        height: "140px",
        backgroundImage: 'url(' + community + ')',
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
            <div className={classes.content1}>
                <Button variant="outlined" className={classes.button1}></Button>
                {/* <ListItemAvatar >
                    <Avatar className={classes.disIcon}>
                        <SportsEsportsIcon />
                    </Avatar>
                </ListItemAvatar> */}
            </div>
            <List className={classes.content2}>

                <Button variant="outlined" className={classes.button2}></Button>
                {/* <ListItemAvatar >
                    <Avatar className={classes.disIcon}>
                        <HelpIcon />
                    </Avatar>
                </ListItemAvatar> */}

            </List>
            <List className={classes.content3}>
                <Button variant="outlined" className={classes.button3}></Button>
                {/* <ListItemAvatar >
                    <Avatar className={classes.disIcon}>
                        <ForumIcon />
                    </Avatar>
                </ListItemAvatar> */}
            </List>

        </Box>

    )

}

