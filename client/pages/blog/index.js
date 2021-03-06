import { useEffect, useState } from "react";
import { Center, SimpleGrid } from "@chakra-ui/react";

import Posts from '../../components/BlogComps/Posts'
import PostLoadingComponent from '../../components/BlogComps/PostLoading'

function BlogList() {
  const PostLoading = PostLoadingComponent(Posts);
  const [BlogListState, setBlogListState] = useState({
    loading: false,
    posts: null,
  });

  useEffect(() => {
    setBlogListState({loading: true });
    const apiURL = 'https://hidden-caverns-99891.herokuapp.com/https://caarnportfolio.herokuapp.com/api';
    fetch(apiURL)
      .then((data) => data.json())
      .then((posts) => {
        setBlogListState({loading: false, posts: posts });
      });
  }, [setBlogListState]);
  return (
    <Center mt={200} marginLeft={30} marginRight ={30}>
      <SimpleGrid minChildWidth='350px' spacing='100px'>
        <PostLoading isloading={BlogListState.loading} posts={BlogListState.posts} />
      </SimpleGrid>
    </Center>
  );
}

export default BlogList;