import Link from "next/link";

import { SHELL_MAX_WIDTH } from "@/lib/layout";

export default function Home() {
  return (
    <main className="bg-[#f3efe6] text-black">
      <header className="sticky top-0 z-50 bg-[#f3efe6]">
          <div className={`mx-auto flex ${SHELL_MAX_WIDTH} items-center justify-between px-5 py-4 md:px-8 lg:px-10 min-[1512px]:px-0`}>
          <Link href="/" className="text-[12px] tracking-[0.18em]">
            NASTJA JURICEV
          </Link>
          <nav className="flex items-center gap-5 text-[12px] tracking-[0.18em] md:gap-7">
            <a href="#work">WORK</a>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
        </div>
      </header>

      <section className="bg-black text-white">
          <div className={`mx-auto min-h-[72svh] ${SHELL_MAX_WIDTH} px-5 py-10 md:px-8 md:py-14 lg:px-10 lg:py-16 min-[1512px]:px-0`}>
          <div className="grid gap-10 md:grid-cols-[minmax(0,760px)_1fr] md:items-start">
            <div>
              <h1 className="max-w-[12ch] text-[clamp(2.8rem,7vw,6.8rem)] leading-[0.92] tracking-[-0.06em]">
                Hi,
                <br />
                I’m Nastja.
              </h1>
              <p className="mt-10 max-w-[32rem] text-base leading-relaxed text-white/72 md:text-lg">
                Graphic designer with experience shaping systems across digital products and visual identities.
              </p>
            </div>
            <p className="text-[12px] tracking-[0.18em] text-white/60 md:justify-self-end md:pt-3">
            
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="py-16 md:py-24">
          <div className={`mx-auto ${SHELL_MAX_WIDTH} px-5 md:px-8 lg:px-10 min-[1512px]:px-0`}>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[12px] tracking-[0.18em] text-black/50">WORK</p>
              <h2 className="mt-3 max-w-[10ch] text-[clamp(2rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.06em]">
                Selected projects
              </h2>
            </div>
            <p className="max-w-[24rem] text-sm leading-relaxed text-black/60 md:text-base">
              Project hover studies now live on the `/hiya` page while we build the final project pages.
            </p>
          </div>
          <p className="text-sm leading-relaxed text-black/72 md:text-base">
            Open <Link href="/hiya" className="underline underline-offset-4">/hiya</Link> to review the hover image sequences.
          </p>
        </div>
      </section>
    </main>
  );
}
