
import { Box, Image } from '@chakra-ui/react'

const Logo = (props) => {
  return (
    <Box {...props}>
        <Image width={70} height= {70} src='/road_bike.svg'></Image>
    </Box>
  )
};

export default Logo;
