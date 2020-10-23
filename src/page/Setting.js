import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import PublicIcon from '@material-ui/icons/Public';
import React from 'react';
import { Link } from 'react-router-dom';
import { users } from '../api/auth';
import { errHandler } from "../utils/helper";
import { userEmail, userPassword } from '../auth/Login'


const navTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#8bc38c'
        },
    },
})

const fontTheme = createMuiTheme({
    overrides: {
        MuiTypography: {
            body1: {
                fontSize: '1.5rem'
            },
        },
    },
});

class Setting extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: "",
        isLoading: false,
        username: "",
        country: "",
        language: "",
        proficiencyLevel: "",
        avatar:""
      };
    }
  
      handleChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        this.setState({ [key]: value });
      };
  
      handlesubmit = () => {
          const { username, password,country, language, proficiencyLevel } = this.state;
          try {
            this.setState({ err: {}, isLoading: true });
            users(userEmail, password, username, country, language, proficiencyLevel, "aaa");
            const locationState = this.props.location.state;
            const redirectTo = (locationState && locationState.from) || '/account';
            this.props.history.replace(redirectTo);
      
          } catch (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
              const { message } = error.response.data;
              this.setState({ err: errHandler(message), isLoading: false });
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
              const { message } = error.request;
              this.setState({ err: errHandler(message), isLoading: false });
            } else {
              // Something happened in setting up the request that triggered an Error
          
              const { message } = error.message;
              this.setState({ err: errHandler(message), isLoading: false });
      
              // this.setState({ err: error.message })
              console.log('Error', error.message);
            }
            console.log(error.config);
      
          }
          this.setState({ isLoading: false });
        };

    render() {
    return (
        <ThemeProvider theme={fontTheme}>
            <List style={{ marginBottom: '15%' }}>
                <Box style={{position: 'relative', bottom: '30%'}}>
                    <AppBar style={{position: 'relative', backgroundColor: '#8bc38c',
                    marginTop: '-8px'}}>
                        <Toolbar>
                            <IconButton edge="start"
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
                    <List component="nav" aria-label="main mailbox folders" style={{width: '90%',
                    marginLeft: '5%', marginTop: '10px'}}>
                        <ListItem style={{border: "1px solid #e0e0e0", fontSize: '2rem'}}>
                            <ListItemIcon>
                                <AssignmentIndIcon />
                            </ListItemIcon>
                            <ListItemText primary="Name" />
                        </ListItem>
                        <ListItem>
                            <form style={{margin: '1px', width: '100%', marginLeft: '-1px',
                            }} >
                                <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="username"
                                name="username"
                                autoComplete="username"
                                value={this.state.username}
                                onChange={this.handleChange}/>
                            </form>
                        </ListItem>
                        <ListItem style={{border: "1px solid #e0e0e0", fontSize: '2rem'}}>
                            <ListItemIcon>
                                <AssignmentIndIcon />
                            </ListItemIcon>
                            <ListItemText primary="Password" />
                        </ListItem>
                        <ListItem>
                            <form style={{margin: '1px', width: '100%', marginLeft: '-1px',
                            }} >
                                <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="password"
                                name="password"
                                autoComplete="password"
                                value={this.state.password}
                                onChange={this.handleChange}/>
                            </form>
                        </ListItem>
                        <ListItem style={{border: "1px solid #e0e0e0", fontSize: '2rem'}}>
                            <ListItemIcon>
                                <PublicIcon />
                            </ListItemIcon>
                            <ListItemText primary="Country" />
                        </ListItem>
                        <ListItem>
                            <FormControl variant="filled" style={{margin: '1px',  width: '100%',
                            marginLeft: '-1px',}}>
                                <InputLabel id="demo-simple-select-filled-label">Select your country</InputLabel>
                                <Select
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="country"
                                    label="country"
                                    name="country"
                                    autoComplete="country"
                                    value={this.state.country}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={"Australia"}>Australia</MenuItem>
                                    <MenuItem value={"China"}>China</MenuItem>
                                    <MenuItem value={"New Zealand"}>New Zealand</MenuItem>
                                </Select>
                            </FormControl>
                        </ListItem>
                        <ListItem style={{border: "1px solid #e0e0e0", fontSize: '2rem'}}>
                            <ListItemIcon>
                                <GTranslateIcon />
                            </ListItemIcon>
                            <ListItemText primary="Language" />
                        </ListItem>
                        <ListItem>
                            <FormControl variant="filled" style={{margin: '1px', width: '100%',
                            marginLeft: '-1px',}}>
                                <InputLabel id="demo-simple-select-filled-label">Select your language</InputLabel>
                                <Select
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="language"
                                    label="language"
                                    name="language"
                                    autoComplete="language"
                                    value={this.state.language}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={"Chinese"}>Chinese</MenuItem>
                                    <MenuItem value={"English"}>English</MenuItem>
                                    <MenuItem value={"Korean"}>Korean</MenuItem>
                                    <MenuItem value={"Japanese"}>Japanese</MenuItem>
                                </Select>
                            </FormControl>
                        </ListItem>
                        <ListItem style={{border: "1px solid #e0e0e0", fontSize: '2rem'}}>
                            <ListItemIcon>
                                <AssessmentIcon />
                            </ListItemIcon>
                            <ListItemText primary="Proficiency level" />
                        </ListItem>
                        <ListItem>
                            <FormControl variant="filled" style={{margin: '1px', width: '100%',
                            marginLeft: '-1px',}}>
                                <InputLabel id="demo-simple-select-filled-label">Select your level</InputLabel>
                                <Select
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id= "proficiencyLevel"
                                    label="proficiencyLevel"
                                    name="proficiencyLevel"
                                    autoComplete="proficiencyLevel"
                                    value={this.state.proficiencyLevel}
                                    onChange={this.handleChange}
                                >
                                    <MenuItem value={"Level 1"}>Level 1</MenuItem>
                                    <MenuItem value={"Level 2"}>Level 2</MenuItem>
                                    <MenuItem value={"Level 3"}>Level 3</MenuItem>
                                    <MenuItem value={"Level 4"}>Level 4</MenuItem>
                                    <MenuItem value={"Level 5"}>Level 5</MenuItem>
                                </Select>
                            </FormControl>
                        </ListItem>
                    </List>
                </Box>
                <ThemeProvider theme={navTheme}>
                    <Button variant="contained" color="primary" disableElevation style={{width: '90%',
                    marginTop: '5px', height: '43px', fontSize: '1.5rem',}} onClick={this.handlesubmit}>
                        Submit
                </Button>
                </ThemeProvider>
            </List >
        </ThemeProvider>

    );
    }
}

export default Setting;