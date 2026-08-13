# Mawfyy's Portfolio

Personal website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

Live at: https://mawfyy.github.io

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`     |
| `npm run preview` | Preview the build locally                 |

## Project Structure

```
/
├── public/
│   └── media/          # Unoptimized assets served as-is
├── src/
│   ├── assets/         # Icons and global styles
│   ├── components/     # Header, Navbar, Footer, Socials
│   ├── content/
│   │   └── blog/       # Markdown blog posts
│   ├── layouts/        # BaseLayout (HTML shell + SEO meta)
│   └── pages/          # Site routes (index, about, blog, projects, media...)
├── astro.config.mjs
└── content.config.ts   # Content collection schemas
```

## Notes

- The **Projects** page fetches the repo list from the GitHub API at build time, with a hardcoded fallback list if the request fails.
- **Blog** posts live in `src/content/blog/` as Markdown files with frontmatter (`title`, `description`, `date`).
- Deployed to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
