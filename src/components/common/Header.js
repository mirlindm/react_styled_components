import React, {useState, useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';
import {Link as ReactRouterDomLink, useLocation} from 'react-router-dom';
import {Toggle} from './Toggle';

const HeaderWrapper = styled.header`
    height: 60px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    background-image: linear-gradient(to right, ${props => props.theme.primaryColor}, ${props => props.theme.secondaryColor});
    border-bottom: 3px solid ${props => props.theme.secondaryColor};
`;

const Menu = styled.nav`
    display: ${props => props.open ? 'block' : 'none'};
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    padding: 8px;
    box-sizing: border-box;
    font-family: 'Open Sans';
    border-bottom: 3px solid ${props => props.theme.secondaryColor};
    background: white;


    @media(min-width: 768px) {
        display: flex;
        background: none;
        left: initial;
        top: initial;
        border-bottom: none;
        margin: auto 0 auto auto;
        position: relative;
        width: initial;
    }
`;

const Link = ({isActive, children, ...props}) => {
    return(
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    );
};

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${props => props.isActive ? 'bold' : 'normal' };    
    color: black;
`;

const MobileMenuIcon = styled.div`
    margin: auto 0 auto auto;
    width: 25px;
    min-width: 25px;
    padding: 5px;
    
    > div {
        height: 3px;
        background: black;
        margin: 5px 0;
        width: 100%;
    }

    @media(min-width: 768px) {
        display: none;
    } 
`;

export function Header() {
    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const {id, setTheme} = useContext(ThemeContext);

    return ( 
        <HeaderWrapper>
            <MobileMenuIcon onClick={() => setMenuOpen(currentState => !currentState )}>
                <div/>
                <div/>
                <div/>
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to="/" isActive={pathname === '/'}>Home</StyledLink>
                <StyledLink to="/login" isActive={pathname === '/login'}>Login</StyledLink>      
                <Toggle isActive={id === 'dark'} onToggle={setTheme}/>          
            </Menu>            
        </HeaderWrapper>
    );
}