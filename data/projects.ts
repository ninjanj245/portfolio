export interface ProjectAsset {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectRecord {
  slug: string;
  title: string;
  category: string;
  hero?: ProjectAsset;
  cardFrames?: string[];
  summary: string;
  intro: string;
  deliverables: string[];
  detailImages: ProjectAsset[];
  wireframes?: ProjectAsset[];
}

/*
Add new project assets in:

public/<project-slug>/
  01-hero.jpg
  02-hover.jpg
  03-hover.jpg
  04-hover.jpg

For now we are only using the homepage hover sequence.
Project pages and detail/wireframe assets can come later.

Then update the matching project record below.
*/

export const projects: ProjectRecord[] = [
  {
    slug: "concepts",
    title: "Concepts",
    category: "Campaign",
    hero: {
      src: "/concepts/hover 1.png",
      alt: "Concepts hover image one",
    },
    cardFrames: [
      "/concepts/hover 1.png",
      "/concepts/hover 2.png",
      "/concepts/hover 3.png",
    ],
    summary: "A flexible image-led project used here to test hover sequencing.",
    intro:
      "For now this entry is just feeding the homepage hover behaviour while we tune the effect.",
    deliverables: ["Campaign", "Art direction"],
    detailImages: [
      {
        src: "/concepts/hover 1.png",
        alt: "Concepts placeholder detail image",
      },
    ],
  },
  {
    slug: "appartamento-da-andrea",
    title: "Appartamento da Andrea",
    category: "Brand Identity",
    hero: {
      src: "/appartamento/hover 1.webp",
      alt: "Appartamento da Andrea hover image one",
    },
    cardFrames: [
      "/appartamento/hover 1.webp",
      "/appartamento/hover 2.webp",
      "/appartamento/hover 3.jpg",
      "/appartamento/hover 4.webp",
      "/appartamento/hover 5.png",
    ],
    summary: "A tactile identity system developed across print and digital touchpoints.",
    intro:
      "This template page is ready for your final project copy, ordered image story, and supporting wireframes.",
    deliverables: ["Identity", "Print", "Campaign assets"],
    detailImages: [
      {
        src: "/hiya/coasters 2.webp",
        alt: "Coasters laid out as part of the Appartamento da Andrea identity",
      },
      {
        src: "/hiya/Screenshot 2026-07-01 at 14.42.40.png",
        alt: "Additional brand application artwork",
      },
    ],
    wireframes: [
      {
        src: "/hiya/Screenshot 2026-07-01 at 14.42.40.png",
        alt: "Wireframe placeholder for Appartamento da Andrea",
      },
    ],
  },
  {
    slug: "patient-portal",
    title: "Patient Portal",
    category: "UI / UX Design",
    hero: {
      src: "/patient app/hover 2.jpg",
      alt: "Patient Portal hover image one",
    },
    cardFrames: [
      "/patient app/hover 2.jpg",
      "/patient app/hover 3.png",
      "/patient app/hover 4.png",
    ],
    summary: "A product project currently being used to test the homepage hover sequence.",
    intro:
      "For now this entry is only feeding the homepage hover behaviour while we tune the motion.",
    deliverables: ["UI / UX Design", "Prototype", "Visual system"],
    detailImages: [
      {
        src: "/patient app/hover 2.jpg",
        alt: "Patient Portal placeholder detail image",
      },
    ],
  },
  {
    slug: "conference",
    title: "Make Work Better Conference",
    category: "Event Identity",
    hero: {
      src: "/conference/hover 1.webp",
      alt: "Conference hover image one",
    },
    cardFrames: [
      "/conference/hover 1.webp",
      "/conference/hover 2.webp",
      "/conference/hover 3.jpg",
    ],
    summary: "An event identity project currently being used to test the homepage hover sequence.",
    intro:
      "For now this entry is only feeding the homepage hover behaviour while we tune the motion.",
    deliverables: ["Event identity", "Campaign"],
    detailImages: [
      {
        src: "/conference/hover 1.webp",
        alt: "Conference placeholder detail image",
      },
    ],
  },
  {
    slug: "sumoco",
    title: "SuMoCo",
    category: "UI Design, Brand Identity",
    hero: {
      src: "/ciao/sumoco.png",
      alt: "SuMoCo project hero image",
    },
    cardFrames: [
      "/sumoco/hover 1.png",
      "/sumoco/hover 2.png",
      "/sumoco/hover 3.png",
    ],
    summary: "A product and identity project now set up with its own route.",
    intro:
      "This page is ready for final copy, ordered imagery, and any wireframes you want to add later.",
    deliverables: ["UI Design", "Brand Identity"],
    detailImages: [
      {
        src: "/ciao/sumoco.png",
        alt: "SuMoCo project overview image",
      },
      {
        src: "/sumoco/hover 1.png",
        alt: "SuMoCo detail image one",
      },
    ],
  },
  {
    slug: "headbox",
    title: "HeadBox",
    category: "Landing Page",
    summary: "A landing page project route prepared for final assets and copy.",
    intro:
      "The route is live now, and the page is ready for your final hero image, detail sequence, and written content.",
    deliverables: ["Landing Page", "Digital Design"],
    detailImages: [],
  },
  {
    slug: "queenie",
    title: "Queenie",
    category: "World Building",
    hero: {
      src: "/queenie/hover 1.jpg",
      alt: "Queenie hover image one",
    },
    cardFrames: [
      "/queenie/hover 1.jpg",
      "/queenie/hover 2.jpg",
      "/queenie/hover 3.png",
    ],
    summary: "An image-led project currently being used to test the homepage hover sequence.",
    intro:
      "For now this entry is only feeding the homepage hover behaviour while we tune the motion.",
    deliverables: ["Brand identity", "Campaign", "Visual world"],
    detailImages: [
      {
        src: "/queenie/hover 1.jpg",
        alt: "Queenie placeholder detail image",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
