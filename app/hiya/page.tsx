import Image from "next/image";
import Link from "next/link";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

import HiyaProjectGrid from "@/components/hiya-project-grid";
import { SHELL_MAX_WIDTH } from "@/lib/layout";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

const projects = [
  {
    title: "Concepts",
    category: "Campaign",
    href: "/projects/concepts",
    frames: [
      "/concepts/hover 1.png",
      "/concepts/hover 2.png",
      "/concepts/hover 3.png",
    ],
    className: "col-span-12 lg:col-span-4 xl:col-span-8",
    mediaClassName: "aspect-[1.08/0.82]",
    frameClassNames: [
      "bg-[#fafafa]",
      "bg-[#fafafa] p-6 md:p-8",
      "bg-[#fafafa] p-6 md:p-8",
    ],
    imageClassNames: [
      "object-cover scale-[1.08]",
      "object-contain",
      "object-contain",
    ],
    hoverIntervalMs: 900,
  },
  {
    title: "Appartamento Da Andrea",
    category: "Brand Identity",
    href: "/projects/appartamento-da-andrea",
    frames: [
      "/appartamento/hover 1.webp",
      "/appartamento/hover 2.webp",
      "/appartamento/hover 3.jpg",
      "/appartamento/hover 4.webp",
      "/appartamento/hover 5.png",
    ],
    className: "col-span-12 lg:col-span-4 xl:col-span-8",
    mediaClassName: "aspect-[1.08/0.82]",
    hoverIntervalMs: 900,
  },
  {
    title: "Queenie",
    category: "World Building",
    href: "/projects/queenie",
    frames: [
      "/queenie/hover 1.jpg",
      "/queenie/hover 2.jpg",
      "/queenie/hover 3.png",
    ],
    className: "col-span-12 lg:col-span-4 lg:row-span-2 xl:col-span-8",
    mediaClassName: "aspect-[0.74/1.23] md:h-full md:min-h-[674px]",
    imageClassNames: ["object-cover", "object-cover", "object-cover object-left"],
    hoverIntervalMs: 900,
  },
  {
    title: "Patient Portal",
    category: "UI / UX Design, Brand Identity",
    href: "/projects/patient-portal",
    frames: [
      "/patient app/hover 1.png",
      "/patient app/hover 2.jpg",
      "/patient app/hover 3.png",
      "/patient app/hover 4.png",
    ],
    className: "col-span-12 lg:col-span-6 xl:col-span-10",
    mediaClassName: "aspect-[1.22/0.82]",
      frameClassNames: ["", "bg-[#fafafa] p-4 md:p-6", "bg-[#fafafa] p-4 md:p-6", ""],
      imageClassNames: [
        "object-cover",
        "object-contain object-center scale-[0.94]",
        "object-contain object-center",
        "object-cover",
      ],
    hoverIntervalMs: 900,
  },
  {
    title: "Make Work Better Conference",
    category: "Event Identity",
    href: "/conference",
    frames: [
      "/conference/hover 1.webp",
      "/conference/hover 2.webp",
      "/conference/hover 3.jpg",
    ],
    className: "col-span-12 lg:col-span-6 xl:col-span-6",
    mediaClassName: "aspect-[1.04/0.82]",
    hoverIntervalMs: 900,
  },
];

const services = [
  "Graphic Design",
  "UI / UX Design",
  "Branding",
  "Visual Identity",
  "Print & Packaging",
  "Editorial Design",
  "Art / Creative Direction",
  "Motion",
];

