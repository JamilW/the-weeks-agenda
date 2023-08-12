import React from 'react'

type PostProps = {
    title: string;
    excerpt: string;
};

const PostCard: React.FunctionComponent<PostProps> = ( props: PostProps ) =>    {
    
    return (
        <div >
            {props.title} , {props.excerpt}
        </div>
  )
}

export default PostCard

