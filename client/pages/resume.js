import { Center, Flex, Skeleton } from '@chakra-ui/react'

import ToolsIUse from '../components/ResumeComps/ToolsIUse'
import HeadShot from '../components/ResumeComps/HeadShot'
import ResumeTimeline from '../components/ResumeComps/ResumeTimeline'
import AboutMe from '../components/ResumeComps/AboutMe'
import styles from '../styles/Resume.module.css'


const resume = () => {
  return (
  <>
  <HeadShot/>
  <Skeleton startColor='gray.400' endColor='#1A202C' height='20px'  justifyContent='center' fadeDuration='.01' speed='5'/>
  <Center h='100px' marginTop='30px'>
      <Flex className={styles.header} fontFamily='Montserrat'  fontWeight='bold'>TOOLS I USE:</Flex>
    </Center>
  <ToolsIUse />
  <Skeleton startColor='gray.400' endColor='#1A202C' height='20px'  justifyContent='center' fadeDuration='.01' speed='5'/>
  <Center h='100px' marginTop='50px'>
      <Flex className={styles.header} fontFamily='Montserrat' fontWeight='bold' marginBottom='50px'>WORK HISTORY:</Flex>
    </Center>
  <ResumeTimeline />
  <Skeleton startColor='gray.400' endColor='#1A202C' height='20px'  justifyContent='center' fadeDuration='.01' speed='5'/>
  <Center h='100px' marginTop='30px'>
      <Flex className={styles.header} fontFamily='Montserrat' fontWeight='bold'>ABOUT ME:</Flex>
    </Center>
  <AboutMe />
  </>
  )
};

export default resume;