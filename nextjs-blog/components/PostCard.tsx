import React from 'react'

type PostProps = {
    title: string;
    excerpt: string;
};

const PostCard: React.FunctionComponent<PostProps> = ( props: PostProps ) =>    {
    
    // const { ...PostProps } = post

    return (
        <div >
            {JSON.stringify(props)},
        </div>
  )
}

export default PostCard