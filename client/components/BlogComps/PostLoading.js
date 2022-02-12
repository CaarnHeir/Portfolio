import React from 'react'

function PostLoading(Component, isLoading) {
  return function PostLoadingComponent({isloading, ...props}){
      if (!isLoading) return  <Component {...props}/>;
      return(
          <h1>DATA IS STILL LOADING</h1>
      );
  };
}

export default PostLoading;