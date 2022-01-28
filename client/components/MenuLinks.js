// import React from 'react';
import { Stack, Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';

import MenuItem from './MenuItem'

const MenuLinks = ({ isOpen }) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }}>
    <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
    >
    <MenuItem to="/resume">Resume</MenuItem>
    <MenuItem to="/blog">Blog</MenuItem>
    <button onClick={toggleColorMode}><Image width={70} height={50} src='/moon.svg'/></button>
    </Stack>
    </Box>
  )
};

export default MenuLinks;
