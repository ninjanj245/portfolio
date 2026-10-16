import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const queenieAssets = {
  hero: "/queenie/layout_queenie_1.jpg",
  wideOne: "/queenie/layout_queenie_2.png",
  wideTwo: "/queenie/layout_queenie_3.png",
  wideThree: "/queenie/queenie_5_05.png",
  wideFour: "/queenie/queenie_titles_6.webp",
  phoneLeft: "/queenie/queenie-phone mockup 1.png",
  phoneRight: "/queenie/queenie phone 2.png",
  backIcon: "/Arrow left-circle.png",
} as const;

function ProjectImage({
  src,
  alt,
  className,
  imageClassName = "object-cover object-center",
  sizes,
}: {
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
  sizes: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[10px] bg-[#f3f3f3] ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className={imageClassName} />
    </div>
  );
}

function BackLink() {
  return (
    <Link
      href="/hiya#work"
      className="inline-flex h-[28px] w-[28px] items-center justify-center"
      aria-label="Back to work"
    >
      <Image
        src={queenieAssets.backIcon}
        alt=""
        width={28}
        height={28}
        className="h-[28px] w-[28px] object-contain"
      />
    </Link>
  );
}

export default function QueenieProjectPage() {
  return (
      <main className={`${dmSans.variable} min-h-screen bg-[#fafafa] text-[#1B45C8] [font-family:var(--font-dm-sans)]`}>
        <header className="px-6 pt-5 md:px-10 lg:px-14 xl:px-[64px]">
          <div className="mx-auto flex max-w-[1512px] items-center justify-between text-[10pt] font-bold uppercase tracking-[0.03em]">
          <Link href="/hiya" className="text-[#1B45C8]">
            Nastja Juricev
          </Link>

          <nav className="hidden items-center gap-6 md:flex md:gap-8">
            <Link href="/hiya#work" className="text-[#1B45C8]">
              Work
            </Link>
            <Link href="/hiya#about" className="text-[#1B45C8]">
              About
            </Link>
            <a href="mailto:juricevnastja@gmail.com" className="text-[#FF4D00]">
              Get In Touch
            </a>
          </nav>
        </div>
      </header>

      <div className="mx-auto mt-4 w-full max-w-[1512px] overflow-hidden rounded-[12px] border border-[#8ea2d6] bg-[#fafafa]">
            <section className="px-6 pb-14 pt-5 md:px-10 md:pb-16 lg:px-14 xl:px-[64px]">
              <div className="grid gap-y-5 lg:grid-cols-12 lg:gap-x-4 xl:grid-cols-24 xl:gap-x-5">
            <div className="lg:col-span-6 xl:col-span-9">
              <div className="mb-5">
                <BackLink />
              </div>

              <div className="max-w-[38ch] space-y-3 text-[18px] leading-[1.3]">
                <div className="space-y-1">
                  <h1 className="text-[48px] font-medium leading-[0.94] tracking-[-0.04em] md:text-[56px]">
                    Queenie
                  </h1>
                  <p className="text-[12px] font-bold uppercase tracking-[0.03em]">
                    Channel 4 TV Drama
                  </p>
                </div>

                <p className="text-[14px] font-bold leading-[1.35]">
                  Role | Lead Designer
                </p>
                <p className="text-[14px] font-bold leading-[1.35]">
                  Scope | Series identity design · On-screen graphics system ·
                  Digital ecosystem design · Platform and interface design ·
                  Motion graphics · Title sequence design · Custom typography ·
                  Icon and emoji systems · Production collaboration
                </p>
                <p className="text-[14px] font-bold leading-[1.35]">
                  Outcome | Broadcast on Channel 4 and streamed internationally
                  on Hulu and Disney+
                </p>
              </div>
            </div>

              <div className="lg:col-span-5 lg:col-start-8 xl:col-span-10 xl:col-start-15">
                <div className="mx-auto w-full max-w-[465px] lg:mr-0">
                <ProjectImage
                  src={queenieAssets.hero}
                  alt="Queenie poster artwork"
                  className="aspect-[0.7/1]"
                    imageClassName="object-cover object-center scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 34vw"
                />
              </div>
            </div>

              <div className="lg:col-span-7 lg:row-start-2 lg:-mt-5 xl:col-span-11">
                <div className="max-w-[42ch] space-y-5 text-[18px] font-bold leading-[1.3]">
                <p>
                  Queenie is a Channel 4 drama based on Candice
                  Carty-Williams&apos; novel.
                </p>
                <p>
                  I got the opportunity to work with the author and the
                  animation team to create the visual world of Queenie, from the
                  main title and end sequence to the digital world she moves
                  through every day.
                </p>
                <p>
                  As we couldn&apos;t use real apps, I designed a whole set of
                  fictional platforms, including messaging, social media and
                  video interfaces, alongside a custom emoji library. Each
                  needed to feel familiar enough to be instantly recognisable,
                  but have its own personality and place within Queenie&apos;s
                  world. The designs also needed to evolve throughout production
                  while feeling consistent with the story.
                </p>
                <p>
                  Alongside the digital interfaces, I designed the main title,
                  end sequence and lower thirds, bringing the different elements
                  together into one visual world.
                </p>
              </div>
            </div>
          </div>
        </section>

          <section className="px-6 pb-16 md:px-10 md:pb-20 lg:px-14 xl:px-[64px]">
            <div className="grid gap-y-4 lg:grid-cols-12 lg:gap-x-4 xl:grid-cols-24 xl:gap-x-5">
            <div className="lg:col-span-10 lg:col-start-2 xl:col-span-18 xl:col-start-4">
              <ProjectImage
                src={queenieAssets.wideOne}
                alt="Queenie laptop title treatment"
                className="aspect-[1.62/0.9]"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>

            <div className="lg:col-span-10 lg:col-start-2 xl:col-span-18 xl:col-start-4">
              <ProjectImage
                src={queenieAssets.wideTwo}
                alt="Queenie campaign artwork"
                className="aspect-[1.62/0.9]"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>

            <div className="lg:col-span-10 lg:col-start-2 xl:col-span-18 xl:col-start-4">
              <ProjectImage
                src={queenieAssets.wideThree}
                alt="Queenie interface artwork"
                className="aspect-[1.62/0.9]"
                  imageClassName="object-contain object-center bg-[#f3f3f3]"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>

            <div className="lg:col-span-10 lg:col-start-2 xl:col-span-18 xl:col-start-4">
              <div className="grid gap-4 md:grid-cols-2">
                <ProjectImage
                  src={queenieAssets.phoneLeft}
                  alt="Queenie phone mockup one"
                  className="aspect-[0.92/1.18]"
                    imageClassName="object-contain object-center p-5 md:p-8"
                  sizes="(max-width: 768px) 100vw, 37vw"
                />
                <ProjectImage
                  src={queenieAssets.phoneRight}
                  alt="Queenie phone mockup two"
                  className="aspect-[0.92/1.18]"
                    imageClassName="object-contain object-center p-5 md:p-8"
                  sizes="(max-width: 768px) 100vw, 37vw"
                />
              </div>
            </div>

            <div className="lg:col-span-10 lg:col-start-2 xl:col-span-18 xl:col-start-4">
              <ProjectImage
                src={queenieAssets.wideFour}
                alt="Queenie messaging artwork"
                className="aspect-[1.62/0.9]"
                imageClassName="object-contain object-center bg-[#f3f3f3]"
                sizes="(max-width: 1024px) 100vw, 75vw"
              />
            </div>

            <div className="lg:col-span-10 lg:col-start-2 xl:col-span-18 xl:col-start-4">
              <div className="pt-2">
                <BackLink />
              </div>
            </div>
          </div>
        </section>

          <footer className="mt-4 bg-[#1B45C8] px-6 py-4 text-white md:px-10 lg:px-14 xl:px-[64px]">
            <div className="mx-auto flex max-w-[1512px] flex-wrap items-center justify-between gap-4 text-[8pt] font-normal uppercase tracking-[0.03em] md:text-[9pt]">
            <p>Nastja Juricev ©2026</p>

            <div className="flex items-center gap-6 md:gap-8">
              <Link href="/hiya#work">Work</Link>
              <Link href="/hiya#about">About</Link>
              <a href="mailto:juricevnastja@gmail.com" className="text-[#FF4D00]">
                Get In Touch
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Image
                  src="/hiya/Linkedin.png"
                  alt="LinkedIn"
                  width={14}
                  height={14}
                  className="h-[14px] w-[14px] object-contain"
                />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Image
                  src="/hiya/Instagram.png"
                  alt="Instagram"
                  width={14}
                  height={14}
                  className="h-[14px] w-[14px] object-contain"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
