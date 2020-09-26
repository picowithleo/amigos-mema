import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import RateReviewIcon from '@material-ui/icons/RateReview';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    // title: {
    //     textAlign: 'left',
    //     fontSize: '20px',
    //     top: '5%',
    //     color: '#FFFFFF',
    //     position: 'relative',
    //     left: '10%',
    //     width: '80%',
    // },
    root: {
        position: 'relative',
        bottom: '30%',
    },
    appbar: {
        position: 'relative',
        backgroundColor: '#9CCC9D',
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
                <AppBar className={classes.appbar} >
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton}
                            aria-label="ArrowBackIos" component={Link} to="/account">
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', marginLeft: '5px' }}>
                            Setting
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box>
                <List component="nav" aria-label="main mailbox folders" className={classes.index}>
                    <ListItem button className={classes.indexrow}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Setting" />
                        <ChevronRightIcon />
                    </ListItem>
                    <ListItem button className={classes.indexrow} >
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                        <ChevronRightIcon />
                    </ListItem>
                    <ListItem button className={classes.indexrow} >
                        <ListItemIcon>
                            <HelpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Help" />
                        <ChevronRightIcon />
                    </ListItem>
                    <ListItem button className={classes.indexrow} >
                        <ListItemIcon>
                            <RateReviewIcon />
                        </ListItemIcon>
                        <ListItemText primary="Rate this app" />
                        <ChevronRightIcon />
                    </ListItem>
                    <ListItem button className={classes.indexrow} >
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Log out" />
                        <ChevronRightIcon />
                    </ListItem>
                </List>
            </Box>
        </List>
    );
}