// Use import.meta.glob with import: 'default' for proper module handling
const imageModules = import.meta.glob<string>('./*.{png,jpeg,jpg}', { 
  eager: true,
  import: 'default'
});

// Convert to array of image URLs, sorted by filename for consistency
export const headerCircleImages: string[] = Object.keys(imageModules)
  .sort()
  .map(path => imageModules[path]);

export default headerCircleImages;

