import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import { Container, Grid, FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import HelpIcon from '@material-ui/icons/Help';
import ForumIcon from '@material-ui/icons/Forum';


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
        width: '40%',
        marginTop: "20px",
        marginRight: "-5px",
        height: "80px"
    },
    button2: {
        position: 'relative',
        width: '40%',
        marginTop: "20px",
        marginRight: "-5px",
        height: "80px"
    },
    button3: {
        width: '40%',
        marginTop: "20px",
        marginRight: "-5px",
        height: "80px"
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
                        <h><b>Discover</b></h>
                    </Box>
                </Grid>
            </List>
            <div className={classes.content1}>
            <Button variant="outlined" className={classes.button2}>Information</Button>
                <ListItemAvatar >
                <Avatar className={classes.disIcon}>
                    <SportsEsportsIcon/>
                </Avatar>
                </ListItemAvatar>
               
                
             </div>
             <List className={classes.content2}>
    
                <Button variant="outlined" className={classes.button3}>Challenge</Button>
                <ListItemAvatar >
                <Avatar className={classes.disIcon}>
                    <HelpIcon/>
                </Avatar>
                </ListItemAvatar>
                
            </List>
            <List className={classes.content3}>
            <Button variant="outlined" className={classes.button1}>Community</Button>
                <ListItemAvatar >
                <Avatar className={classes.disIcon}>
                    <ForumIcon/>
                </Avatar>
                </ListItemAvatar>
            </List>
             
            
         </Box>



    )

}

