# Unilink Transportation Website - History Archive

## Version History

### v2.0.0 - Business Pivot & Deployment (December 12, 2025)

#### Major Changes
- **Business Model Update:** Removed Air Freight and Ocean Shipping services
- **Focus:** Now exclusively full container trucking across North America
- **Deployed:** Live on Vercel at https://unlk-web.vercel.app

#### Files Modified
```
src/app/
├── page.tsx (Complete rewrite - trucking focused)
├── layout.tsx (Updated metadata, added favicon config)
├── icon.png (NEW - browser favicon)
├── apple-icon.png (NEW - iOS icon)
├── opengraph-image.png (NEW - social sharing)
├── careers/page.tsx (Updated jobs URL, added real images)
├── carriers/page.tsx (NEW - replaced /quote)
├── contact/page.tsx (Updated hours, removed social links)
└── about/page.tsx (Updated CTAs)

src/components/
├── Header.tsx (Simplified nav, carrier CTA)
└── Footer.tsx (Updated links, added logo, removed social)

scripts/
└── generate-favicon.js (NEW - favicon generation)

public/images/
└── [16 images added from /graph folder selections]
```

#### Files Removed
```
src/app/
├── services/page.tsx (Services hub)
├── services/air/page.tsx (Air Freight)
├── services/ocean/page.tsx (Ocean Shipping)
└── quote/page.tsx (Quote form)
```

#### New Site Architecture
```
/                    → Home (Trucking focused)
/about               → About Us
/services/trucking   → Over The Road Trucking
/carriers            → Carrier Onboarding (NEW)
/careers             → Work With Us
/contact             → Contact
/privacy             → Privacy Policy
```

---

### v1.0.0 - Initial Build (December 11, 2025)

#### Files Created
```
unlk-web/
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── .gitignore
├── README.md
├── docs/
│   ├── PROJECT_JOURNAL.md
│   ├── HISTORY_ARCHIVE.md
│   ├── ACTIVE_MEMORY.md
│   └── PHOTOS_NEEDED.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Home)
│   │   ├── globals.css
│   │   ├── about/page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── trucking/page.tsx
│   │   │   ├── air/page.tsx
│   │   │   └── ocean/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── careers/page.tsx
│   │   ├── quote/page.tsx
│   │   └── privacy/page.tsx
│   └── components/
│       ├── index.ts
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── ImagePlaceholder.tsx
```

#### Content Migrated From WordPress
- Company overview and description
- Mission, vision, purpose statements
- CEO name: Erick Mendoza
- All services: Over The Road, Air Freight, Ocean Shipping
- Equipment types: Dry Van, Flatbed, Reefer, Over-dimension
- Air service options: Charter, Next Flight, Next Day, etc.
- Container types: 20ft, 40ft, 40ft HQ
- Contact info: 972-200-0606, sales@unilinktransportation.com
- Location: San Antonio, TX
- Certifications: ISO 9001:2015, C-TPAT, OEA partners

---

## Change Log

### December 12, 2025
- [DEPLOY] Created GitHub repo: ithomeportal/unilink-web
- [DEPLOY] Deployed to Vercel: https://unlk-web.vercel.app
- [REMOVE] Air Freight service page and references
- [REMOVE] Ocean Shipping service page and references
- [REMOVE] Services hub page
- [REMOVE] Quote request form
- [REMOVE] Social media links (temporary)
- [CREATE] Carrier onboarding form (/carriers)
- [CREATE] Favicon (icon.png, apple-icon.png, opengraph-image.png)
- [CREATE] Favicon generation script
- [UPDATE] Homepage - trucking-only focus with carrier CTAs
- [UPDATE] Header - simplified nav, "Become a Carrier" button
- [UPDATE] Footer - added logo, updated links, removed social icons
- [UPDATE] About page - carrier-focused CTAs
- [UPDATE] Contact page - 24/7 hours, removed social section
- [UPDATE] Careers page - jobs.unilinktransportation.com URL
- [UPDATE] Trucking page - carrier partner CTAs
- [UPDATE] Site metadata - trucking-only keywords
- [INTEGRATE] 16 selected images from /graph folder

### December 11, 2025
- [CREATE] Initial project setup with Next.js 14
- [CREATE] All 10 pages built from scratch
- [CREATE] Custom Tailwind configuration
- [CREATE] Responsive header and footer components
- [CREATE] ImagePlaceholder component for missing photos
- [CREATE] Multi-step quote form with validation
- [MIGRATE] All content from WordPress site
- [ENHANCE] Added service detail pages
- [ENHANCE] Added equipment information
- [ENHANCE] Added interactive elements

---

## Technical Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| Dec 12, 2025 | Remove Air/Ocean services | Business no longer offers these services |
| Dec 12, 2025 | Carrier onboarding vs Quote form | Clients don't find company via web; focus on carrier acquisition |
| Dec 12, 2025 | 24/7 business hours | Company operates around the clock |
| Dec 12, 2025 | Remove social links temp | Will add once client provides actual URLs |
| Dec 11, 2025 | Next.js 14 with App Router | Modern React framework, great for SEO, Vercel integration |
| Dec 11, 2025 | Tailwind CSS | Rapid development, consistent styling, small bundle |
| Dec 11, 2025 | TypeScript | Type safety, better developer experience |
| Dec 11, 2025 | Lucide React icons | Clean, consistent icon set, tree-shakeable |
| Dec 11, 2025 | No backend/CMS | Client requested static site, forms can use external service |

---

## Deployment History

| Date | Version | Environment | Status | Notes |
|------|---------|-------------|--------|-------|
| Dec 12, 2025 | v2.0.0 | Production | Live | https://unlk-web.vercel.app |
| Dec 12, 2025 | v1.0.0 | Production | Replaced | Initial deployment |

---

## Image Selection Log (December 12, 2025)

Selected best images from /graph folder variants:

| Category | Selected | Reason |
|----------|----------|--------|
| hero-main | C | Best composition, professional lighting |
| team-photo | C | Clear faces, professional setting |
| trucking-hero | C | Dynamic angle, modern truck |
| headquarters | A | Clean exterior shot |
| office-interior | C | Modern, professional workspace |
| operations | A | Shows technology/screens |
| truck-driver | B | Professional, approachable |
| equipment-dryvan | B | Clear equipment shot |
| equipment-flatbed | C | Good angle, loaded cargo |
| equipment-overdimension | B | Shows specialized equipment |
| container-20ft | A | Standard container, clear |
| container-40ft | C | Good perspective |
| container-40ft-hc | B | Shows height difference |
| coverage-map | C | Clear North America coverage |

