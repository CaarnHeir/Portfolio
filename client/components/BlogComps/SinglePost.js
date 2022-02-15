import { Center, Box, Image, VStack, StackDivider } from "@chakra-ui/react"
import parse from 'html-react-parser'


export const SinglePost = ({post}) => {
    
  return (
    <Center mt={200}>
        <Box borderWidth='3px' borderRadius='lg' overflow='hidden' marginLeft='10%' marginRight='10%'>
          <Center>
            <Image src={post && post.image} />
            </Center>
            <Box p='6'>
            <VStack divider={<StackDivider borderColor='gray.200'/>} spacing={4} marginLeft='5%' marginRight='5%'>
              {/* <Box display='flex' > */}
                <Box
                mt='1'
                fontWeight='bold'
                as='h1'
                lineHeight='tight'
                isTruncated
                >
                    {post && post.title}
                </Box>  
                <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                >
                {post && post.published}
                </Box>
                <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='sm'
                    textTransform='uppercase'
                    ml='2'
                >
                {post && parse(post.content)}
                </Box>
              {/* </Box> */}
            </VStack>
          </Box>

      </Box>
        
    </Center>
  )
}
