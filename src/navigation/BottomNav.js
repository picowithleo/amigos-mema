import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GamesIcon from '@material-ui/icons/Games';
import HomeIcon from '@material-ui/icons/Home';
import TranslateIcon from '@material-ui/icons/Translate';
import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';


const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
});

const navTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#9CCC9D'
    },
    text: {
      secondary: '#757575'
    }
  }
})

const BottomNav = props => {
  

  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (!isLoggedIn()) return null;
  return (
    <ThemeProvider theme={navTheme}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>

        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} component={Link} to="/home" />
        <BottomNavigationAction label="Learn" value="Learn" icon={<TranslateIcon />} component={Link} to="/learn" />
        <BottomNavigationAction label="Discover" value="Discover" icon={<GamesIcon />} component={Link} to="/discover" />/修改之前没有提供的链接-zz 29/08//
          <BottomNavigationAction label="Account" value="account" icon={<AccountCircleIcon />} component={Link} to="/profile" />

      </BottomNavigation>
    </ThemeProvider>
  );
}

export default BottomNav;