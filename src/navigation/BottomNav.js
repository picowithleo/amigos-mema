import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WidgetsIcon from '@material-ui/icons/Widgets';
import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { isLoggedIn } from '../utils/auth';


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
      main: '#8bc38c'
    },
    text: {
      secondary: '#757575'
    }
  }
})

const BottomNav = ({ location: { pathname } }) => {
  

  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  const [isShow, setIsShow] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    // setIsShow(isLoggedIn() ? true : false); 
    if (pathname === '/login'|| pathname ==='/register' || pathname==='/welcome') {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [pathname])
  if (!isShow) return null;
  return (
    <ThemeProvider theme={navTheme}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>

        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon fontSize="large" />} component={Link} to="/home" />
        <BottomNavigationAction label="Learn" value="Learn" icon={<MenuBookIcon fontSize="large" />} component={Link} to="/learn" />
        <BottomNavigationAction label="Discover" value="Discover" icon={<WidgetsIcon fontSize="large" />} component={Link} to="/discover" />
        <BottomNavigationAction label="Account" value="account" icon={<AccountCircleIcon fontSize="large" />} component={Link} to="/account" />

      </BottomNavigation>
    </ThemeProvider>
  );
}

export default withRouter(BottomNav);