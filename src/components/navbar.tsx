import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';

/**
 * Palindrome checker navbar
 */
const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Medal React Code Project</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                href="https://github.com/engyn/medal-palindrome"
                target="_blank"
              >
                My GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
