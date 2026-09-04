/**
 * Site-wide settings.
 */

export const site = {
  name: 'lt0.co',
  title: 'lt0',
  description: 'Projects by less than zero.',
  url: 'https://lt0.co',
  tagline: 'less than 0 boring days',
} as const;

/**
 * Logo variants — one is picked at random on each page load.
 */
export const logo = {
  variants: ['<0', 'ᕙ0ᕗ', '♡⸜0', '◝0◜', '0و', '¯\\_0_/¯'],
} as const;
