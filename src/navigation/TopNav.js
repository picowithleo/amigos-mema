import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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



    // 暂时放在top的连接到登陆跟注册的导航，等到时候找到地方放的就改
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