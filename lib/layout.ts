/**
 * Shared layout shell tokens.
 *
 * The Figma source frame is 1512px wide with a 24-column grid, a 20px gutter
 * and zero margin, so the shell is capped at 1512px and the grid runs edge to
 * edge inside it. Each section keeps a page inset at smaller widths for
 * breathing room, and drops it at 1512px+ so the columns land on the same
 * numbers as the Figma file.
 *
 * Section wrapper pattern:
 *   `mx-auto w-full ${SHELL_MAX_WIDTH} px-6 md:px-10 lg:px-14 min-[1512px]:px-0`
 *   `grid lg:grid-cols-12 xl:grid-cols-24 lg:gap-x-4 xl:gap-x-5`
 */
export const SHELL_MAX_WIDTH = "max-w-[1512px]";
