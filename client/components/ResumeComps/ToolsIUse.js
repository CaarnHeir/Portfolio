import { Center, WrapItem, Image, Wrap } from '@chakra-ui/react';
import React from 'react';



const ToolsIUse = () => {
  return (
    <Center marginBottom='100px' >
        <Wrap>
          <WrapItem>
            <Image src='/python.png' height='100px' width='100px' />
          </WrapItem>
          <WrapItem>
            <Image src='/django.png' height='100px' width='100px' marginRight='10px'/>
          </WrapItem>
          <WrapItem>
            <Image src='/fastapi1.png' height='100px' width='100px'/>            
          </WrapItem>
          <WrapItem>
            <Image src='/mongodb1.png' height='100px' width='100px' />           
          </WrapItem>
          <WrapItem>
            <Image src='/nextjs.png' height='100px' width='200px'/>          
          </WrapItem>
          <WrapItem>
            <Image src='/react1.png' height='100px' width='100px' />         
          </WrapItem>
          <WrapItem>
            <Image src='/redux.png' height='100px' width='100px' />      
          </WrapItem>
          <WrapItem>
            <Image src='/postgresql.png' height='100px' width='100px' />
          </WrapItem>
          <WrapItem>
            <Image src='/javascript.png' height='100px' width='100px'/>
          </WrapItem>
          <WrapItem>
            <Image src='/html.png' height='100px' width='100px' />
          </WrapItem>
          <WrapItem>
            <Image src='/css.png' height='100px' width='100px' />
          </WrapItem>
        </Wrap>
    </Center>
  )
};

export default ToolsIUse;