export default function HiyaPage() {
  return (
    <main
      className={`${dmSans.variable} ${dmSerif.variable} min-h-screen bg-[#fafafa] text-[#1B45C8]`}
    >
      <header className="px-6 pt-5 md:px-10 lg:px-14 min-[1512px]:px-0">
        <div className={`mx-auto flex ${SHELL_MAX_WIDTH} items-center justify-between text-[10pt] font-bold uppercase tracking-[0.03em] md:text-[10pt] lg:text-[10pt] [font-family:var(--font-dm-sans)]`}>
          <Link href="/" className="text-[#1B45C8]">
            Nastja Juricev
          </Link>

          <nav className="hidden items-center gap-6 md:flex md:gap-8">
            <a href="#work" className="text-[#1B45C8]">
              Work
            </a>
            <a href="#about" className="text-[#1B45C8]">
              About
            </a>
            <a
              href="mailto:juricevnastja@gmail.com"
              className="text-[#FF4D00] [font-family:var(--font-dm-serif)]"
            >
              Get In Touch
            </a>
          </nav>

          <details className="relative md:hidden">
            <summary className="list-none cursor-pointer text-[14pt] leading-none text-[#1B45C8]">
              +
            </summary>
            <div className="absolute right-0 top-8 z-20 min-w-[180px] rounded-[10px] border border-[#8ea2d6] bg-[#fafafa] p-4 text-[11pt] [font-family:var(--font-dm-sans)]">
              <div className="flex flex-col items-end gap-3 uppercase">
                <a href="#work" className="text-[#1B45C8]">
                  Work
                </a>
                <a href="#about" className="text-[#1B45C8]">
                  About
                </a>
                <a
                  href="mailto:juricevnastja@gmail.com"
                  className="text-[#FF4D00]"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </details>
        </div>
      </header>

        <div className={`mx-auto mt-4 w-full ${SHELL_MAX_WIDTH} overflow-hidden rounded-[12px] border border-[#8ea2d6] bg-[#fafafa]`}>
          <section className="px-6 pb-14 pt-14 md:px-10 md:pb-18 md:pt-18 lg:px-14 lg:pb-20 lg:pt-16 min-[1512px]:px-0">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-4 lg:items-end xl:grid-cols-24 xl:gap-x-5">
            <div className="lg:col-span-5 xl:col-span-8">
              <h1 className="text-[clamp(4.9rem,10vw,7.7rem)] uppercase leading-[0.83] tracking-[0.02em] text-[#1B45C8] [font-family:var(--font-dm-serif)]">
                Hiya
              </h1>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 lg:self-end xl:col-span-9 xl:col-start-15">
              <p className="max-w-[32ch] text-[16px] font-bold leading-[1.12] text-[#1B45C8] md:text-[16px] lg:text-[16px] [font-family:var(--font-dm-sans)]">
                I&apos;m Nastja, a multidisciplinary designer working across
                visual identities, campaigns and digital experiences, bringing
                ideas to life. Let&apos;s rock!
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="px-6 pb-24 md:px-10 lg:px-14 min-[1512px]:px-0">
          <HiyaProjectGrid projects={projects} />
        </section>

            <section id="about" className="px-6 pb-16 md:px-10 md:pb-20 lg:px-14 min-[1512px]:px-0">
              <div className="grid gap-x-6 gap-y-5 lg:grid-cols-12 lg:gap-x-4 xl:grid-cols-24 xl:gap-x-5">
            <div className="order-1 lg:col-span-6 xl:col-span-10">
              <h2 className="text-[40px] uppercase leading-[0.94] tracking-[-0.04em] text-[#1B45C8] [font-family:var(--font-dm-serif)]">
                About
              </h2>
            </div>

            <div className="order-3 lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:self-end xl:col-span-6 xl:col-start-17">
              <p className="text-[18px] uppercase leading-none [font-family:var(--font-dm-serif)]">
                Services
              </p>
            </div>

            <div className="order-2 lg:col-span-6 lg:row-start-2 xl:col-span-10">
              <div className="max-w-[44ch] space-y-5 text-[18px] font-bold leading-[1.18] text-[#1B45C8] [font-family:var(--font-dm-sans)]">
                <p>
                  I&apos;m Nastja, a multidisciplinary designer working across
                  visual identities, campaigns and digital experiences.
                </p>
                <p>Comfortable working remotely, freelance or in-house.</p>
              </div>
            </div>

            <div
              id="contact"
              className="order-5 mt-2 lg:col-span-6 lg:row-start-3 lg:mt-6 xl:col-span-10"
            >
              <a href="mailto:juricevnastja@gmail.com">
                <h2 className="text-[40px] uppercase leading-[0.94] tracking-[-0.04em] text-[#FF4D00] [font-family:var(--font-dm-serif)]">
                  Get In Touch
                </h2>
              </a>
            </div>
            <div className="order-4 lg:col-span-4 lg:col-start-9 lg:row-start-2 xl:col-span-6 xl:col-start-17">
              <div className="text-[18px] font-bold leading-[1.18] text-[#1B45C8] [font-family:var(--font-dm-sans)]">
                {services.map((service) => (
                  <p key={service}>{service}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

            <footer className="mt-4 bg-[#1B45C8] px-6 py-4 text-white md:px-10 lg:px-14 min-[1512px]:px-0">
              <div className={`mx-auto flex ${SHELL_MAX_WIDTH} flex-wrap items-center justify-between gap-4 text-[8pt] font-normal uppercase tracking-[0.03em] md:text-[9pt] [font-family:var(--font-dm-sans)]`}>
            <p>Nastja Juricev ©2026</p>

            <div className="flex items-center gap-6 md:gap-8">
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a
                href="mailto:juricevnastja@gmail.com"
                className="text-[#FF4D00] [font-family:var(--font-dm-serif)]"
              >
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
