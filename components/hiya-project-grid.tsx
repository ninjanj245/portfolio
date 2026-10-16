"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export interface HiyaProject {
  title: string;
  category: string;
  href?: string;
  frames: string[];
  className: string;
  mediaClassName: string;
  frameClassName?: string;
  frameClassNames?: string[];
  imageClassName?: string;
  imageClassNames?: string[];
  hoverIntervalMs?: number;
}

function HoverProjectCard({ project }: { project: HiyaProject }) {
  const [frameIndex, setFrameIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (!isHovered || project.frames.length <= 1) return;

    const timer = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % project.frames.length);
    }, project.hoverIntervalMs ?? 700);

    return () => window.clearInterval(timer);
  }, [isHovered, project.frames, project.hoverIntervalMs]);

  const startHover = () => {
    setIsHovered(true);
    if (project.frames.length > 1) {
      setFrameIndex(1);
    }
  };

  const endHover = () => {
    setIsHovered(false);
    setFrameIndex(0);
  };

  const content = (
    <>
      <div
        className={`relative overflow-hidden rounded-[10px] bg-[#fafafa] ${project.mediaClassName} ${project.frameClassNames?.[frameIndex] ?? project.frameClassName ?? ""}`}
      >
        <Image
          src={project.frames[frameIndex] ?? project.frames[0]}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={project.imageClassNames?.[frameIndex] ?? project.imageClassName ?? "object-cover"}
        />
      </div>

      <div className="flex items-center justify-between gap-2 overflow-hidden pt-1 text-[14px] font-semibold leading-none text-[#1B45C8] md:text-[15px] [font-family:var(--font-dm-sans)]">
        <span className="shrink-0 whitespace-nowrap tracking-[0.02em] [font-family:var(--font-dm-serif)]">
          {project.title}
        </span>
        <span className="min-w-0 truncate whitespace-nowrap text-right">
          {project.category}
        </span>
      </div>
    </>
  );

  return (
    <article className={project.className}>
      {project.href ? (
        <Link
          href={project.href}
          onMouseEnter={startHover}
          onMouseLeave={endHover}
          onFocus={startHover}
          onBlur={endHover}
          className="block w-full text-left"
        >
          {content}
        </Link>
      ) : (
        <button
          type="button"
          onMouseEnter={startHover}
          onMouseLeave={endHover}
          onFocus={startHover}
          onBlur={endHover}
          className="block w-full text-left"
        >
          {content}
        </button>
      )}
    </article>
  );
}

export default function HiyaProjectGrid({ projects }: { projects: HiyaProject[] }) {
  return (
    <div className="grid grid-cols-12 gap-3 lg:gap-4 xl:grid-cols-24 xl:gap-5">
      {projects.map((project) => (
        <HoverProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
