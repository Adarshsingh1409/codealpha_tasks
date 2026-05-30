/** Merge class names — extend with clsx/tailwind-merge when needed */
export function cn(...classes: (string | false | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
