import { Link, Box, Image, VStack, StackDivider } from "@chakra-ui/react";


const Posts = (props) => {
    const { posts } = props;
    console.log(posts);
    
    if (!posts || posts.length === 0) return <p>Cannot find any posts, apologies</p>;
    return (
        <>
            {posts.map((post) =>{
                return(
                    <Link href={`/blog/${post.id}`}>
                    <Box borderWidth='3px' borderRadius='lg' overflow='hidden'>
                        <Image src='/Blogpost1.png' maxHeight='300px' maxWidth='1000px'/>

                        <Box p='6'>
                            <VStack  spacing={4} marginLeft='5%' marginRight='5%'>
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
                                {post.published}
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
                            </VStack>
                        </Box>
                    </Box>
                </Link>
                )
            })}
            </>
        
    )
}

export default Posts;