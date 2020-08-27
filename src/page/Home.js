import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import { Container, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MicIcon from '@material-ui/icons/Mic';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import '../page/Home.css';



const useStyles = makeStyles((theme) => ({

    learnbackground: {
        marginTop: "24px",
        width: '100%',

        position: 'relative',
        height: '100px',
        backgroundColor: '#9CCC9D',
    },
    wordbackground: {
        position: 'relative',
        marginTop: "5px",
        left: "10%",
        width: '80%',
        height: '90px',
        backgroundColor: '#FFFFFF',

    },
    title: {

        textAlign: 'left',
        color: '#A9A9A9',

    },
    wenzi: {

        textAlign: 'center',
        position: 'relative',
        fontSize: "40px",
        color: '#A9A9A9',


    },
    content1: {
        marginTop: "20px",
        position: 'relative',
        left: "10%",
        width: '80%',
        height: '240px',
        backgroundColor: '#FFFFFF',
    },
    content2: {
        marginTop: "30px",
        position: 'relative',
        left: "10%",
        width: '80%',
        height: '240px',
        backgroundColor: '#FFFFFF',
    },
    button1: {
        position: 'relative',
        marginTop: "20px",
        marginRight: "20px",

        width: '40%',
        height: "160px"
    },
    button2: {
        width: '40%',
        marginTop: "20px",
        height: "160px"
    },
    micbutton: {
        position: 'relative',
        marginTop: "-15px",    

    },


}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (
        <Box>
            <List className={classes.learnbackground}>

                <Grid className={classes.wordbackground}>
                    <Box className={classes.title}>
                        <h><b>word of today</b></h>
                    </Box>
                    <Box className={classes.wenzi}>
                        <h><b>中文</b></h>
                    </Box>
                </Grid>
            </List>
            <div className={classes.content1}>
                <Box className={classes.title}>
                    <h><b>talk to MEMA</b></h>



                </Box>
                <Typography>
                    {/* <LockOutlinedIcon /> */}
                    <img className="mema" />
                </Typography>
                <IconButton  type="speech" className={classes.micbutton} aria-label="speech" >
                    <MicIcon />
                </IconButton>
            </div>
            <List className={classes.content2}>
                <Box className={classes.title}>
                    <h><b>vocabulary book</b></h>

                </Box>
                <Button variant="outlined" className={classes.button1}>learning</Button>
                <Button variant="outlined" className={classes.button2}>review</Button>
            </List>
        </Box>





    )

}