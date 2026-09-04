/** Strip file extension from a content collection entry id. */
export function pageSlug(id: string): string {
  return id.replace(/\.mdx?$/, '');
}
