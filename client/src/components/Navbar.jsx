import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import styled from "styled-components"
import LogoImg from "../utils/images/Logo.webp"
import Button from "./Button"
import {SearchRounded, FavoriteBorder, ShoppingCartOutlined} from "@mui/icons-material"
/*
If it is a component from styled-components then define
like this const Nav = styled.div``; if it is from react-rouer-dom
like nav link then enclose it with brackets const NavLinks = styled(NavLink)``;
*/
const Nav = styled.div`
    background-color: ${({ theme }) => theme.bg};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    position: sticky;
    top: 0;
    z-index: 10;
`;
const NavbarContainer = styled.div`
    width:100%;
    max-width: 1400px;
    display: flex;
    gap: 14px;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
`;
const NavLogo = styled.div`
    //width: 100%;
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
`;
const Logo = styled.img`
    height: 34px;
`;
const NavItems = styled.ul`
    display: flex;
    gap: 20px;
    @media screen and (max-width: 768px){
        display: none;
    }
`;
const Navlink = styled(NavLink)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
`;
const ButtonContainers = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${({theme}) => theme.primary};
    gap: 28px;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

const Navbar = () => {
  return (
    <Nav>
        <NavbarContainer>
            <NavLogo>
                <Logo src={LogoImg} />
            </NavLogo>
            <NavItems>
                <Navlink to="/">Home</Navlink>
                <Navlink to="/">Shop</Navlink>
                <Navlink to="/">New Arrivals</Navlink>
                <Navlink to="/">Orders</Navlink>
                <Navlink to="/">Contact</Navlink>
            </NavItems>
            <ButtonContainers>
                <NavLink to="/search">
                    <SearchRounded/>
                </NavLink>
                <NavLink to="/favourites">
                    <FavoriteBorder/>
                </NavLink>
                <NavLink to="/cart">
                    <ShoppingCartOutlined />                
                </NavLink>
                <Button text="SignIn" ></Button>
            </ButtonContainers>
        </NavbarContainer>
    </Nav>
  )
}

export default Navbar