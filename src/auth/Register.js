import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import logo from '../assets/img/logo.jpg';
import SignupButton from '../ui/SignupButton';
import { register } from '../api/auth';
// import { setToken } from '../utils/auth';
// import { Message } from 'semantic-ui-react';
import validator from "validator";
import { errHandler } from "../utils/helper";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
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
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     fontWeight: 'bold',
//   },
// }));


class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      err: { type: "", msg: "" },
      isLoading: false,
      password: '',
      repeatPwd: "",
    };
  }

  handleChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    this.setState({ [key]: value });
  };

  registerValidator = () => {
    const { email, password, repeatPwd } = this.state;
    let isError = false;
    this.setState({ err: {} });

    if (!validator.isEmail(email)) {
      this.setState({
        err: { type: "email", msg: "Invalid email format" }
      });
      isError = true;
      return isError;
    }

    if (!validator.isLength(password, { min: 6 })) {
      this.setState({
        err: {
          type: "password",
          msg: "Password is too simple, try another one"
        }
      });
      isError = true;
      return isError;
    }

    if (password !== repeatPwd) {
      this.setState({
        err: { type: "password", msg: "Passwords do not match" }
      });
      isError = true;
      return isError;
    }

    return isError;
  };


  handleregister = () => {
    const { email, password } = this.state;
    if (this.registerValidator()) return;
    try {
      this.setState({ err: {}, isLoading: true });
      register(email, password);  
      const locationState = this.props.location.state;
      const redirectTo = (locationState && locationState.from) || '/login';
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
// export default function SignUp() {
  // const classes = useStyles();
  if (this.state.isLoading) return <div>isLoading...</div>
  return (
    
    <Container component="main" maxWidth="xs" style={{ marginBottom: '15%' }}>
      {/* <CssBaseline /> */}
      <div className="paper">
        <Typography>
          <img src={logo} alt="logo" style={{ height: '150px' }} />
        </Typography>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className="form" noValidate
        // err={this.state.err}
        >
        {/* {this.state.err && <p style={{ color: "#ff0000" }}>{this.state.err}</p>} */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.handleChange}
                value={this.state.email}
                err={this.state.err}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange}
                value={this.state.password}
                err={this.state.err}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="repeatPwd"
                label="Comfirm Password"
                type="password"
                id="password"
                autoComplete="comfirm-password"
                onChange={this.handleChange}
                value={this.state.repeatPwd}
                err={this.state.err}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="agreement" color="secondary" />}
                label="I agree to use this product 
                only for learning purposes and 
                reduce cognitive decline purposes"
              />
            </Grid>
          </Grid>
          {/* {!!this.state.err && (
              <Message
                error
                header="Sign up failed"
                content="Please check your email and password"
              />
            )} */}
          <SignupButton
            // type="submit"
            // fullWidth
            // variant="contained"
            // color="primary"
            className="submit"
            handleOnClick={() => { this.handleregister() }}
          >
            {/* Sign Up */}
          </SignupButton>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href={'/login'} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
}
export default Register;