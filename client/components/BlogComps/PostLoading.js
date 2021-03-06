import React from 'react'
import { Center, Spinner } from '@chakra-ui/react'

function PostLoading(Component, isLoading) {
  return function PostLoadingComponent({isloading, ...props}){
      if (!isLoading) return  <Component {...props}/>;
      return(
          <Center mt={200}>
            <Spinner color='red.500' size='xl' />
          </Center>
      );
  };
}

export default PostLoading;