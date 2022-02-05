import { Center, Flex, Skeleton } from '@chakra-ui/react';
import ToolsIUse from '../components/ResumeComps/ToolsIUse'
import HeadShot from '../components/ResumeComps/HeadShot'


const resume = () => {
  return (
  <>
  <HeadShot/>
  <Skeleton startColor='gray.400' endColor='#1A202C' height='20px'  justifyContent='center' fadeDuration='.01' speed='5'/>
  <Center h='100px'>
      <Flex fontFamily='Montserrat' fontSize={60} fontWeight='bold'>TOOLS I USE:</Flex>
    </Center>
  <ToolsIUse />
  <Skeleton startColor='gray.400' endColor='#1A202C' height='20px'  justifyContent='center' fadeDuration='.01' speed='5'/>

  </>
  )
};

export default resume;