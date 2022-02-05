
import { Box, Avatar} from '@chakra-ui/react'

const Logo = (props) => {
  return (
    <Box {...props} ml='10px'>
        <Avatar size='md' name='Caarn Heir' src='.\Headshot.jpg' showBorder='true' borderColor='white' />
    </Box>
  )
};

export default Logo;
