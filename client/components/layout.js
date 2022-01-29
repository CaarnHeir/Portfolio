import { useColorMode } from '@chakra-ui/react';
import { useState } from 'react'

import Footer from './Footer';
import Navbar from './Navbar'


const Layout = ({ children }) => {
  const { toggleColorMode } = useColorMode()
  const  [toggleDark, setIsDark] = useState(false)
  const toggle = () => setIsDark(!toggleDark)

  return (
  <div>
    <Navbar toggleColorMode={toggleColorMode} toggle={toggle} toggleDark ={toggleDark}/>
        { children }
    <Footer/>
  </div>
  )
};

export default Layout;