// import { useColorMode } from "@chakra-ui/react";
import React, { useState } from 'react';
import {  Link } from '@chakra-ui/react';
// import { useColorMode } from '@chakra-ui/react';

import NavBarContainer from "./NavbarSubComps/NavBarContainer";
import MenuToggle from './NavbarSubComps/MenuToggle';
import MenuLinks from './NavbarSubComps/MenuLinks';
import Logo from './Logo';

const Navbar = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen)
  return (
    <NavBarContainer {...props}>
      <Link href='/'><Logo/></Link>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
    )
};

export default Navbar;
