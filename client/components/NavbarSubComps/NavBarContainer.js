import {Flex} from '@chakra-ui/react'

const NavBarContainer = ({ children, ...props }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        mt={4}
        position='fixed'
        // bg={['blue.700', 'blue.700', 'blue.700', 'teal.700']}
        // border='1px' 
        // borderColor='blue.700'
        p={2}
        // color={["black", "black", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    )
  };

export default NavBarContainer;