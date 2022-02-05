import { Center, Flex, Image, AspectRatio } from '@chakra-ui/react';
import React from 'react';



const ToolsIUse = () => {
  return (
    <Center h='300px' >
        <Flex>
          <Image src='/python.png' height='100px' width='100px' />
          <Image src='/django.png' height='100px' width='100px' marginRight='10px'/>
          <Image src='/fastapi1.png' height='100px' width='100px'/>
          <Image src='/mongodb1.png' height='100px' width='100px' />
          <Image src='/nextjs.png' height='100px' width='200px'/>
          <Image src='/react1.png' height='100px' width='100px' />
          <Image src='/redux.png' height='100px' width='100px' />
          <Image src='/postgresql.png' height='100px' width='100px' />
          <Image src='/javascript.png' height='100px' width='100px'/>
          <Image src='/html.png' height='100px' width='100px' />
          <Image src='/css.png' height='100px' width='100px' />
        </Flex>
    </Center>
  )
};

export default ToolsIUse;
