import { Grid } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MicIcon from '@material-ui/icons/Mic';
import React from 'react';
import { Link } from 'react-router-dom';
import picture1 from '../assets/img/learning.jpg';
import picture2 from '../assets/img/review.jpg';
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
        fontSize: "30px",
        // color: '#A9A9A9',
        color: "#505050",
        marginTop: "-10px" 
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
        height: "160px",
        backgroundImage: 'url(' + picture1 + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    button2: {
        width: '40%',
        marginTop: "20px",
        height: "160px",
        backgroundImage: 'url(' + picture2 + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
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
                        <h><b>Word of Today</b></h>
                    </Box>
                    <Box className={classes.wenzi}>
                        <h><b style={{ fontSize: "15px" }}>pīn yīn</b></h>
                        <br></br>
                        <h><b>拼音</b></h>
                    </Box>
                </Grid>
            </List>
            <div className={classes.content1} component={Link} to="/Mema">
                <Box className={classes.title}>
                    <h><b>Talk to MEMA</b></h>
                </Box>
                <Typography>
                    <img className="mema" alt="" component={Link} to="/Mema" />
                </Typography>
                <IconButton type="speech" className={classes.micbutton} aria-label="speech" >
                    <BottomNavigation>
                        <BottomNavigationAction icon={<MicIcon />} component={Link} to="/Mema"/>
                    </BottomNavigation>
                    {/* navigation color have problem */}
                    {/* 麦克风size可以改大一点 */}
                </IconButton>
            </div>
            <List className={classes.content2}>
                <Box className={classes.title}>

                    <h><b>Vocabulary Book</b></h>

                </Box>
                <Button variant="outlined" className={classes.button1} component={Link} to="/learning"></Button>
                <Button variant="outlined" className={classes.button2} component={Link} to="/review"></Button>
            </List>
        </Box>

    )

}
