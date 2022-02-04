import { Box, Center, SimpleGrid, GridItem, HStack, Button, Container, VStack } from '@chakra-ui/react'
import { DiMongodb, DiReact, DiNodejs  } from "react-icons/di"
import { SiExpress } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'

const Portfolio = () => {
  const application_repo = {

  }
  const Portfolio = {

  }
  const ERP = {

  }
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    title: 'Application Tracking App',

  }

  return (
    <Center  h='500px'>
      <SimpleGrid  spacing='70px' columns={[2, null, 3]}  >
          <GridItem>
            <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <video autoPlay loop muted>
                  <source src='./videos/Application_Tracker_Video_Loop.mp4' type='video/mp4'/>
                </video>
              <Box p='7'>
                <Box display='flex' alignItems='baseline'>
                  <Box
                    color='gray.400'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='sm'
                    textTransform='uppercase'
                    w='100%'
                    display='flex'
                    alignItems='center'
                    justifyContent='space-evenly'
                  >
                     <DiMongodb/>MongoDB &bull; <SiExpress/>Express &bull; <DiReact/>React &bull;<DiNodejs/>Node
                  </Box>
                </Box>
              <Box
                mt='4'
                ml='3'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
              >
                {property.title}
              </Box>
              <HStack mt='4' ml='2'>
                <a href='https://github.com/CaarnHeir/Application_Repo'>
                  <Button leftIcon={<FaGithub />}>
                    GitHub
                  </Button>
                </a>
                <Button leftIcon={<CgWebsite />}>
                  Live Site
                </Button>
              </HStack>  
            </Box>
          </Box>
          </GridItem>
          <GridItem>
            <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <video autoPlay loop muted>
                  <source src='./videos/Application_Tracker_Video_Loop.mp4' type='video/mp4'/>
                </video>
              <Box p='7'>
                <Box display='flex' alignItems='baseline'>
                  <Box
                    color='gray.400'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='sm'
                    textTransform='uppercase'
                    w='100%'
                    display='flex'
                    alignItems='center'
                    justifyContent='space-evenly'
                  >
                     <DiMongodb/>MongoDB &bull; <SiExpress/>Express &bull; <DiReact/>React &bull;<DiNodejs/>Node
                  </Box>
                </Box>
              <Box
                mt='4'
                ml='3'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
              >
                {property.title}
              </Box>
              <HStack mt='4' ml='2'>
                <a href='https://github.com/CaarnHeir/Application_Repo'>
                  <Button leftIcon={<FaGithub />}>
                    GitHub
                  </Button>
                </a>
                <Button leftIcon={<CgWebsite />}>
                  Live Site
                </Button>
              </HStack>  
            </Box>
          </Box>
          </GridItem>
          <GridItem>
            <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <video autoPlay loop muted>
                  <source src='./videos/Application_Tracker_Video_Loop.mp4' type='video/mp4'/>
                </video>
              <Box p='7'>
                <Box display='flex' alignItems='baseline'>
                  <Box
                    color='gray.400'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='sm'
                    textTransform='uppercase'
                    w='100%'
                    display='flex'
                    alignItems='center'
                    justifyContent='space-evenly'
                  >
                     <DiMongodb/>MongoDB &bull; <SiExpress/>Express &bull; <DiReact/>React &bull;<DiNodejs/>Node
                  </Box>
                </Box>
              <Box
                mt='4'
                ml='3'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
              >
                {property.title}
              </Box>
              <HStack mt='4' ml='2'>
                <a href='https://github.com/CaarnHeir/Application_Repo'>
                  <Button leftIcon={<FaGithub />}>
                    GitHub
                  </Button>
                </a>
                <Button leftIcon={<CgWebsite />}>
                  Live Site
                </Button>
              </HStack>  
            </Box>
          </Box>
          </GridItem>
      </SimpleGrid>
    </Center>
  )
};

export default Portfolio;
