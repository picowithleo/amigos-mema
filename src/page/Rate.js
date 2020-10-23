import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    root: {
        position: 'relative',
        bottom: '30%',
    },
    appbar: {
        position: 'relative',
        backgroundColor: '#8bc38c',
        marginTop: '-8px',
    },

    ratebar: {
        marginTop: "40%",
        backgroundColor: '#ffffff',
        padding: "15% 0 10% 0",
    }
}));

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff3a45',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function Ratingstar() {
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
                            Rate this app
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className={classes.ratebar}>
                <Typography variant="h5" >Enjoying the MEMA app?</Typography>
                <br></br>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Tap the heart to rate it!</Typography>
                    <StyledRating
                        name="customized-color"
                        defaultValue={4.5}
                        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="large" />}
                    />
                </Box>
            </div>
        </List>
    );
}