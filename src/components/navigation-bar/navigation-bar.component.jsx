import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar-dark bg-dark" light expand="md">
                <NavbarBrand href="/">Logo</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto px-2" navbar>
                    <NavItem>
                    <NavLink href="/">Nutrition Values</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/">Food Info</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink href="/">Recipes</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar;