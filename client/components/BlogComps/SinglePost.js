import { Center } from "@chakra-ui/react"
import React, {useState, useEffect} from 'react'


export const SinglePost = ({post}) => {
    // const { post } = props;
    
  return (
    <Center mt={200}>
        {post && post.title}
        
    </Center>
  )
}
