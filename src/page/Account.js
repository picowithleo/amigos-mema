import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React from 'react';
import user from '../assets/img/user.jpg';


const useStyles = makeStyles((theme) => ({

    title: {
        textAlign: 'left',
        fontSize: '20px',
        top: '12%',
        color: '#FFFFFF',
        position: 'relative',
        left: '10%',
        width: '80%',
    },
    avatararea: {
        width: '100%',
        right: '0%',
        position: 'relative',
        height: '150px',
        backgroundColor: '#9CCC9D',
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        marginLeft: '60%',
        marginTop: '-130px',
    },
    info: {
        color: '#000000',
        fontSize: '18px',
        marginTop: '35px',
    },
    mainarea: {
        width: '90%',
        display: 'flex',
        marginLeft: '5%',
    },
    mainbox: {
        display: 'flex',
        height: '100px',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
    },
    maintext: {
        top: '3%',
        position: 'relative',
    },
    subtext: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10%',
    },
    index: {
        width: '90%',
        marginLeft: '5%',
    },
    indexrow: {
        border: "1px solid #e0e0e0",
        fontSize: '2rem',
    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (
        <List>
            <Box className={classes.root}>
                <List className={classes.avatararea}>
                    <Box className={classes.title}>
                        <h style={{ fontSize: '2.5rem' }}><b>Account</b></h>
                        <div className={classes.info}>
                            <h style={{ fontWeight: "bold", fontSize: '25px' }}>Frank Baker</h>
                            <br></br>
                            <h>Joined on July 2020</h>
                        </div>
                        <Avatar alt="User avatar" className={classes.large} src={user} />
                    </Box>
                </List>
            </Box>
            <Box style={{ marginTop: '10px' }}>
                <List className={classes.mainarea}>
                    <ListItem className={classes.mainbox} style={{ marginRight: '2.5%' }}>
                        <ListItemText primary="Achievement" className={classes.maintext} />
                        <h className={classes.subtext}>200 words</h>
                    </ListItem>
                    <ListItem className={classes.mainbox} style={{ marginLeft: '2.5%' }}>
                        <ListItemText primary="Days" className={classes.maintext} />
                        <h className={classes.subtext}>125 days</h>
                    </ListItem>
                </List>
            </Box>
            <Box>
                <List component="nav" aria-label="main mailbox folders" className={classes.index}>
                    <ListItem button className={classes.indexrow}>
                        <ListItemText primary="Setting" />
                        <ChevronRightIcon />
                    </ListItem>
                    <ListItem button className={classes.indexrow} >
                        <ListItemText primary="About" />
                        <ChevronRightIcon />
                    </ListItem>
                    <ListItem button className={classes.indexrow} >
                        <ListItemText primary="Help" />
                        <ChevronRightIcon />
                    </ListItem>
                    <ListItem button className={classes.indexrow} >
                        <ListItemText primary="Rate this app" />
                        <ChevronRightIcon />
                    </ListItem>
                    <ListItem button className={classes.indexrow} >
                        <ListItemText primary="Log out" />
                        <ChevronRightIcon />
                    </ListItem>
                </List>
            </Box>
        </List>
    );
}