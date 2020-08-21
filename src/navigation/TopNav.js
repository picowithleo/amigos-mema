import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

// import './topNav.scss';




const NavContainer = styled.ul`
    display: flex;
    list-style: none;
    color: ${props => props.isRed && 'red'};

    a {
        text-decoration: none;
    }


`;

const TopNav = () => {

    


    return (
        <nav>
            {/* <ul className="nav"> */}
            <NavContainer isRed>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </NavContainer>
            {/* </ul> */}
        </nav>
        
    );
};

export default TopNav;