import { Box, Image } from "@chakra-ui/react"

const DarkMode = ({ toggleColorMode, toggle, toggleDark }) => {
    
  return (
    <Box display={{ base: "block" }} onClick={toggleColorMode}>
        <Box onClick= {toggle}>
      {toggleDark ?  <Image width={70} height={50} src='/sun.svg'/>: <Image width={70} height={50} src='/moon.svg'/>}
      </Box>
    </Box>
  )
};

export default DarkMode;

