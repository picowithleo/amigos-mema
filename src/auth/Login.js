import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import logo from '../assets/img/logo.jpg';
import LoginButton from '../ui/LoginButton';
import { login } from '../api/auth';
import {setToken} from '../utils/auth';

import { Button, Message } from 'semantic-ui-react';
import './login.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-uihttps://trello.com/b/eSyuGWjB/amigos-mema-app.com/">
        Amigos MeMa
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     color: 'black',
//   },
//   welcome: {
//     color: '#BF8487',
//   }
// }));

class Login extends React.Component {
  
  constructor(props) {
      super(props);

      this.state = {
          email: '',
          error: null,
          isLoading: false,
          password: '',
      };
  }

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value } );
};
  // handlelogin = async () => {
  //   const { email, password } = this.state;
  //   debugger;
  //   login(email, password).then(response => {
  //     console.log(response);
  
  //     // setToken(token);
  //     const locationState = this.props.location.state;
  //     const redirectTo = (locationState && locationState.from) || '/home';
  //     this.props.history.replace(redirectTo);
  //   })
  //   .catch(error => {
  //     debugger;
  //     if (error.token) {
  //       const { message } = error.token.data;
  //       this.setState({ err: message, isLoading: false });
  //     }
  //   });

  handlelogin =  ()  => {

    login(this.state.email, this.state.password)
            .then(res => {
              const jwtToken = res.data.data.token;
              debugger;
              console.log(jwtToken.token);
              console.log(jwtToken);
                this.setState({ isLoading: false }, () => {
                  debugger;
                    setToken(jwtToken);
                    const locationState = this.props.location.state;
                    const redirectTo = (locationState && locationState.from) || '/home';
                    this.props.history.replace(redirectTo);
                });
            })
                    .catch(error =>   
                  {
                    debugger;
                  this.setState({ error, isLoading: false })
                });
      
    };


    // handlelogin =  ()  => {
    // this.setState({ error: null, isLoading: true }, async () => {
    //   debugger;
    //         try {
    //             const { email, password } = this.state;
    //             const res = await login(email, password);
    //             const jwtToken = res.data.data.token;
    //             console.log(res);
    //             console.log(jwtToken);
    //             debugger
    //             setToken(jwtToken);
    //             const locationState = this.props.location.state;
    //             const redirectTo = (locationState && locationState.from) || '/home';
    //             this.props.history.replace(redirectTo);
    //           }

    //        catch (error) {
    //           console.error(error);
    //           debugger
    //         }
    //       })




    // try {
    //   const res = await login(email, password);
    //   console.log(res);
    //   // debugger
    // } catch (error) {
    //   console.error(error);
    //   // debugger
    // }


  // };

// const Login = props => {

// export default function SignIn() {
//   const classes = useStyles();

  
  render() {
    // const classes = useStyles();
    return (
      
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <div className="paper">
        <Typography>
          {/* <LockOutlinedIcon /> */}
          <img src={logo} alt="logo" style={{ height: '150px' }} />
        </Typography>
        {/* <Typography className={classes.welcome} component="h1" variant="h5">
          WELCOME
        </Typography> */}
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="form" noValidate        
          error={!!this.state.error}         
          loading={this.state.isLoading}
          >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={this.handleChange}
            value={ this.state.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {!!this.state.error && (
            <Message
                error
                header="Login failed"
                content="Please check your email and password"
            />
          )}
          <LoginButton
            // type="submit"
            // fullWidth
            // variant="contained"
            // color= "secondary"
            handleOnClick={() => {this.handlelogin()}}
            // handleOnClick={this.handlelogin}
            className="submit"
          >
            {/* Login */}
          </LoginButton>
          <Button
              size="large"
              fluid
              primary
              // onClick={() => {this.handlelogin}}
              onClick={this.handlelogin}
          >
              Login
          </Button>

            <button onClick={this.handlelogin} >login</button>


          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href={'/register'} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8} style={{ marginTop: '115px' }}>
        <Copyright />
      </Box>
    </Container>
  );
}}

export default Login;