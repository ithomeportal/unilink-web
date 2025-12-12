# Unilink Transportation Website - Project Journal

## Project Overview
- **Project:** Unilink Transportation Website Redesign
- **Tech Stack:** Next.js 14, Tailwind CSS, TypeScript
- **Deployment:** Vercel (https://unlk-web.vercel.app)
- **Repository:** https://github.com/ithomeportal/unilink-web
- **Started:** December 11, 2025

---

## Entry #2 - December 12, 2025

### Major Business Pivot
Client confirmed Unilink no longer offers Air Freight or Ocean Shipping services. The company now focuses exclusively on **full container trucking** across North America.

### What Was Done

#### 1. Image Selection & Integration
- Reviewed 52 images in `/graph` folder with multiple variants (A, B, C, D)
- Selected best image for each of 16 categories
- Replaced all `ImagePlaceholder` components with real images
- Copied selected images to `public/images/`

**Selected Images:**
- hero-main C, team-photo C, trucking-hero C, headquarters A
- office-interior C, operations A, truck-driver B
- equipment-dryvan B, equipment-flatbed C, equipment-overdimension B
- container-20ft A, container-40ft C, container-40ft-hc B, coverage-map C

#### 2. GitHub & Vercel Deployment
- Created GitHub repository: `ithomeportal/unilink-web`
- Configured git with proper credentials
- Deployed to Vercel: https://unlk-web.vercel.app
- Set up auto-deploy from main branch

#### 3. Service Restructure (Major Change)
**Removed:**
- `/services/air` - Air Freight page
- `/services/ocean` - Ocean Shipping page
- `/services` - Services hub page
- `/quote` - Quote request form

**Added:**
- `/carriers` - Carrier Onboarding form (replaced /quote)

#### 4. Navigation & UI Updates
- Simplified Header: removed services dropdown
- Changed "Get a Quote" button to "Become a Carrier"
- Updated all pages with trucking-focused messaging
- Added logo to header and footer

#### 5. Content Updates
- Business hours changed to "24 Hours - Monday to Sunday"
- Careers page URL updated to jobs.unilinktransportation.com
- Updated all service descriptions to trucking-only
- Added carrier partner benefits and onboarding info

#### 6. Technical Additions
- Generated favicon (icon.png, apple-icon.png, opengraph-image.png)
- Updated metadata for trucking-only business focus
- Removed social media links (to be configured later)

### Design Decisions
- Carrier-focused CTAs throughout site (not customer quote requests)
- Emphasis on 24/7 digital + human support
- Highlighting trusted carrier network and technology

---

## Entry #1 - December 11, 2025

### What Was Done
- Reviewed existing WordPress website at unilinktransportation.com
- Analyzed all pages: Home, About, Services, Contact, Work With Us
- Extracted all content, services info, and company details
- Designed new site architecture with improved UX

### Website Analysis Summary
**Current site issues identified:**
- Static WordPress with generic template feel
- Limited user engagement (only contact form)
- No clear CTAs for quote requests
- Missing trust elements (testimonials, case studies)
- Services mentioned but not all have dedicated pages

### Technical Implementation
- Set up Next.js 14 with App Router
- Configured Tailwind CSS with custom color scheme
- Created responsive header with mobile menu
- Built all pages with full content
- Implemented multi-step quote form
- Added animations and interactive elements

### Design Decisions
- **Primary Color:** Navy blue (#06274E) - professional, trustworthy
- **Accent Color:** Orange (#f97316) - energy, action-oriented
- **Typography:** Inter font family
- **Style:** Modern, clean, professional

---

## Completed Tasks
- [x] Collect and add actual photos
- [x] Add logo to header and footer
- [x] Deploy to Vercel
- [x] Remove air/ocean services (business change)
- [x] Add carrier onboarding form
- [x] Update business hours
- [x] Update careers URL
- [x] Generate favicon

## Remaining Tasks
- [ ] Configure form submission (backend/email service)
- [ ] Add real social media links when ready
- [ ] SEO optimization
- [ ] Performance testing
- [ ] Add Google Analytics

---

## Notes
- Forms currently simulate submission (need backend integration)
- Social media links removed - will add when client provides URLs
- Careers link points to jobs.unilinktransportation.com

