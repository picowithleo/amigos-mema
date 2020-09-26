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


const useStyles = makeStyles((theme) => ({
    //    mema导航设置
    // memabackground: {
    //     marginTop: "24px",
    //     width: '100%',

    //     position: 'relative',
    //     height: '50px',
    //     backgroundColor: '#9CCC9D',
    // },
    // 返回图标
    // backicon: {
    //     position: 'relative',
    //     right: "43%",
    // },
    appbar: {
        position: 'relative',
        backgroundColor: '#9CCC9D',
    },
    // 小黄人图标
    memaicon: {
        position: 'relative',
        marginTop: "80px",
    },

    // 提问div
    questionground: {
        position: 'relative',
        marginTop: "30px",
        width: "80%",
        marginLeft: "10%",
        marginBottom: "10px",
        fontSize: '30px',
    },
    // 问题转化div
    translateground: {
        position: 'relative',
        width: "80%",
        marginLeft: "10%",
        marginTop: "30px",
        fontSize: '20px',
    },
    // 答案div
    answerground: {
        position: 'relative',
        width: "80%",
        marginLeft: "10%",
        marginTop: "20px",
        fontSize: '30px',
    },
    // 翻译按钮
    translateicon: {
        position: 'relative',
        marginTop: "50px",
    }
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    return (
        <Box>
            <AppBar className={classes.appbar} >
                <Toolbar>
                    <IconButton edge="start"
                        aria-label="ArrowBackIos" component={Link} to="/mema">
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography style={{ fontSize: '2.5rem', fontWeight: 'bold', marginLeft: '5px' }}>
                       Talking
                    </Typography>
                </Toolbar>
            </AppBar>
            <div>
                <Typography className={classes.memaicon}>
                    <img className="mema" alt="" component={Link} to="/Mema" />
                </Typography>
            </div>
            <div className={classes.questionground}>
                <text className={classes.question} >
                    How do I say "My name is MeMa?"
                </text>
            </div>
            <div className={classes.translateground}>
                <text className={classes.translate} >
                    wo jiao MeMa.
                </text>
            </div>
            <div className={classes.answerground}>
                <text className={classes.translate} >
                    我叫 MeMa.
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