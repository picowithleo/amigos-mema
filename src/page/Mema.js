import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import '../page/Home.css';

const useStyles = makeStyles((theme) => ({
    // mema 导航
    memabackground: {
        marginTop: "24px",
        width: '100%',

        position: 'relative',
        height: '50px',
        backgroundColor: '#9CCC9D',

    },
    // 返回图标
    backicon: {
        position: 'relative',
        right: "43%",
    },
    // 小黄人图标
    memaicon: {
        position: 'relative',
        marginTop: "107px",
    },
    // 需要翻译的文字背景
    wordbackground: {
        position: 'relative',
        marginTop: "107px",
        width: "80%",
        marginLeft: "10%",

    },
    // 需要翻译的文字设置
    instrction: {
        position: 'relative',
        marginTop: "107px",
        fontSize: '30px',

    },
    // 转化图标
    translateicon: {
        position: 'relative',
        marginTop: "50px",
    }
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    return (
        <Box>
            <div className={classes.memabackground}>
                <BottomNavigationAction label="home" className={classes.backicon} icon={<ArrowBackIosIcon />} component={Link} to="/Home" />
            </div>
            <div>
                <Typography className={classes.memaicon}>
                    {/* <LockOutlinedIcon /> */}
                    <img className="mema" alt="mema"/>
                </Typography>
            </div>
            <div className={classes.wordbackground}>
                <text className={classes.instrction} >
                    Tap on the button below or speak to talk to MeMa !
                </text>
            </div>
            <div>
                <BottomNavigationAction label="Translatepage" className={classes.translateicon} icon={<TranslateOutlinedIcon />} component={Link} to="/Translatepage" />
            </div>
        </Box>

    )
}