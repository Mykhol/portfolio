import { getBlogPosts } from '@/lib/db';
import Link from 'next/link';


export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Welcome to my brain dump 📖
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col gap-2">
                
                
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-bold">
                {post.metadata.title}
              </p>
              
              
              <p className='italic'>{post.metadata.summary}</p>

              <p className='italic text-xs'>{new Date(post.metadata.publishedAt).toDateString()}</p>
            </div>

          </Link>
        ))}
    </section>
  );
}