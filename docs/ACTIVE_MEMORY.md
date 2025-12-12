# Unilink Transportation Website - Active Memory

> This file tracks the current state of the project, pending tasks, and important context for ongoing work.

---

## Current Status: LIVE ON VERCEL

### Project Phase
**Phase 4: Live & Refinement**

- Phase 1 (Complete): Website structure and code
- Phase 2 (Complete): Asset collection and integration
- Phase 3 (Complete): Deployment to Vercel
- Phase 4 (Current): Refinement and form integration

---

## Live URLs
- **Production:** https://unlk-web.vercel.app
- **Repository:** https://github.com/ithomeportal/unilink-web
- **Jobs Portal:** https://jobs.unilinktransportation.com

---

## Immediate Priorities

### 1. Form Integration (PENDING)
- [ ] Connect contact form to email service (Formspree, EmailJS, etc.)
- [ ] Connect carrier onboarding form to backend/CRM

### 2. Social Media (PENDING - Client to Provide)
- [ ] LinkedIn URL: _______________
- [ ] Facebook URL: _______________
- [ ] Instagram URL: _______________
(Social media icons removed from footer until URLs are provided)

### 3. Analytics (PENDING)
- [ ] Add Google Analytics or similar
- [ ] Set up conversion tracking

---

## Quick Reference

### Company Info
- **Company:** Unilink Transportation
- **Type:** International 3PL Provider (Trucking Only)
- **CEO:** Erick Mendoza
- **HQ:** San Antonio, TX
- **Phone:** 972-200-0606
- **Email:** sales@unilinktransportation.com
- **Hours:** 24 Hours - Monday to Sunday

### Services (Updated Dec 12, 2025)
1. Over The Road (Trucking) - USA, Canada, Mexico
   - Dry Van (48' and 53')
   - Flatbed (48' and 53')
   - Reefer (48' and 53')
   - Over-Dimension

**REMOVED:** Air Freight, Ocean Shipping (no longer offered)

### Certifications
- ISO 9001:2015 (company)
- C-TPAT (partner carriers)
- OEA (partner carriers)

### Brand Colors
- Primary: #06274E (Navy Blue)
- Accent: #f97316 (Orange)
- Background: #f9fafb (Light Gray)

---

## Current Site Architecture

```
/                    → Home (Trucking focused)
/about               → About Us
/services/trucking   → Over The Road Trucking
/carriers            → Carrier Onboarding Form
/careers             → Work With Us (links to jobs.unilinktransportation.com)
/contact             → Contact
/privacy             → Privacy Policy
```

**Removed Pages:**
- /services (hub page)
- /services/air
- /services/ocean
- /quote

---

## Recent Changes (Dec 12, 2025)

| Change | Status |
|--------|--------|
| Images integrated from /graph folder | Done |
| Deployed to Vercel | Done |
| Removed Air/Ocean services | Done |
| Added Carrier Onboarding | Done |
| Updated to 24/7 hours | Done |
| Updated careers URL | Done |
| Added favicon | Done |
| Removed social media (temp) | Done |

---

## Known Issues / Technical Debt

| Issue | Priority | Notes |
|-------|----------|-------|
| Forms not connected to backend | High | Need email service |
| No analytics | Medium | Add Google Analytics |
| No sitemap.xml | Low | Generate for SEO |

---

## Commands Cheat Sheet

```bash
# Navigate to project
cd /home/dfrvbee/BOT/unlk-web

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for lint errors
npm run lint

# Deploy (auto via Vercel on push)
git add -A && git commit -m "message" && git push origin main
```

---

## File Locations

| What | Where |
|------|-------|
| Homepage | `src/app/page.tsx` |
| Navigation | `src/components/Header.tsx` |
| Footer | `src/components/Footer.tsx` |
| Carrier Form | `src/app/carriers/page.tsx` |
| Trucking Page | `src/app/services/trucking/page.tsx` |
| Global styles | `src/app/globals.css` |
| Tailwind config | `tailwind.config.js` |
| Favicon files | `src/app/icon.png`, `src/app/apple-icon.png` |
| Images | `public/images/` |

---

## Last Updated
December 12, 2025

## Next Session Should
1. Connect forms to email service/backend
2. Add social media links when client provides URLs
3. Set up Google Analytics
4. Generate sitemap.xml for SEO
5. Performance optimization if needed

