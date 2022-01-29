import { Flex, Image } from '@chakra-ui/react';
import React, {useState} from 'react';

const Letters = ({ toggleDark}) => {
  
return (
  
    <Flex justifyContent='center'>
        {toggleDark ?  <Image width={70} height={50} src='/sun.svg'/>: <Image width={70} height={50} src='/moon.svg'/>}
    </Flex>
)
};













//     <Flex justifyContent='center'>
//         <Image width= {500} height={500} src ='/C.svg' bgClip='/Waves.mp4'/>
//         <Image width= {500} height={500} src ='/H.svg'/>
//     
//   )
// };

export default Letters;













