
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import logo from "../../../Images/logo.png";
import useAuth from '../../Hooks/useContext';
import "./Header.css";

const Header = () => {

    const { user, logOutAuth } = useAuth();

    return (
        <>
            <Navbar >
                <Container>
                    <Navbar.Brand >
                        <img width="50" src={logo} alt="" />
                        <span className="title-name">Nahdi</span>
                    </Navbar.Brand>
                    <Navbar>
                        <Nav className="ms-auto">
                            <NavLink className="nav-item" to="/home">Home</NavLink>
                            <NavLink className="nav-item" to="/about">About</NavLink>
                            <NavLink className="nav-item" to="/services">Services</NavLink>
                            <NavLink className="nav-item" to="/contact">Contact</NavLink>

                            {user.email? <div>
                                <button onClick={logOutAuth} className="button-color ms-2" to="/login">Login out</button> <span>{user?.displayName}</span>
                            </div>    
                            : <NavLink className="button-color ms-2" to="/login">Login</NavLink>}
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
            
        </>
    );
};

export default Header;