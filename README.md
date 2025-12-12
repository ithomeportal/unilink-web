# Unilink Transportation Website

Modern Next.js website for Unilink Transportation - an international 3PL logistics provider.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── services/         # Services pages
│   │   ├── page.tsx      # Services hub
│   │   ├── trucking/     # Over The Road
│   │   ├── air/          # Air Freight
│   │   └── ocean/        # Ocean Shipping
│   ├── contact/          # Contact page
│   ├── careers/          # Careers page
│   ├── quote/            # Quote request form
│   └── privacy/          # Privacy policy
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   └── ImagePlaceholder.tsx  # Placeholder for images
└── globals.css           # Global styles
```

## Adding Images

Look for `[PHOTO NEEDED: ...]` comments throughout the codebase. These indicate where images should be added. Replace the `ImagePlaceholder` components with actual `<Image>` components from `next/image`.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)
