import { Center, Image } from "@chakra-ui/react";

const HeadShot = () => {
  return (
      <Center h = '500px' marginTop='200px'>
          <Image src='/Headshot.jpg' borderRadius='full' boxSize='400px'/>
      </Center>
  )
};

export default HeadShot;
