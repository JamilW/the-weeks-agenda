import React from 'react'

type PostProps = {
    title: string;
    excerpt: string;
};

const PostCard: React.FunctionComponent<PostProps> = ( props: PostProps ) =>    {
    
    // const { ...PostProps } = post

    return (
        <div >
            {props.title} , {props.excerpt}
        </div>
  )
}

export default PostCard

// import React from 'react'

// interface PostProps {
//     data:   {
//         title: string;
//         excerpt: string;
//     }
// }

// function Post({data}: PostProps) {
//     return  (
//         <div>
//             [
//                 {data.title},{data.excerpt};
//                 {data.title},{data.excerpt};
                
//             ]   
//         </div>
//     );
// }

// const PostCard = () => {
//   return (
//     <div><Post /></div>
//   )
// }

// export default PostCard