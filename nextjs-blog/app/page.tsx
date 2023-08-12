import Head from 'next/head';
import { PostCard, PostWidget, Categories } from '../components';
import { title } from 'process';

const posts = [
  { title: 'It Was Written Better Than Illmatic?', excerpt: 'Nasty Nas vs. Nas Escobar' },
  { title: 'Is Busta Rhymes A Top 10 MC?', excerpt: 'Busta Top 10 Status' },
];

export default function Home() {
  console.log(posts);
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>The Weeks Agenda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post) => <PostCard {...post} key={post.title} />)} 
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
      </div>
    </div>
      
    </div>    
  )
}
