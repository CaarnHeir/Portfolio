import { color, Flex, useColorModeValue } from '@chakra-ui/react';
import SvgLettersFire from './/SvgLettersFire'
import SvgLettersWaves from './/SvgLettersWaves'

const Letters = ({ toggleDark }) => {
    const colortoggle = useColorModeValue('white','gray.800')
return (
    <Flex justifyContent='center' height={500} mt='200px' position='static'>
        {colortoggle==='gray.800' ?    <SvgLettersFire/> : <SvgLettersWaves/> }
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





{/* <Flex justifyContent='center' height={500} mt='200px' position='static'>
        {toggleDark ?    <SvgLettersFire/> : <SvgLettersWaves/> }
    </Flex> */}







