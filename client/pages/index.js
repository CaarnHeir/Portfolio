import styles from '../styles/Home.module.css'
import Letters from '../components/LetterComps/Letters'
import Blurb from '../components/BlurbComps/Blurb'
import Portfolio from '../components/PortfolioComps/Portfolio'
import ContactMe from '../components/ContactMeComps/ContactMe'
import {  Center, Skeleton, Flex } from '@chakra-ui/react'

export default function Home({toggleDark}) {
  return (
    <>
    <Center margin='10px' position='static'>
      <Letters toggleDark={toggleDark} />
    </Center>
    <Center h='200px'></Center>
    <Skeleton startColor='gray.400' endColor='#1A202C' height='20px'  justifyContent='center' fadeDuration='.01' speed='5'/>
    <Blurb toggleDark={toggleDark}/>
    <Skeleton startColor='gray.400' endColor='#1A202C' height='20px'  justifyContent='center' fadeDuration='.01' speed='5'/>
    <Center h='200px'>
      <Flex fontFamily='Montserrat' fontSize={60} fontWeight='bold'>PORTFOLIO:</Flex>
    </Center>
    <Portfolio/>
    <Skeleton startColor='gray.400' endColor='#1A202C' height='20px'  justifyContent='center' fadeDuration='.01' speed='5'/>
    <Center h='200px'>
      <Flex fontFamily='Montserrat' fontSize={60} fontWeight='bold'>CONTACT ME:</Flex>
    </Center>
    <ContactMe />
    </>
  )

}
