/**
 * Shared layout shell tokens.
 *
 * The Figma design source is 1512px wide, and every internal proportion
 * (24-column grid, 20px gutters, type scale) was drawn against that width.
 * Keeping the shell at 1512px is what keeps those proportions exact, so this
 * constant is the single source of truth for the site shell.
 *
 * To change the site width, change SHELL_MAX_WIDTH here and every page
 * updates at once.
 */
export const SHELL_MAX_WIDTH = "max-w-[1512px]";

export const SHELL_PADDING = "px-6 md:px-10 lg:px-14 xl:px-[64px]";

export const SHELL = `mx-auto w-full ${SHELL_MAX_WIDTH} ${SHELL_PADDING}`;
