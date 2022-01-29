// import React from 'react';
import { Box, Image } from "@chakra-ui/react"
import { useState } from 'react'

const DarkMode = ({ toggleColorMode }) => {
    const  [toggleDark, setIsDark] = useState(false)

    const toggle = () => setIsDark(!toggleDark)

  return (
    <Box display={{ base: "block" }} onClick={toggleColorMode}>
        <Box onClick= {toggle}>
      {toggleDark ?  <Image width={70} height={50} src='/sun.svg'/>: <Image width={70} height={50} src='/moon.svg'/>}
      </Box>
    </Box>
  )
};

export default DarkMode;

