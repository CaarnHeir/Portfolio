import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'

import { SinglePost } from '../../components/BlogComps/SinglePost';
import SinglePostLoadingComponent from '../../components/BlogComps/SinglePostLoading';

function BlogPostPage() {
    const SinglePostLoading = SinglePostLoadingComponent(SinglePost);
    const router = useRouter()
    const { id } = router.query
    
    const [PostState, setPostState] = useState({
        loading: false,
        post: null,
      });

    useEffect(() => {
        if(!router.isReady) return;
        console.log('RUNNING');
        console.log(id)
        const apiURL = `https://caarnportfolio.herokuapp.com/api/` + id;
        fetch(apiURL)
          .then((data) => data.json())
          .then((post) => {
            setPostState({loading: false, post: post });
          });
    }, [router.isReady]);

    
    return(
           <SinglePostLoading isloading={PostState.loading} post={PostState.post}/>
    );
}

export default BlogPostPage;