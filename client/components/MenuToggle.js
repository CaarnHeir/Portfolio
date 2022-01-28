// import React from 'react';
import { Box } from "@chakra-ui/react"
// import { CloseIcon, MenuIcon } from 'react-icons'

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <img src='/sun.svg'/>}
    </Box>
  )
};

export default MenuToggle;

