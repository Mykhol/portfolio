import { Suspense } from 'react';
import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import Image from 'next/image';



export default function Page() {
  return (
    <section>
      {/* <PreloadResources /> */}
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hey, I'm Michael 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a software engineer, student, tinker and optimist. `}
        
        {`I currently work part-time at Generate Zero as a senior software engineer, we create software for businesses to build a better picture of their environmental impact. `}

        {`I also study computer systems engineering at the University of Auckland. `}
      </p>
    </section>
  );
}