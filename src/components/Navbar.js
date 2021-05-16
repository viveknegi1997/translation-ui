
import React from "react";

import {

    Navbar,
    Nav,
} from 'react-bootstrap';


function MainNavbar() {

    return <Navbar expand="lg" className="mainNavBar">
            <Nav.Link href="#home" className="mainNavBar">Home</Nav.Link>
            <Nav.Link href="#aboutus" className="mainNavBar">About Us</Nav.Link>
            <Nav.Link href="#contactus" className="mainNavBar">Contact Us</Nav.Link>
        </Navbar>
   
}
export default MainNavbar;
