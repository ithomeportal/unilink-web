# Unilink Transportation Website - Active Memory

> This file tracks the current state of the project, pending tasks, and important context for ongoing work.

---

## Current Status: AWAITING ASSETS

### Project Phase
**Phase 2: Asset Collection & Integration**

Phase 1 (Complete): Website structure and code
Phase 2 (Current): Collecting photos and assets
Phase 3 (Pending): Testing and refinement
Phase 4 (Pending): Deployment to Vercel

---

## Immediate Priorities

### 1. Photos Needed (BLOCKING)
See `PHOTOS_NEEDED.txt` for complete list with specifications.

**High Priority Photos:**
- [ ] Hero image (homepage)
- [ ] CEO Erick Mendoza portrait
- [ ] Company/team photo
- [ ] At least one truck photo

### 2. Configuration Needed
- [ ] Real social media URLs (currently placeholder)
  - LinkedIn: _______________
  - Facebook: _______________
  - Instagram: _______________
- [ ] Google Maps embed code for contact page
- [ ] Form submission endpoint (email service or backend)

### 3. Content Verification
- [ ] Verify all phone numbers are correct
- [ ] Verify email addresses
- [ ] Confirm business hours
- [ ] Review service descriptions for accuracy

---

## Quick Reference

### Company Info
- **Company:** Unilink Transportation
- **Type:** International 3PL Provider
- **CEO:** Erick Mendoza
- **HQ:** San Antonio, TX
- **Phone:** 972-200-0606
- **Email:** sales@unilinktransportation.com
- **Hours:** Mon-Sat 8:00 AM - 5:00 PM

### Services
1. Over The Road (Trucking) - USA, Canada, Mexico
2. Air Freight - Worldwide
3. Ocean Shipping - Global routes

### Certifications
- ISO 9001:2015 (company)
- C-TPAT (partner carriers)
- OEA (partner carriers)

### Brand Colors
- Primary: #1e40af (Navy Blue)
- Accent: #f97316 (Orange)
- Background: #f9fafb (Light Gray)

---

## Known Issues / Technical Debt

| Issue | Priority | Notes |
|-------|----------|-------|
| Forms not connected to backend | Medium | Need email service (Formspree, EmailJS, etc.) |
| Social links are placeholders | Low | Update when URLs provided |
| No analytics | Low | Add Google Analytics or similar |
| No sitemap.xml | Low | Generate before SEO work |

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
```

---

## File Locations

| What | Where |
|------|-------|
| Homepage | `src/app/page.tsx` |
| Navigation | `src/components/Header.tsx` |
| Footer | `src/components/Footer.tsx` |
| Global styles | `src/app/globals.css` |
| Tailwind config | `tailwind.config.js` |
| Photos checklist | `docs/PHOTOS_NEEDED.txt` |

---

## Last Updated
December 11, 2025

## Next Session Should
1. Check if photos have been provided
2. Replace ImagePlaceholder components with actual images
3. Update social media links if provided
4. Test forms and connect to email service
5. Deploy to Vercel

