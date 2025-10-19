# AI Design Academy - Project Structure

This project has been restructured for easier navigation and maintenance.

## 📁 File Structure

```
src/
├── config/
│   └── navigation.ts          # Navigation configuration
├── pages/
│   ├── index.ts              # Page exports and routes
│   ├── Index.tsx             # Home page (Vibe Coding Mastermind)
│   ├── Cohort.tsx            # Cohort page (main landing)
│   ├── AICrashCourse.tsx     # AI Crash Course page
│   ├── Projects.tsx           # Projects page
│   ├── Tools.tsx              # Tools page
│   └── NotFound.tsx           # 404 page
├── components/
│   ├── Navigation.tsx        # Updated navigation component
│   └── ui/                   # UI components
└── App.tsx                   # Updated with organized routes
```

## 🧭 Navigation Structure

### Main Navigation (Header)
- **Cohort** → `/cohort` (Main landing page)
- **Blog** → `#playbook` (Currently points to playbook section)
- **AI Crash Course** → `/ai-crash-course`

### More Menu (Dropdown)
- **Vibe Coding Mastermind** → `/` (Home page)
- **Tools** → `/tools`
- **Projects** → `/projects`

## 🔧 Easy Navigation Management

### Adding a New Page
1. Create the page component in `src/pages/`
2. Add the route to `src/pages/index.ts`
3. Add navigation item to `src/config/navigation.ts`
4. Update `src/App.tsx` if needed

### Updating Navigation
All navigation changes are centralized in `src/config/navigation.ts`:
- Main navigation items
- Dropdown menu items
- Footer navigation
- Page metadata

### Page Routes
All routes are defined in `src/pages/index.ts`:
- `PAGE_ROUTES.HOME` → `/`
- `PAGE_ROUTES.COHORT` → `/cohort`
- `PAGE_ROUTES.AI_CRASH_COURSE` → `/ai-crash-course`
- `PAGE_ROUTES.PROJECTS` → `/projects`
- `PAGE_ROUTES.TOOLS` → `/tools`

## 🚀 Benefits

1. **Centralized Configuration** - All navigation in one place
2. **Type Safety** - TypeScript routes and metadata
3. **Easy Maintenance** - Change navigation without touching components
4. **Scalable** - Easy to add new pages and routes
5. **Consistent** - Same navigation structure across all pages

## 📝 Usage Examples

### Adding a New Page
```typescript
// 1. Create BlogPage.tsx in src/pages/
// 2. Add to src/pages/index.ts
export { default as BlogPage } from './BlogPage';

// 3. Add route to PAGE_ROUTES
export const PAGE_ROUTES = {
  // ... existing routes
  BLOG: '/blog',
} as const;

// 4. Add to navigation config
export const NAVIGATION_CONFIG = {
  main: [
    // ... existing items
    {
      label: 'Blog',
      path: PAGE_ROUTES.BLOG,
      description: 'AI Design Blog',
    },
  ],
};
```

### Updating Navigation Order
Simply reorder items in `NAVIGATION_CONFIG.main` array in `src/config/navigation.ts`.
