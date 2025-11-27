
# website v3

This repository now contains a fully self-contained Vite + React build of the site—no Figma-generated dependencies or shared UI libraries remain.

## Local development

1. `npm install`
2. `npm run dev`
3. Visit the printed URL (default `http://localhost:5173`)

## Production build preview

1. `npm run build`
2. `npm run preview` to run the static output locally before pushing to GitHub or deploying.

## Deploying on Vercel

1. Push the repo to GitHub (or import it directly in Vercel).
2. In Vercel, create a new project from this repo.
3. Framework preset: **Vite**.  
   - Build command: `npm run build`  
   - Output directory: `dist`
4. Deploy. Vercel will automatically rebuild on future pushes to the selected branch.
  