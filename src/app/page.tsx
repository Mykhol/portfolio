import { Badge } from '@/components/badge';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <section className='flex flex-col gap-4'>
      {/* <PreloadResources /> */}
      <h1 className="text-2xl font-medium tracking-tighter">
        Hey, I'm Michael 👋
      </h1>
      <div className='flex gap-4'>
        <div className="relative mb-4 aspect-square h-[300px]">
          <Image
            alt="A headshot of me"
            src={"/headshot.jpg"}
            fill
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a software engineer, student, tinkerer and optimist. I currently work at `}<Link href={'https://generatezero.com'} className='underline font-bold'>Generate Zero</Link>{` as a senior software engineer, we create tools for businesses to build a better picture of their environmental impact and work to reduce their emissions. I'm also in my penultimate year of an engineering honours degree in computer systems engineering at the University of Auckland.`}
      </p>
      

      
    </section>
  );
}