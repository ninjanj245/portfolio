import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f3efe6] text-black">
      <header className="sticky top-0 z-50 bg-[#f3efe6]">
          <div className="mx-auto flex max-w-[1512px] items-center justify-between px-5 py-4 md:px-8 lg:px-10 xl:px-[64px]">
          <Link href="/" className="text-[12px] tracking-[0.18em]">
            NASTJA JURICEV
          </Link>
          <nav className="flex items-center gap-5 text-[12px] tracking-[0.18em] md:gap-7">
            <Link href="/hiya#work">WORK</Link>
            <Link href="/hiya#about">ABOUT</Link>
            <a href="mailto:juricevnastja@gmail.com">CONTACT</a>
          </nav>
        </div>
      </header>

      <section className="border-t border-black/10">
          <div className="mx-auto max-w-[1512px] px-5 py-12 md:px-8 md:py-16 lg:px-10 lg:py-20 xl:px-[64px]">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] md:items-start">
            <div>
              <p className="text-[12px] tracking-[0.18em] text-black/45">{project.category}</p>
              <h1 className="mt-4 max-w-[10ch] text-[clamp(2.8rem,7vw,6.8rem)] leading-[0.92] tracking-[-0.06em]">
                {project.title}
              </h1>
            </div>

            <div className="md:pt-3">
              <p className="max-w-[34rem] text-base leading-relaxed text-black/72 md:text-lg">
                {project.summary}
              </p>
              <p className="mt-6 max-w-[34rem] text-sm leading-relaxed text-black/58 md:text-base">
                {project.intro}
              </p>
              <p className="mt-8 text-[12px] tracking-[0.18em] text-black/45">
                {project.deliverables.join(" / ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1512px] px-5 md:px-8 lg:px-10 xl:px-[64px]">
          {project.hero ? (
            <Image
              src={project.hero.src}
              alt={project.hero.alt}
              width={1600}
              height={1200}
              sizes="(max-width: 768px) 100vw, 1512px"
              className="block h-auto w-full object-cover"
            />
          ) : (
            <div className="aspect-[1.5/1] w-full rounded-[10px] border border-black/10 bg-[linear-gradient(135deg,rgba(0,0,0,0.06),rgba(0,0,0,0.015))]" />
          )}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1512px] px-5 md:px-8 lg:px-10 xl:px-[64px]">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[12px] tracking-[0.18em] text-black/45">PROJECT</p>
              <h2 className="mt-3 text-[clamp(2rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.06em]">
                Final visuals
              </h2>
            </div>
            <p className="max-w-[24rem] text-sm leading-relaxed text-black/58 md:text-base">
              Drop your final images into the project folder and they will sit raw on the page in this sequence.
            </p>
          </div>

          {project.detailImages.length ? (
            <div className="space-y-8 md:space-y-12">
              {project.detailImages.map((image) => (
                <figure key={image.src} className="space-y-2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1600}
                    height={1200}
                    sizes="(max-width: 768px) 100vw, 1512px"
                    className="block h-auto w-full object-cover"
                  />
                  {image.caption ? (
                    <figcaption className="text-[12px] tracking-[0.08em] text-black/45">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          ) : (
            <div className="rounded-[10px] border border-black/10 px-6 py-10 text-sm leading-relaxed text-black/58 md:px-8 md:py-12 md:text-base">
              Final imagery has not been added to this project yet. The page route is ready, and you can drop assets into `public/headbox/` whenever you are ready to build it out.
            </div>
          )}
        </div>
      </section>

      {project.wireframes?.length ? (
        <section className="border-t border-black/10 py-16 md:py-24">
          <div className="mx-auto max-w-[1512px] px-5 md:px-8 lg:px-10 xl:px-[64px]">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-[12px] tracking-[0.18em] text-black/45">PROCESS</p>
                <h2 className="mt-3 text-[clamp(2rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.06em]">
                  Wireframes
                </h2>
              </div>
              <p className="max-w-[24rem] text-sm leading-relaxed text-black/58 md:text-base">
                Put wireframes in `public/hey/{project.slug}/wireframes/` and keep the same numbered order.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {project.wireframes.map((image) => (
                <figure key={image.src} className="space-y-2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="block h-auto w-full object-cover"
                  />
                  {image.caption ? (
                    <figcaption className="text-[12px] tracking-[0.08em] text-black/45">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
