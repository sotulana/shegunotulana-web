# Shegun Otulana Personal Website

Personal website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Personal Section**: Bio, values, and timeline
- **Work Section**: Portfolio of products and companies
- **Blog Section**: Link to Substack for articles
- **Contact Section**: Social media links and contact information
- **Responsive Design**: Mobile-first with accessible navigation
- **SEO Optimized**: Structured data and metadata

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Inter & Source Serif 4 fonts

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Customization

### Update Social Links

Edit `/app/contact/page.tsx` to update social media URLs:
- LinkedIn
- X (Twitter)
- Substack

### Update Work Items

Edit `/app/work/page.tsx` to add or modify work items.

### Update Substack URL

Edit `/app/blog/page.tsx` and replace the placeholder Substack URL.

## Design System

The site uses a custom design system based on the brand strategy:
- Primary Color: #2F81F7 (Action Blue)
- Secondary Color: #00BFA5 (Signal Teal)
- Warm: #F59E0B (Warm Amber)
- Accent: #7C3AED (Accent Purple)

Typography:
- Sans: Inter (UI/body)
- Serif: Source Serif 4 (headlines/pull-quotes)

## Future Enhancements

- Optional: Add Substack RSS feed integration
- Optional: Add analytics (Plausible/GA4)
- Optional: Add UTM tracking for outbound links
