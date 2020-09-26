import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EmailIcon from '@material-ui/icons/Email';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import PublicIcon from '@material-ui/icons/Public';
import React from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

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
        marginTop: '10px',
    },
    indexrow: {
        border: "1px solid #e0e0e0",
        fontSize: '2rem',
    },

    input: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            marginLeft: '-1px',
        },
    },

    formControl: {
        margin: theme.spacing(1),
        // minWidth: 120,
        width: '100%',
        marginLeft: '-1px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    submit: {
        width: '90%',
        marginTop: '5px',
        height: '43px',
    }

}));

const navTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#9CCC9D'
        },
    }
})

export default function CustomizedInputBase() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    const [open2, setOpen2] = React.useState(false);
    const handleClick2 = () => {
        setOpen2(!open2);
    };

    const [open3, setOpen3] = React.useState(false);
    const handleClick3 = () => {
        setOpen3(!open3);
    };

    const [open4, setOpen4] = React.useState(false);
    const handleClick4 = () => {
        setOpen4(!open4);
    };

    const [open5, setOpen5] = React.useState(false);
    const handleClick5 = () => {
        setOpen5(!open5);
    };

    const [country, setcountry] = React.useState('');
    const handleChange = (event) => {
        setcountry(event.target.value);
    };

    const [language, setlang] = React.useState('');
    const handleChange1 = (event) => {
        setlang(event.target.value);
    };

    const [level, setlevel] = React.useState('');
    const handleChange2 = (event) => {
        setlevel(event.target.value);
    };

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
                    <ListItem button className={classes.indexrow} onClick={handleClick}>
                        <ListItemIcon>
                            <AssignmentIndIcon />
                        </ListItemIcon>
                        <ListItemText primary="Name" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField id="filled-basic" label="Input your name" variant="filled" />
                        </form>
                    </Collapse>
                    <ListItem button className={classes.indexrow} onClick={handleClick2}>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Email" />
                        {open2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open2} timeout="auto" unmountOnExit>
                        <form className={classes.input} noValidate autoComplete="off">
                            <TextField id="filled-basic" label="Input your email" variant="filled" />
                        </form>
                    </Collapse>
                    <ListItem button className={classes.indexrow} onClick={handleClick3}>
                        <ListItemIcon>
                            <PublicIcon />
                        </ListItemIcon>
                        <ListItemText primary="Country" />
                        {open3 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open3} timeout="auto" unmountOnExit>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-filled-label">Select your country</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={country}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Australia</MenuItem>
                                <MenuItem value={20}>China</MenuItem>
                                <MenuItem value={30}>New Zealand</MenuItem>
                            </Select>
                        </FormControl>
                    </Collapse>
                    <ListItem button className={classes.indexrow} onClick={handleClick4}>
                        <ListItemIcon>
                            <GTranslateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Language" />
                        {open4 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open4} timeout="auto" unmountOnExit>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-filled-label">Select your language</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={language}
                                onChange={handleChange1}
                            >
                                <MenuItem value={10}>Chinese</MenuItem>
                                <MenuItem value={20}>English</MenuItem>
                                <MenuItem value={30}>Korean</MenuItem>
                                <MenuItem value={40}>Japanese</MenuItem>
                            </Select>
                        </FormControl>
                    </Collapse>
                    <ListItem button className={classes.indexrow} onClick={handleClick5}>
                        <ListItemIcon>
                            <AssessmentIcon />
                        </ListItemIcon>
                        <ListItemText primary="Proficiency level" />
                        {open5 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open5} timeout="auto" unmountOnExit>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-filled-label">Select your level</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={level}
                                onChange={handleChange2}
                            >
                                <MenuItem value={10}>Level 1</MenuItem>
                                <MenuItem value={20}>Level 2</MenuItem>
                                <MenuItem value={30}>Level 3</MenuItem>
                                <MenuItem value={40}>Level 4</MenuItem>
                                <MenuItem value={50}>Level 5</MenuItem>
                            </Select>
                        </FormControl>
                    </Collapse>
                </List>
            </Box>
            <ThemeProvider theme={navTheme}>
                <Button variant="contained" color="primary" disableElevation className={classes.submit} >
                    Submit
                </Button>
            </ThemeProvider>
        </List >

    );
}