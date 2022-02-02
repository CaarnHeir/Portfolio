import { useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react'

import styles from '../styles/Layout.module.css'
import Footer from './Footer';
import Navbar from './Navbar'


const Layout = ({ children }) => {
  const { toggleColorMode } = useColorMode()
  const  [toggleDark, setIsDark] = useState(false)
  const toggle = () => setIsDark(!toggleDark)

  return (
  <div className={styles.flex_wrapper}>
    <Navbar toggleColorMode={toggleColorMode} toggle={toggle} toggleDark ={toggleDark}/>
        {/* { children } */}
        { React.cloneElement(children, {
          toggleColorMode: toggleColorMode,
          toggle: toggle,
          toggleDark: toggleDark,
        })}
    <Footer/>
  </div>
  )
};

export default Layout;