// import React from 'react';
import { Box, IconButton } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
// import { CloseIcon, MenuIcon } from 'react-icons'

const MenuToggle = ({ toggleMenu, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
      {isOpen ?  <IconButton icon= {<CloseIcon/>}/>: <IconButton icon= {<HamburgerIcon/>}/>}
    </Box>
  )
};

export default MenuToggle;

