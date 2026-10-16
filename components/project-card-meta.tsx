import * as React from "react";

export default function ProjectCardMeta({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  return (
    <div className="flex items-start justify-between gap-2 pt-2 text-[16px] font-semibold leading-[1.08] text-[#1B45C8] md:text-[17px]">
      <span className="shrink-0 whitespace-nowrap tracking-[0.02em] [font-family:var(--font-dm-serif)]">
        {title}
      </span>
      <span className="min-w-0 truncate whitespace-nowrap text-right [font-family:var(--font-dm-sans)]">
        {category}
      </span>
    </div>
  );
}
