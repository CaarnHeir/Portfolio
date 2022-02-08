import { Center, Image, Flex, VStack } from "@chakra-ui/react";
import styles from '../../styles/HeadShot.module.css'

const HeadShot = () => {
  return (
      <Center  marginTop='200px' marginBottom='100px'>
          <VStack>
          <Image className={styles.image} src='/Headshot.jpg'/>
          <Flex className={styles.name}>CAARN HEIR</Flex>
          </VStack>
      </Center>
  )
};

export default HeadShot;
