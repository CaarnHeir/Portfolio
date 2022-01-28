// import { useColorMode } from "@chakra-ui/react";
import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

import NavBarContainer from "./NavBarContainer";
import MenuToggle from './MenuToggle';
import MenuLinks from './MenuLinks';
import Logo from './Logo';

const Navbar = (props) => {
  const { toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen)
  const handleClick = () => setToggleColorMode(!toggleColorMode)
  return (
    <NavBarContainer {...props}>
      <Logo/>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <button onClick={toggleColorMode}><Image width={70} height={70} src='/moon.svg'/></button>
    </NavBarContainer>
    )
};

export default Navbar;
