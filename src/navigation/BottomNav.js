import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WidgetsIcon from '@material-ui/icons/Widgets';
import React from 'react';
import { Link } from 'react-router-dom';


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

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={navTheme}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>

        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} component={Link} to="/home" />
        <BottomNavigationAction label="Learn" value="Learn" icon={<MenuBookIcon />} component={Link} to="/learn" />
        <BottomNavigationAction label="Discover" value="Discover" icon={<WidgetsIcon />} component={Link} to="/discover" />
        <BottomNavigationAction label="Account" value="account" icon={<AccountCircleIcon />} component={Link} to="/account" />

      </BottomNavigation>
    </ThemeProvider>
  );
}

export default BottomNav;