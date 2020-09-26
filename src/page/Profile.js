import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import React from 'react';

const useStyles = makeStyles((theme) => ({

    learnbackground: {
        marginTop: "24px",
        width: '100%',
        position: 'relative',
        backgroundColor:'#8bc38c',
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

    title: {
        fontSize: '40px',
        position: 'relative',
    
    },

    icon: {
        marginLeft: '48%',
        marginTop: '2%',
        width: theme.spacing(8),
        height: theme.spacing(8),
    },


    /*content1: {
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

    content4: {
        marginTop: "30px",
        position: 'relative',
        left: "10%",
        width: '80%',
        height: '150px',
        backgroundColor: '#FFFFFF',
    },*/

    formControl: {
        position: 'relative',
        width: '100%',
        marginTop: "20px",
        marginRight: "-5px",
        height: "80px"
    },

    selectEmpty: {
        marginTop: theme.spacing(2),
      },
    
}));

export default function Profile() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        language: '',
        name: 'Your Name',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
      
    return (

        <div>

        <List className={classes.learnbackground}>
            <Grid className={classes.wordbackground}>
                <Box className={classes.title}>
                    <h><b>Profile Details</b></h>
                </Box>
            </Grid>    
        </List>

        <Avatar className={classes.icon}>
            <PermIdentityIcon />
        </Avatar>

        <List className={classes.dname}>
            <Box className={classes.yname}>
                <h><b>Name</b></h>
            </Box>
        </List>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="language-native-simple">Language</InputLabel>
          <Select
            native
            value={state.language}
            onChange={handleChange}
            inputProps={{
              name: 'language',
              id: 'language-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option >English</option>
            <option >Chinese</option>
            <option >Janpenese</option>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="country-native-simple">Country</InputLabel>
          <Select
            native
            value={state.country}
            onChange={handleChange}
            inputProps={{
              name: 'country',
              id: 'country-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option >Australia</option>
            <option >China</option>
            <option >Japan</option>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="proficiency-native-simple">Proficiency</InputLabel>
          <Select
            native
            value={state.proficiency}
            onChange={handleChange}
            inputProps={{
              name: 'proficiency',
              id: 'proficiency-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            <option >C</option>
            <option >B</option>
            <option >A</option>
          </Select>
        </FormControl>


        </div>

    )
}       
    
    /* <Box>
        <List className={classes.learnbackground}>

            <Grid className={classes.wordbackground}>
                <Box className={classes.title}>
                    <h><b>Profile Details</b></h>
                </Box>
            </Grid>
        </List>*/
            
