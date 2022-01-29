import React, { useState } from 'react';
import {  Link } from '@chakra-ui/react';
// import { useColorMode } from '@chakra-ui/react';

import NavBarContainer from "./NavbarSubComps/NavBarContainer";
import MenuToggle from './NavbarSubComps/MenuToggle';
import MenuLinks from './NavbarSubComps/MenuLinks';
import Logo from './Logo';

const Navbar = ({toggleColorMode, toggle, toggleDark}) => {

  const [isOpen, setIsOpen] = useState(false);
  // const { toggleColorMode } = useColorMode();

  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <NavBarContainer >
      <Link href='/'><Logo/></Link>
      <MenuToggle toggleMenu={toggleMenu} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} toggleColorMode={toggleColorMode} toggle={toggle} toggleDark={toggleDark} />
    </NavBarContainer>
    )
};

export default Navbar;
