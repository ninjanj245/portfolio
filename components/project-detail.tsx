import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";

import type { ProjectRecord } from "@/data/projects";
import { SHELL_MAX_WIDTH } from "@/lib/layout";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const backIcon = "/Arrow left-circle.png";

function BackLink() {
  return (
    <Link
      href="/hiya#work"
      className="inline-flex h-[28px] w-[28px] items-center justify-center"
      aria-label="Back to work"
    >
      <Image
        src={backIcon}
        alt=""
        width={28}
        height={28}
        className="h-[28px] w-[28px] object-contain"
      />
    </Link>
  );
}

function RawImage({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  return (
    <div className="overflow-hidden rounded-[10px] bg-[#f3f3f3]">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes={sizes}
        className="block h-auto w-full"
      />
    </div>
  );
}

export default function ProjectDetail({ project }: { project: ProjectRecord }) {
  return (
    <main
      className={`${dmSans.variable} min-h-screen bg-[#fafafa] text-[#1B45C8] [font-family:var(--font-dm-sans)]`}
    >
      <header className="px-6 pt-5 md:px-10 lg:px-14 min-[1512px]:px-0">
        <div className={`mx-auto flex ${SHELL_MAX_WIDTH} items-center justify-between text-[10pt] font-bold uppercase tracking-[0.03em]`}>
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

      <div className={`mx-auto mt-4 w-full ${SHELL_MAX_WIDTH} overflow-hidden rounded-[12px] border border-[#8ea2d6] bg-[#fafafa]`}>
        <section className="px-6 pb-14 pt-5 md:px-10 md:pb-16 lg:px-14 min-[1512px]:px-0">
          <div className="grid gap-y-5 lg:grid-cols-12 lg:gap-x-4 xl:grid-cols-24 xl:gap-x-5">
            <div className="lg:col-span-6 xl:col-span-9">
              <div className="mb-5">
                <BackLink />
              </div>

              <div className="max-w-[38ch] space-y-3 text-[18px] leading-[1.3]">
                <div className="space-y-1">
                  <h1 className="text-[48px] font-medium leading-[0.94] tracking-[-0.04em] md:text-[56px]">
                    {project.title}
                  </h1>
                  <p className="text-[12px] font-bold uppercase tracking-[0.03em]">
                    {project.category}
                  </p>
                </div>

                <p className="text-[14px] font-bold leading-[1.35]">
                  Role | {project.role ?? "To be confirmed"}
                </p>
                <p className="text-[14px] font-bold leading-[1.35]">
                  Scope | {project.scope ?? project.deliverables.join(" · ")}
                </p>
                <p className="text-[14px] font-bold leading-[1.35]">
                  Outcome | {project.outcome ?? "To be confirmed"}
                </p>

                {project.summary ? (
                  <p className="text-[18px] font-bold leading-[1.3]">
                    {project.summary}
                  </p>
                ) : null}
                {project.intro ? (
                  <p className="text-[18px] font-bold leading-[1.3]">
                    {project.intro}
                  </p>
                ) : null}
              </div>
            </div>

            {project.hero ? (
              <div className="lg:col-span-5 lg:col-start-8 lg:pt-[48px] xl:col-span-10 xl:col-start-15">
                <div className="mx-auto w-full max-w-[465px]">
                  <RawImage
                    src={project.hero.src}
                    alt={project.hero.alt}
                    sizes="(max-width: 1024px) 100vw, 34vw"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {project.detailImages.length ? (
          <section className="px-6 pb-16 md:px-10 md:pb-20 lg:px-14 min-[1512px]:px-0">
            <div className="grid gap-y-4 lg:grid-cols-12 lg:gap-x-4 xl:grid-cols-24 xl:gap-x-5">
              {project.detailImages.map((image) => (
                <figure
                  key={image.src}
                  className="lg:col-span-10 lg:col-start-2 xl:col-span-18 xl:col-start-4"
                >
                  <RawImage
                    src={image.src}
                    alt={image.alt}
                    sizes="(max-width: 1024px) 100vw, 75vw"
                  />
                  {image.caption ? (
                    <figcaption className="mt-2 text-[12px] font-bold uppercase tracking-[0.03em]">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </section>
        ) : (
          <section className="px-6 pb-16 md:px-10 md:pb-20 lg:px-14 min-[1512px]:px-0">
            <div className="grid lg:grid-cols-12 lg:gap-x-4 xl:grid-cols-24 xl:gap-x-5">
              <div className="lg:col-span-10 lg:col-start-2 xl:col-span-18 xl:col-start-4">
                <div className="rounded-[10px] border border-[#8ea2d6] px-6 py-10 text-[14px] font-bold leading-[1.35] md:px-8 md:py-12">
                  Final imagery has not been added yet. Drop assets into public/
                  {project.slug}/ and add them to this project entry.
                </div>
              </div>
            </div>
          </section>
        )}

        {project.wireframes?.length ? (
          <section className="px-6 pb-16 md:px-10 md:pb-20 lg:px-14 min-[1512px]:px-0">
            <div className="grid gap-y-4 lg:grid-cols-12 lg:gap-x-4 xl:grid-cols-24 xl:gap-x-5">
              <div className="lg:col-span-10 lg:col-start-2 xl:col-span-18 xl:col-start-4">
                <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.03em]">
                  Process
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {project.wireframes.map((image) => (
                    <figure key={image.src}>
                      <RawImage
                        src={image.src}
                        alt={image.alt}
                        sizes="(max-width: 768px) 100vw, 37vw"
                      />
                      {image.caption ? (
                        <figcaption className="mt-2 text-[12px] font-bold uppercase tracking-[0.03em]">
                          {image.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="px-6 pb-16 md:px-10 md:pb-20 lg:px-14 min-[1512px]:px-0">
          <div className="grid lg:grid-cols-12 lg:gap-x-4 xl:grid-cols-24 xl:gap-x-5">
            <div className="lg:col-span-10 lg:col-start-2 xl:col-span-18 xl:col-start-4">
              <div className="pt-2">
                <BackLink />
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-4 bg-[#1B45C8] px-6 py-4 text-white md:px-10 lg:px-14 min-[1512px]:px-0">
          <div className={`mx-auto flex ${SHELL_MAX_WIDTH} flex-wrap items-center justify-between gap-4 text-[8pt] font-normal uppercase tracking-[0.03em] md:text-[9pt]`}>
            <p>Nastja Juricev ©2026</p>

            <div className="flex items-center gap-6 md:gap-8">
              <Link href="/hiya#work">Work</Link>
              <Link href="/hiya#about">About</Link>
              <a href="mailto:juricevnastja@gmail.com" className="text-[#FF4D00]">
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Image
                  src="/hiya/Linkedin.png"
                  alt="LinkedIn"
                  width={14}
                  height={14}
                  className="h-[14px] w-[14px] object-contain"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
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
