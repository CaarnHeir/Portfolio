import { Box, Center,HStack, Button, Image } from '@chakra-ui/react'
import { DiMongodb, DiReact, DiNodejs, DiDjango  } from "react-icons/di"
import { SiExpress, SiPostgresql } from 'react-icons/si'
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

  // columns={[2, null, 3]} 

  return (
    <Center marginBottom= '80px'>
      <HStack spacing={10}>
      {/* <SimpleGrid  spacing='40px' minChildWidth={450} columns={2}> */}
          {/* <GridItem> */}
            <Box maxW='md'  maxH= 'md' minHeight='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                

                <video autoPlay loop muted  >
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
                <a href='https://github.com/CaarnHeir/Application_Repo' target='_blank'>
                  <Button leftIcon={<FaGithub />}>
                    GitHub
                  </Button>
                </a>
                <a href='https://applicationtrackerlive.netlify.app/' target='_blank'>
                <Button leftIcon={<CgWebsite />}>
                  Live Site
                </Button>

                </a>
              </HStack>  
            </Box>
          </Box>
          {/* </GridItem> */}
          {/* <GridItem> */}
            <Box maxW='md' maxH= 'md' minHeight='md' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <video autoPlay loop muted >
                  <source src='./videos/portfolio.mp4' type='video/mp4'/>
                </video>
              <Box p='7' alignItems='end' >
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
                    marginTop='62px'
                  >
                     <SiPostgresql/>Postgresql &bull; <DiDjango/>Django &bull; NEXT.JS &bull; Chakra UI
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
                Portfolio Website 
              </Box>
              <HStack mt='4' ml='2'>
                <a href='https://github.com/CaarnHeir/Portfolio' target='_blank'>
                  <Button leftIcon={<FaGithub />}>
                    GitHub
                  </Button>
                </a>
                
              </HStack>  
            </Box>
          </Box>
          {/* </GridItem> */}
          {/* <GridItem> */}
            <Box maxW='md' maxH= 'md' minHeight='md'  borderWidth='1px' borderRadius='lg' overflow='hidden'>
                {/* <video autoPlay loop muted>
                  <source src='./videos/Application_Tracker_Video_Loop.mp4' type='video/mp4'/>
                </video> */}
                <Image src='/comingsoon.jpg' maxHeight='287.33px'/>
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
                     <DiMongodb/>MongoDB &bull; Fast API &bull; NEXT.JS &bull; Chakra UI
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
                ERP System with Optimization
              </Box>
              <HStack mt='4' ml='2'>
                <a href='https://github.com/CaarnHeir/' target='_blank'>
                  <Button leftIcon={<FaGithub />}>
                    GitHub
                  </Button>
                </a>
                {/* <Button leftIcon={<CgWebsite />}>
                  Live Site
                </Button> */}
              </HStack>  
            </Box>
          </Box>
          {/* </GridItem> */}
      {/* </SimpleGrid> */}
      </HStack>
    </Center>
  )
};

export default Portfolio;
