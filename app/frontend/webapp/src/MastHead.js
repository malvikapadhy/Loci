import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ReactComponent as LogoIcon} from "./logo-wt-bl.svg";
import React from "react";

const MastHead = () => {
    return (
        <Navbar style={{backgroundColor: "#0076ce"}} expand="lg">
            <Navbar.Brand style={{color: "white"}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <LogoIcon height={40} width={40}/>
                    &nbsp;

                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" href="/" style={{color: "white"}}>
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/rewards" href="/rewards" style={{color: "white"}}>
                        Rewards
                    </Nav.Link>

                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link as={Link}  style={{color: "white"}}>
                        Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MastHead;