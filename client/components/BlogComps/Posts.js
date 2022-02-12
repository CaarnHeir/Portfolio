import { Center, Box, Image } from "@chakra-ui/react";







const Posts = (props) => {
    const { posts } = props;
    console.log(posts);
    
    if (!posts || posts.length === 0) return <p>Cannot find any posts, apologies</p>;
    return (
        <Center mt={200}>

            {posts.map((post) =>{
                return(
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src={post.image} />

                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                            <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            isTruncated
                            >
                                {post.title}
                            </Box>  
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                {post.excerpt}
                                </Box>
                                <Box
                                    color='gray.500'
                                    fontWeight='semibold'
                                    letterSpacing='wide'
                                    fontSize='xs'
                                    textTransform='uppercase'
                                    ml='2'
                                >
                                {post.published}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
            
        </Center>
        
    )
}

export default Posts;