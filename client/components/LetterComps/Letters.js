import { Flex } from '@chakra-ui/react';
import SvgLettersFire from './/SvgLettersFire'
import SvgLettersWaves from './/SvgLettersWaves'

const Letters = ({ toggleDark}) => {
  
return (
  
    <Flex justifyContent='center' height={500}>
        {toggleDark ?  <SvgLettersWaves/> : <SvgLettersFire/> }
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













