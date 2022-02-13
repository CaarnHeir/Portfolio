import React from 'react'
import { Center, Spinner } from '@chakra-ui/react'

function SinglePostLoading(Component, isLoading) {
  return function SinglePostLoadingComponent({isloading, ...props}){
      if (!isLoading) return  <Component {...props}/>;
      return(
          <Center mt={200}>
            <Spinner color='red.500' size='xl' />
          </Center>
      );
  };
}

export default SinglePostLoading;