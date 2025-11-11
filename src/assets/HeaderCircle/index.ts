// Use import.meta.glob with eager loading for better compatibility
// This handles filenames with spaces and special characters correctly
const imageModules = import.meta.glob("./*.{png,jpeg,jpg}", { eager: true });

// Convert to array of image URLs
const headerCircleImages: string[] = Object.values(imageModules).map(
  (module: any) => module.default
) as string[];

export { headerCircleImages };
export default headerCircleImages;

