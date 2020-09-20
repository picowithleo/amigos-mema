import Button from '@material-ui/core/Button';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(0),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9CCC9D',
    }
  },
});

const SignupButton = props => {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.margin}>

          Sign Up
          </Button>
      </ThemeProvider>
    </div>
  );

};

export default SignupButton;

