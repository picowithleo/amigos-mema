import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo1.png';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-uihttps://trello.com/b/eSyuGWjB/amigos-mema-app.com/" style={{ textDecoration: 'none' }}>
                Amigos MeMa
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({

    root: {
        position: 'relative',
        // bottom: '30%',
        width: '100%',
        backgroundColor: '#deefe0',
        height: '100vh'
    },

}));
const Welcome = props => {

    // export default function CustomizedInputBase() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth={false} className={classes.root} component={Link} to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                {/* <Typography /> */}
                {/* <h4>Welcome to MeMa!</h4> */}
                <div>
                    <Typography>
                        <img src={logo} alt="logo" style={{ marginTop: '20%' }} />
                    </Typography>
                </div>
                <div>
                    <h1 style={{ textAlign: 'center', fontSize: '2.5em', color: '#ac54a0', marginTop: '60px' }}>Welcome to MeMa!</h1>
                    <h4 style={{ marginLeft: '5%', marginRight: '5%', textAlign: 'justify', fontSize: '1.3em', marginTop: '-20px' }}>
                        An efficient language education application. Let's learn languages and improve memory together！</h4>
                </div>
                <Box mt={8} style={{ marginTop: '100%' }}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    );

}

export default Welcome;