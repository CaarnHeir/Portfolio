import styles from '../styles/Home.module.css'
import Letters from '../components/LetterComps/Letters'
import Blurb from '../components/BlurbComps/Blurb'
import Portfolio from '../components/PortfolioComps/Portfolio'
import ContactMe from '../components/ContactMeComps/ContactMe'
import {  Center, Grid, GridItem, VStack } from '@chakra-ui/react'

export default function Home({toggleDark}) {
  return (
    // <>
    // <div display='block' className={styles.LetterDiv}>
    //   <Letters toggleDark={toggleDark} />
    // </div>
    
    // </>
    <>
    <Center margin='10px'>
      <Letters toggleDark={toggleDark} />
    </Center>
    <Blurb/>
    <Portfolio/>
    <ContactMe />
    </>
  )

}
