import { Stack, Box} from '@chakra-ui/react'


import MenuItem from './MenuItem'
import DarkMode from './DarkMode';

const MenuLinks = ({ isOpen,toggleColorMode, toggle, toggleDark }) => {

  

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
    <DarkMode toggleColorMode={toggleColorMode} toggle={toggle} toggleDark ={toggleDark}/>
    </Stack>
    </Box>
  )
};

export default MenuLinks;
