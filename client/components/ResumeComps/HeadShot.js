import { Center, Image, Flex, VStack } from "@chakra-ui/react";

const HeadShot = () => {
  return (
      <Center h = '500px' marginTop='200px' marginBottom='200px'>
          <VStack>
          <Image src='/Headshot.jpg' borderRadius='full' boxSize='400px'/>
          <Flex fontFamily='Montserrat' fontSize={150} fontWeight='bold' marginRight='30px'>CAARN HEIR</Flex>
          </VStack>
      </Center>
  )
};

export default HeadShot;
