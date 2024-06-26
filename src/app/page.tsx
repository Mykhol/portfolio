import { Badge } from '@/components/badge';
import Image from 'next/image';
import Link from 'next/link';



export default function Page() {
  return (
    <section>
      {/* <PreloadResources /> */}
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">
        Hey, I'm Michael 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a software engineer, student, tinkerer and optimist. I currently work part-time at Generate Zero`}
        {/* <span className="not-prose">
          <Badge href="https://generatezero.com">
            <Image src={"/generate-zero.svg"} alt={''} width={"50"} height={"11"} className='dark:hidden'/>
            <Image src={"/generate-zero-white.svg"} alt={''} width={"75"} height={"11"} className='dark:block'/>
          </Badge> 
        </span> */}
        {` as a senior software engineer, we create software for businesses to build a better picture of their environmental impact. I also study computer systems engineering at the University of Auckland.`}
      </p>
      <div className="my-8 columns-2 gap-4 sm:columns-3">
        <div className="relative mb-4 h-40">
          <Image
            alt="A headshot of me"
            src={"/headshot.jpg"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        {/* <div className="relative mb-4 h-80 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            src={"https://leerob.io/og"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:mb-4 sm:h-80">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            src={"https://leerob.io/og"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative mb-4 h-40 sm:mb-0">
          <Image
            alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
            src={"https://leerob.io/og"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative mb-4 h-40">
          <Image
            alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
            src={"https://leerob.io/og"}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My badge on top of a pile of badges from a Vercel meetup we held"
            src={"https://leerob.io/og"}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div> */}
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm passionate about safe, sclable software architecture, that helps make building scalable software easier and more sustainable.
        </p>
      </div>
      {/* <div className="my-8 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <ChannelLink
          img={avatar}
          name="@leerob"
          link="https://www.youtube.com/@leerob"
        />
        <ChannelLink
          img={vercel}
          name="@vercel"
          link="https://www.youtube.com/@vercelhq"
        />
      </div> */}
      {/* <div className="prose prose-neutral dark:prose-invert">
        <p>
          Over the past decade, I've written content on my blog and newsletter.
          I try to keep things simple. You'll find writing about technologies
          I'm interested in at the time, or how I'm learning and growing in my
          career, sharing knowledge along the way.
        </p>
      </div> */}
      {/* <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="What Makes A Great Developer Experience?"
          slug="developer-experience-examples"
        />
        <BlogLink name="What is Developer Relations?" slug="devrel-at-vercel" />
        <BlogLink name="The Story of Heroku" slug="heroku" />
      </div> */}
      {/* <div className="prose prose-neutral dark:prose-invert">
        <p>
          I invest small angel checks into early stage startups building tools
          for developers.
        </p>
      </div> */}
      {/* <div className="my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto">
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://linear.app">
            <svg width="78" height="20" role="img" aria-label="Linear logo">
              <use href="/sprite.svg#linear" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://supabase.com">
            <svg width="100" height="19" role="img" aria-label="Supabase logo">
              <use href="/sprite.svg#supabase" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce">
            <svg width="96" height="19" role="img" aria-label="Makeswift logo">
              <use href="/sprite.svg#makeswift" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://resend.com">
            <svg width="70" height="17" role="img" aria-label="Resend logo">
              <use href="/sprite.svg#resend" />
            </svg>
          </a>
        </div>
        <div className="flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800">
          <a href="https://bun.sh">
            <svg width="35" height="27" role="img" aria-label="Bun logo">
              <use href="/sprite.svg#bun" />
            </svg>
          </a>
        </div>
      </div> */}
      {/* <div className="prose prose-neutral dark:prose-invert">
        <p>
          I've worked with and advised companies on{' '}
          <Link href="/blog/developer-marketing">developer marketing</Link>,{' '}
          <Link href="/blog/devrel-at-vercel">developer relations</Link>,
          building open-source communities, product-led growth, and more.
        </p>
      </div> */}
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {/* <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/leeerob"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me</p>
          </a>
        </li> */}
        {/* <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://leerob.substack.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">get email updates</p>
          </a>
        </li> */}
      </ul>
    </section>
  );
}