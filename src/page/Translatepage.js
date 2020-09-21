import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import React from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    //    mema导航设置
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
        marginTop: "80px",
    },

    // 提问div
    questionground: {
        position: 'relative',
        width: "80%",
        marginLeft: "10%",
        marginTop: "10px",
        fontSize: '30px',
    },
    // 问题转化div
    translateground: {
        position: 'relative',
        width: "80%",
        marginLeft: "10%",
        marginTop: "70px",
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
            <div className={classes.memabackground}>
                <BottomNavigationAction label="home" className={classes.backicon} icon={<ArrowBackIosIcon />} component={Link} to="/Home" />
            </div>
            <div>
                <Typography className={classes.memaicon}>
                    {/* <LockOutlinedIcon /> */}
                    <img className="mema" alt="meama" />
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
                <BottomNavigationAction label="Translatepage" className={classes.translateicon} icon={<TranslateOutlinedIcon />} component={Link} to="/Translatepage" />
            </div>
        </Box>

    )
}