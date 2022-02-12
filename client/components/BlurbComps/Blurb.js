import {Image, Center, Container, Flex, useColorModeValue} from '@chakra-ui/react'

const Blurb = ({ toggleDark }) => {
  const colortoggle = useColorModeValue('white','gray.800')
  return (
    
    <Center  h='700px'  alignItems='center' justifyContent='space-between' >
      <Flex>
        { colortoggle==='gray.800' ? <Image src='./open_bracket_white.png'/> : <Image src='./open_bracket_black.png'/> }
      </Flex>
      <Container fontFamily='Montserrat' fontSize={25} fontWeight='bold'>I am a fullstack engineer in the pursuit of innovative technologial endevours. My background in Procurement and Consulting provides me with a unique perspective on web/application development.</Container>
      <Flex>
        { colortoggle==='gray.800' ? <Image src='./open_bracket_white_right.png'/> : <Image src='./open_bracket_black_right.png'/> }
      </Flex>
    </Center>
  )
};

export default Blurb;
