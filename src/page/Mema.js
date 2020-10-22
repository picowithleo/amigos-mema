import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MicIcon from '@material-ui/icons/Mic';
import React from 'react';
import { Link } from 'react-router-dom';
import '../page/Home.css';

const useStyles = makeStyles((theme) => ({
    // mema 导航

    appbar: {
        position: 'relative',
        backgroundColor:'#8bc38c',
    },

    // 小黄人图标
    memaicon: {
        position: 'relative',
        marginTop: "80px",
    },
    // 需要翻译的文字背景
    wordbackground: {
        position: 'relative',
        marginTop: "30px",
        width: "80%",
        marginLeft: "10%",
        marginBottom: "10px"

    },
    // 需要翻译的文字设置
    instrction: {
        // position: 'relative',
        fontSize: '30px',

    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    return (
        <Box>
            <AppBar className={classes.appbar} >
                <Toolbar>
                    <IconButton edge="start"
                        aria-label="ArrowBackIos" component={Link} to="/home">
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', marginLeft: '5px' }}>
                        MeMa
                    </Typography>
                </Toolbar>
            </AppBar>
            <div>
                <Typography className={classes.memaicon}>
                    <img className="mema" alt="" component={Link} to="/Mema" />
                </Typography>
            </div>
            <div className={classes.wordbackground}>
                <text className={classes.instrction} >
                    Tap on the button below and talk to MeMa !
                </text>
            </div>
            <div>
                <IconButton type="speech" className={classes.micbutton} aria-label="speech" component={Link} to="/Translatepage" >
                    <MicIcon style={{ fontSize: 40 }} />
                </IconButton>
            </div>
        </Box>

    )
}