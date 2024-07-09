import { CustomMDX } from '@/components/mdx';
import { getBlogPosts } from '@/lib/db';

export default async function Page({ params }: { params: { blogSlug: string }}) {
    
    const blog = getBlogPosts().find((blog) => blog.slug === params.blogSlug)

    if (!blog) throw new Error();

    return (
        <article className="prose prose-quoteless prose-neutral dark:prose-invert">
            <CustomMDX source={blog?.content} />
        </article>
    )
}



