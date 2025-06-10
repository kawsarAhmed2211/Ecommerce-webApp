import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import styled from "styled-components"
import LogoImg from "../utils/images/Logo.webp"
import Button from "./Button"
import {SearchRounded, FavoriteBorder} from "@mui/icons-material"
/*
If it is a component from styled-components then define
like this const Nav = styled.div``; if it is from react-rouer-dom
like nav link then enclose it with brackets const NavLinks = styled(NavLink)``;
*/
const Nav = styled.div`
    
`;
const NavbarContainer = styled.div`
    
`;
const NavLogo = styled.div`
    
`;
const Logo = styled.img`
    height: 34px;
`;
const NavItems = styled.div`
    
`;
const NavLinks = styled(NavLink)`
    
`;
const ButtonContainers = styled.div`
    
`;

const Navbar = () => {
  return (
    <Nav>
        <NavbarContainer>
            <NavLogo>
                <Logo src={LogoImg} />
            </NavLogo>
            <NavItems>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/">New Arrivals</NavLink>
                <NavLink to="/">Orders</NavLink>
                <NavLink to="/">Contact</NavLink>
            </NavItems>
            <ButtonContainers>
                <NavLink to="/search">
                    <SearchRounded/>
                </NavLink>
                <NavLink to="/favourites">
                    <FavoriteBorder/>
                </NavLink>
                <Button text="SignIn" ></Button>
            </ButtonContainers>
        </NavbarContainer>
    </Nav>
  )
}

export default Navbar