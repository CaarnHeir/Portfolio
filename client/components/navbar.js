// import { useColorMode } from "@chakra-ui/react";
import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';

import NavBarContainer from "./NavBarContainer";
import MenuToggle from './MenuToggle';
import MenuLinks from './MenuLinks';
import Logo from './Logo';

const Navbar = (props) => {
  // const { toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen)
  
  return (
    <NavBarContainer {...props}>
      <Logo/>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <Image width={70} height={70} src='/moon.svg'/>
    </NavBarContainer>)
  
};

export default Navbar;
