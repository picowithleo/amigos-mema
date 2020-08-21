import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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


const LoginButton = props => {
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
          Login
        </Button>
      </ThemeProvider>
    </div>
  );

};

export default LoginButton;

